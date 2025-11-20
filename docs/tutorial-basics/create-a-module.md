---
sidebar_position: 1
---

# Create a Module


## What is a module ?

A module is an **independent** set of routes that is exposed in your API. It's the logical representation of a business domain. The module will be available through the API using its prefix `/module-name`. 

Let's say you have a module named `Books` to manage basic CRUD operations on a Book model, the route of the module will be `/books/route-name` (for example `/books/search`).

If your API is composed of 2 or more modules : Modules mustn't share any dependencies between each other. This is a key understanding to create a module that will be reusable and secured.

## Create your first Module

Once the new project installation is complete (see installation documentation) :

```bash
cd my-project
endurance new-module <module-name>
```

A basic module is composed of 3 folders : 

- **Routes** : Will contain your one (or many) router files (`.router.ts`) that will expose routes under the `/module-name/` prefix. 

- **Models** (or **Schemas**) : Will contain your one (or many) database schemas (`.schema.ts`). We are currently using Typegoose/Mongoose and supporting MongoDB databases only.  

- **Listeners** : Will contain your one (or many) listeners (`.listener.ts`). They will trigger some actions when a specific event is raised. Events can be coming from inside the application (the Endurance framework or another module), or from outside the application (we are supporting Kafka and AMQP formats).

## Module structure

A typical module structure looks like this:

```
modules/
  my-module/
    routes/
      my-module.router.ts
    models/  (or schemas/)
      MyModel.schema.ts
    listeners/
      my-module.listener.ts
    consumers/  (optional)
      my-module.consumer.ts
    crons/  (optional)
      my-module.cron.ts
```
