const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
const todos = [
  { id: 1, text: 'Learn CORS', completed: false },
  { id: 2, text: 'Build secure applications', completed: false }
];

// Configure CORS with restrictive settings
app.use(cors({
  // Only allow requests from http://localhost:8080
  origin: 'http://localhost',
  // Only allow GET and POST methods
  methods: ['GET'],
  // Only allow specific headers
  allowedHeaders: ['Content-Type'],
  // Don't allow credentials
  credentials: false
}));

// Routes
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 