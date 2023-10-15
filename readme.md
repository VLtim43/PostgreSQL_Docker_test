# PostgreSQL Node.js Express API with Prisma

This repository contains a simple Node.js Express API with Prisma that uses a PostgreSQL database to manage todos.

## Getting Started

Follow these steps to set up the project:

### 1. Create a PostgreSQL Docker Container

You can use Docker to create a PostgreSQL container. Replace `<container>` with your desired container name and `<password>` with your chosen PostgreSQL password.

```
docker run -d \
  --name <container> \
  -e POSTGRES_PASSWORD=<password> \
  -p 5533:5432 \
  postgres:latest
```
### 2. Generate the Prisma client and apply database migrations

```
npx prisma generate
npx prisma migrate dev
```

### 3. Run the Express Application

```
npm install
npm start
```

## Usage
### Get todo
```
curl http://localhost:3000/todos
```
### Post todo
```
curl -X POST -H "Content-Type: application/json" -d '{"to_do": "New Task", "done": false}' http://localhost:3000/todos
```
