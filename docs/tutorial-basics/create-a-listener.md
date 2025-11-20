---
sidebar_position: 4
---

# Create a Listener

A listener is able to trigger an action when an internal event is emitted. The event may be emitted by any other module or by the Endurance framework. 

You can list all available events by using the command 

```bash
endurance list-events
```

## Create a listener 

Create a listener file (e.g., `webhook.listener.ts`) in your module's `listeners` folder:

```typescript
import { enduranceListener } from '@programisto/endurance';
import { enduranceEventTypes } from '@programisto/endurance';
import Webhook from '../models/Webhook.model.js';

enduranceListener.createListener(enduranceEventTypes.WEBHOOK_REGISTERED, (data) => {
    console.log('Webhook registered:', data);
});

console.log('Webhook listener initialized');

export default {};
```

You can also create a listener to listen to any event in the app. This must be avoided except for specific needs like this case : 

```typescript
import { enduranceListener } from '@programisto/endurance';
import Webhook from '../models/Webhook.model.js';

enduranceListener.createAnyListener(async (event: string, data: any) => {
    console.log(`Event received: ${event}`);
    try {
        const WebhookModel = Webhook.getModel();
        const webhooks = await WebhookModel.find({ event });
        webhooks.forEach(webhook => {
            callWebhook(webhook, event, data).catch(error => {
                console.error(`Error in calling webhook: ${webhook.url}`, error);
            });
        });
    } catch (error) {
        console.error(`Error processing event: ${event}`, error);
    }
});
```

## Available listener methods

Here's the list of available methods for the `enduranceListener` object : 

- `createListener(eventName: string, callback: EventCallback)` - Listen to a specific event
- `removeListener(eventName: string, callback: EventCallback)` - Remove a specific listener
- `onceListener(eventName: string, callback: EventCallback)` - Listen to an event only once
- `createAnyListener(callback: EventCallback)` - Listen to all events
- `removeAnyListener(callback: EventCallback)` - Remove an "any listener"