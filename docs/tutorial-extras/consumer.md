---
sidebar_position: 1
---

# Consumer

A consumer is the listener of external queuing systems like AMQP or Kafka (currently both are supported by Endurance). 

To create a new consumer, you must create a "consumers" folder and a `xxx.consumer.ts` file. 

## AMQP Consumer

```typescript
import { enduranceConsumer } from '@programisto/endurance';
import Order from '../models/order.model.js';

const processAmqpMessage = async (messageContent: string) => {
  try {
    const orderData = JSON.parse(messageContent);

    // Example logic: create a new order from message data
    const OrderModel = Order.getModel();
    const order = new OrderModel(orderData);
    await order.save();

    console.log(`Order processed and saved: ${order._id}`);
  } catch (error) {
    console.error('Error processing AMQP message:', error);
  }
};

enduranceConsumer.createConsumer('amqp', {
  url: process.env.AMQP_URL || 'amqp://localhost',
  queue: 'orderQueue'
}, processAmqpMessage);

export default {};
```

## Kafka Consumer

```typescript
import { enduranceConsumer } from '@programisto/endurance';
import Order from '../models/order.model.js';

const processKafkaMessage = async (messageContent: string) => {
  try {
    const orderData = JSON.parse(messageContent);

    // Example logic: update order status based on message data
    const OrderModel = Order.getModel();
    const order = await OrderModel.findById(orderData.orderId);
    if (order) {
      order.status = orderData.status;
      await order.save();

      console.log(`Order status updated: ${order._id}`);
    }
  } catch (error) {
    console.error('Error processing Kafka message:', error);
  }
};

enduranceConsumer.createConsumer('kafka', {
  brokers: process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'],
  topic: 'orderTopic',
  groupId: 'orderServiceGroup'
}, processKafkaMessage);

export default {};
```

## Consumer Options

### AMQP Options
- `url: string` - AMQP connection URL (e.g., `amqp://localhost`)
- `queue: string` - Queue name to consume from

### Kafka Options
- `brokers: string[]` - Array of Kafka broker addresses
- `topic: string` - Topic name to consume from
- `groupId: string` - Consumer group ID
