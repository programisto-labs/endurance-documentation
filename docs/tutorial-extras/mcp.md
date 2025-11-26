---
sidebar_position: 2
---

# MCP Server

The Endurance MCP (Model Context Protocol) server provides AI assistants with access to Endurance commands and project structure. It allows AI tools to interact with your Endurance project, create files, list events, and more.

## What is MCP?

MCP (Model Context Protocol) is a protocol that enables AI assistants to interact with development tools and project structures. The Endurance MCP server exposes tools and resources that help AI assistants understand and work with Endurance projects.

## Installation

The MCP server is automatically available when you install `@programisto/endurance` in your project. No additional installation is required.

## Starting the MCP Server

You can start the MCP server using the CLI command:

```bash
endurance mcp-server
```

The server will run and listen for MCP protocol requests via stdio.

## Configuration

To use the MCP server with an AI assistant (like Cursor, Claude Desktop, etc.), you need to configure it in your IDE or AI tool settings.

### Example Configuration (Cursor)

Add the following to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "endurance": {
      "command": "npx",
      "args": ["-y", "@programisto/endurance", "mcp-server"]
    }
  }
}
```

## Available Tools

The MCP server provides the following tools:

### create_router
Create a new Endurance router with proper structure.

**Parameters:**
- `name` (string, required): Name of the router (e.g., "users", "products")
- `path` (string, optional): Directory path where the router should be created (default: "src/routes")
- `version` (string, optional): Optional version for the router (e.g., "v1", "1.0")

### create_schema
Create a new Endurance schema (Typegoose model) extending EnduranceSchema.

**Parameters:**
- `name` (string, required): Name of the schema/model (e.g., "User", "Product")
- `path` (string, optional): Directory path where the schema should be created (default: "src/schemas")
- `fields` (array, optional): Array of field definitions with `{name: string, type: string, required?: boolean}`

### create_module
Create a new Endurance module with proper folder structure.

**Parameters:**
- `name` (string, required): Name of the module (e.g., "users", "products")
- `path` (string, optional): Base path for modules (default: "src/modules")
- `createRoutes` (boolean, optional): Whether to create a routes folder (default: true)
- `createListeners` (boolean, optional): Whether to create a listeners folder (default: false)
- `createConsumers` (boolean, optional): Whether to create a consumers folder (default: false)
- `createCrons` (boolean, optional): Whether to create a crons folder (default: false)

### create_listener
Create a new event listener following Endurance conventions.

**Parameters:**
- `name` (string, required): Name of the listener (e.g., "user-created", "order-processed")
- `eventName` (string, required): Event name to listen to (e.g., "USER_CREATED", "ORDER_PROCESSED")
- `path` (string, optional): Directory path where the listener should be created (default: "src/listeners")

### create_consumer
Create a new Kafka or AMQP consumer following Endurance conventions.

**Parameters:**
- `name` (string, required): Name of the consumer (e.g., "user-events", "order-queue")
- `type` (string, required): Type of consumer: "kafka" or "amqp"
- `path` (string, optional): Directory path where the consumer should be created (default: "src/consumers")
- `topic` (string, required for Kafka): Topic/queue name
- `queue` (string, required for AMQP): Queue name
- `brokers` (array, optional for Kafka): Array of broker addresses
- `groupId` (string, optional for Kafka): Consumer group ID

### create_cron
Create a new cron job following Endurance conventions.

**Parameters:**
- `name` (string, required): Name of the cron job (e.g., "cleanup", "backup")
- `schedule` (string, optional): Cron schedule expression (default: "0 * * * *")
- `path` (string, optional): Directory path where the cron should be created (default: "src/crons")
- `description` (string, optional): Description of what the cron job does

### create_auth
Create custom authentication classes (EnduranceAuth and EnduranceAccessControl).

**Parameters:**
- `name` (string, required): Base name for auth classes (e.g., "CustomAuth", "UserAuth")
- `path` (string, optional): Directory path where auth files should be created (default: "src/auth")
- `createAccessControl` (boolean, optional): Whether to create an EnduranceAccessControl class (default: true)

### list_events
List all available events across modules and node_modules.

**Parameters:**
- `path` (string, optional): Base path to search (default: current working directory)

### list_env_vars
List all environment variables used across modules and node_modules.

**Parameters:**
- `path` (string, optional): Base path to search (default: current working directory)

## Available Resources

The MCP server also provides resources that can be read by AI assistants to understand the project structure and available commands.

## Benefits

Using the MCP server with AI assistants provides several benefits:

1. **Code Generation**: AI assistants can create routers, schemas, modules, and other Endurance components automatically
2. **Project Understanding**: AI assistants can understand your project structure and available events
3. **Consistency**: Generated code follows Endurance conventions automatically
4. **Efficiency**: Faster development with AI-assisted code generation

## Example Usage

When configured with an AI assistant, you can ask it to:

- "Create a new router for users"
- "Create a schema for products with name, price, and description fields"
- "List all events in the project"
- "Create a listener for ORDER_CREATED event"

The AI assistant will use the MCP tools to perform these actions automatically.






