const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

let todos = [
  { id: 1, task: 'Learn Express', completed: false },
  { id: 2, task: 'Build an API', completed: true },
];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get a single todo
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('Todo not found');
  res.json(todo);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('Todo not found');
  todo.task = req.body.task || todo.task;
  todo.completed = req.body.completed ?? todo.completed;
  res.json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Todo not found');
  todos.splice(index, 1);
  res.status(204).send();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


///zod 


const { z } = require('zod');

// Nested schema
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  zipCode: z.string(),
});

const userSchema = z.object({
  name: z.string(),
  age: z.number().min(18),
  address: addressSchema,
});

// Validate data
const userData = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001',
  },
};

const validatedData = userSchema.parse(userData);
console.log(validatedData);


//coersion zod


const express = require('express');
const { z } = require('zod');

const app1 = express();

// Define schema for query parameters
const querySchema = z.object({
  age: z.coerce.number().min(18), // Coerce age to number and validate it's >= 18
  active: z.coerce.boolean(), // Coerce active status to boolean
});

app1.get('/users', (req, res) => {
  try {
    const queryParams = querySchema.parse(req.query);
    res.json({ message: 'Valid query params', data: queryParams });
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
});

app1.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


