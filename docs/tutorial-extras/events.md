---
sidebar_position: 1
---

# Events

Events are internal events that a module listener can listen to. 

You can emit events anytime in your application 

```typescript
import { enduranceEmitter, enduranceEventTypes } from '@programisto/endurance';

// Emit an event
enduranceEmitter.emit(enduranceEventTypes.ORDER_CREATED, newOrder);
```

The `enduranceEventTypes` values don't have to be created first. They are created dynamically when accessed. 

You can list all existing events in the application using the Endurance CLI command : 

```bash
endurance list-events
```

## Event Naming Convention

Events are automatically converted to uppercase. For example:
- `enduranceEventTypes.orderCreated` becomes `ORDERCREATED`
- `enduranceEventTypes.USER_REGISTERED` becomes `USER_REGISTERED`

## Listening to Events

To listen to events, use listeners as described in the [Create a Listener](../tutorial-basics/create-a-listener.md) documentation.