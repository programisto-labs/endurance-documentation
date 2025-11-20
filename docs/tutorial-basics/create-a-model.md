---
sidebar_position: 3
---

# Create a Model

## Create an Endurance schema

Create a TypeScript class that extends `EnduranceSchema` using Typegoose decorators. Endurance uses Typegoose which provides a type-safe way to work with Mongoose.

```typescript
import { EnduranceSchema, EnduranceModelType } from '@programisto/endurance';

class Webhook extends EnduranceSchema {
  @EnduranceModelType.prop({ required: true })
  url!: string;

  @EnduranceModelType.prop({ required: true })
  event!: string;
}

export default Webhook;
```

## Using the model

To use the model in your code, call the static `getModel()` method:

```typescript
import Webhook from './models/Webhook.model.js';

// Get the Mongoose model
const WebhookModel = Webhook.getModel();

// Use it like a regular Mongoose model
const webhooks = await WebhookModel.find();
const webhook = new WebhookModel({ url: 'https://example.com', event: 'USER_CREATED' });
await webhook.save();
```

## Advanced schema options

You can use all Typegoose decorators and options:

```typescript
import { EnduranceSchema, EnduranceModelType } from '@programisto/endurance';
import { Ref } from '@programisto/endurance';

class User extends EnduranceSchema {
  @EnduranceModelType.prop({ required: true })
  name!: string;

  @EnduranceModelType.prop({ required: true, unique: true })
  email!: string;

  @EnduranceModelType.prop({ default: Date.now })
  createdAt!: Date;

  @EnduranceModelType.prop({ ref: () => 'Role' })
  role?: Ref<Role>;
}

export default User;
```

## Collection name

By default, Typegoose will use the class name (lowercased and pluralized) as the collection name. To specify a custom collection name, use the `@EnduranceModelType.modelOptions` decorator:

```typescript
@EnduranceModelType.modelOptions({
  schemaOptions: { collection: 'custom_webhook_collection' }
})
class Webhook extends EnduranceSchema {
  // ...
}
```

Note: Even if modules are independent, they can share and work on some common models if necessary. If you want to work with the same models on multiple modules, make sure to use the same collection name.