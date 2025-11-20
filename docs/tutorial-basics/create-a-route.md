---
sidebar_position: 2
---

# Create a Route

If you are already familiar with Express and TypeScript, this will be plain simple. 


## Create a router

First, we need to create a router class that extends `EnduranceRouter` : 

```typescript
import { EnduranceRouter } from '@programisto/endurance';
import { app } from '@programisto/endurance';

class MyRouter extends EnduranceRouter {
  protected setupRoutes(): void {
    // Your routes will be defined here
  }
}

export default new MyRouter(app.getAuthMiddleware(), app.getUpload());
```

## Add routes 

Adding routes is simple. You can use all HTTP verbs (GET, POST, PUT, DELETE, PATCH) :

```typescript
import { EnduranceRouter } from '@programisto/endurance';
import { app } from '@programisto/endurance';
import { Request, Response } from 'express';

class MyRouter extends EnduranceRouter {
  protected setupRoutes(): void {
    this.get('/', {}, async (req: Request, res: Response) => {
      res.status(200).json({ message: 'Hello World!' });
    });
  }
}

export default new MyRouter(app.getAuthMiddleware(), app.getUpload());
```

The router supports all basic HTTP verbs (from Express). The second parameter of route methods is `securityOptions` which can contain:
- `requireAuth?: boolean` - Require authentication (default: true)
- `permissions?: string[]` - Required permissions
- `checkOwnership?: boolean` - Check if user owns the resource 


## AutoWire

If you have a Model (that extends `EnduranceSchema`) and you want to create an easy CRUD API, you can use the router `autoWireSecure` method :

```typescript
import { EnduranceRouter } from '@programisto/endurance';
import { app } from '@programisto/endurance';
import Webhook from '../models/Webhook.model.js';

class WebhookRouter extends EnduranceRouter {
  protected setupRoutes(): void {
    // This will create CRUD routes: GET /, GET /:id, POST /, PATCH /:id, DELETE /:id
    this.autoWireSecure(Webhook, 'Webhook', {
      requireAuth: true,
      permissions: ['canManageWebhooks'],
      checkOwnership: true
    });
  }
}

export default new WebhookRouter(app.getAuthMiddleware(), app.getUpload());
```

The `autoWireSecure` method creates the following routes automatically:
- `GET /` - List all items
- `GET /:id` - Get a specific item
- `POST /` - Create a new item
- `PATCH /:id` - Update an item
- `DELETE /:id` - Delete an item

The `securityOptions` parameter can contain:
- `requireAuth?: boolean` - Require authentication (default: true)
- `permissions?: string[]` - Required permissions array
- `checkOwnership?: boolean` - Check if user owns the resource

## API Versioning

API versioning is very important if you want to ensure users stability. 

API versioning is already available with Endurance. To create a new version of a router, you just need to duplicate the file and rename by prefixing the version number. 

Example : 
```bash
webhook.router.ts
```

to
```bash
v1-webhook.router.ts
v2-webhook.router.ts
```

Now all the routes will be available through : `/version/router-name/route`

Example :
```bash
/v1/webhook/
```

If API versioning is a matter to you now or in the future, it's strongly recommended to add v1 prefix to all routers by default. 