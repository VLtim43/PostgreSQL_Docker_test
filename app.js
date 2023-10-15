// Import required modules
const express = require("express");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

// Create an instance of Express
const app = express();

// Create a Prisma client instance
const prisma = new PrismaClient();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes for your API here
// For example, a route to get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/todos", async (req, res) => {
  const { to_do, done } = req.body;

  try {
    const newTodo = await prisma.todo.create({
      data: {
        to_do,
        done,
      },
    });

    res.json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
