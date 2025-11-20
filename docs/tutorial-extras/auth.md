---
sidebar_position: 1
---

# Auth

The Auth system in Endurance provides authentication and authorization middleware for your API. It's based on abstract classes that you need to extend to implement your own authentication logic.

## Overview

Endurance provides three main classes for authentication:

- `EnduranceAuth` - Abstract class for authentication logic (login, token generation, etc.)
- `EnduranceAccessControl` - Abstract class for authorization logic (permissions, ownership checks)
- `EnduranceAuthMiddleware` - Middleware that combines both classes

## Warning

Since the library is not meant to use models directly, all User implementation has to be provided by your module. 

You can create your own auth classes or use a module from the EDRM library such as `edrm-user`.

## Create your auth classes

Create a folder `auth` in your module or at the root of your project.

Create your auth classes by extending `EnduranceAuth` and `EnduranceAccessControl`:

```typescript
import {
  EnduranceAuth,
  EnduranceAccessControl,
  EnduranceAuthMiddleware
} from '@programisto/endurance';
import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model.js';

class CustomAuth extends EnduranceAuth {
  async getUserById(userId: string): Promise<any> {
    const UserModel = User.getModel();
    return await UserModel.findById(userId);
  }

  async validatePassword(user: any, password: string): Promise<boolean> {
    return user.comparePassword(password);
  }

  async storeRefreshToken(userId: string, token: string): Promise<void> {
    const UserModel = User.getModel();
    await UserModel.updateOne({ _id: userId }, { refreshToken: token });
  }

  async getStoredRefreshToken(token: string): Promise<any> {
    const UserModel = User.getModel();
    return await UserModel.findOne({ refreshToken: token });
  }

  async deleteStoredRefreshToken(token: string): Promise<void> {
    const UserModel = User.getModel();
    await UserModel.updateOne({ refreshToken: token }, { $unset: { refreshToken: 1 } });
  }

  // Implement other required methods...
  async authenticateLocalAndGenerateTokens(email: string, password: string): Promise<any> {
    // Your implementation
  }

  isAuthenticated(): (req: Request, res: Response, next: NextFunction) => void {
    // Your JWT authentication middleware
    return async (req: Request, res: Response, next: NextFunction) => {
      // Add authentication logic here
      next();
    };
  }

  handleAuthError(err: any, req: any, res: any, next: any): void {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

class CustomAccessControl extends EnduranceAccessControl {
  checkUserPermissions(
    permissions: string[],
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    // Check if user has required permissions
    const user = (req as any).user;
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    // Your permission checking logic
    const hasPermission = permissions.every(perm => 
      user.permissions?.includes(perm)
    );
    
    if (!hasPermission) {
      return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
    }
    
    next();
  }

  restrictToOwner(req: Request, res: Response, next: NextFunction): void {
    // Ensure user can only access their own resources
    const user = (req as any).user;
    const resourceOwnerId = (req as any).resource?.userId;
    
    if (user.id !== resourceOwnerId?.toString()) {
      return res.status(403).json({ message: 'Access denied: You do not own this resource' });
    }
    
    next();
  }
}

// Create and set the middleware instance
const authMiddleware = new EnduranceAuthMiddleware(
  new CustomAccessControl(),
  new CustomAuth()
);

EnduranceAuthMiddleware.setInstance(authMiddleware);

export default authMiddleware;
```

## Using auth in your app

After creating your auth classes, you need to initialize the middleware in your app:

```typescript
import { app } from '@programisto/endurance';
import authMiddleware from './auth/index.js';

app.setAuthMiddleware(authMiddleware);
```

## Using auth in routers

Once the auth middleware is set, you can use it in your routers:

```typescript
import { EnduranceRouter } from '@programisto/endurance';
import { app } from '@programisto/endurance';

class MyRouter extends EnduranceRouter {
  protected setupRoutes(): void {
    // Require authentication
    this.get('/protected', { requireAuth: true }, async (req, res) => {
      res.json({ message: 'This is protected' });
    });

    // Require specific permissions
    this.post('/admin', { 
      requireAuth: true,
      permissions: ['admin']
    }, async (req, res) => {
      res.json({ message: 'Admin only' });
    });

    // Check ownership
    this.delete('/resource/:id', {
      requireAuth: true,
      checkOwnership: true
    }, async (req, res) => {
      res.json({ message: 'Resource deleted' });
    });
  }
}

export default new MyRouter(app.getAuthMiddleware(), app.getUpload());
```