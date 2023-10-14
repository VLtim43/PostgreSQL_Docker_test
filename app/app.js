const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Create a new todo
app.post("/todos", async (req, res) => {
  const { title, completed } = req.body;
  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        completed,
      },
    });
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating todo" });
  }
});

// Retrieve all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving todos" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
