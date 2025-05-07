const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookieParser());

// Simulated session and user data
const sessions = {
  'abc123': { id: 'user1', name: 'Alice' },
  'def456': { id: 'user2', name: 'Bob' }
};
const profiles = {
  'user1': { name: 'Alice', email: 'alice@example.com' },
  'user2': { name: 'Bob', email: 'bob@example.com' }
};

// Middleware: only checks if user is logged in, not what they can access
function isLoggedIn(req, res, next) {
  const sessionId = req.cookies['session_id'];
  if (!sessionId || !sessions[sessionId]) {
    return res.status(403).send('Please log in to view or edit profiles.');
  }
  req.user = sessions[sessionId];
  next();
}

// Broken access control: any logged-in user can view any profile
app.get('/view_profile', isLoggedIn, (req, res) => {
  const user_id = req.query.user_id;
  const profile = profiles[user_id];
  if (!profile) return res.status(404).send('Profile not found.');
  res.send(`Profile data for user: ${user_id} - ${JSON.stringify(profile)}`);
});

// Broken access control: any logged-in user can edit any profile
app.post('/edit_profile', isLoggedIn, (req, res) => {
  const user_id = req.body.user_id;
  const new_data = req.body.data;
  if (!profiles[user_id]) return res.status(404).send('Profile not found.');
  profiles[user_id] = { ...profiles[user_id], ...new_data };
  res.send(`Profile updated for user: ${user_id} with new data: ${JSON.stringify(new_data)}`);
});

// Simulate login (for demo purposes)
app.get('/login/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  if (!sessions[sessionId]) return res.status(403).send('Invalid session');
  res.cookie('session_id', sessionId);
  res.send(`Logged in as ${sessions[sessionId].id}`);
});

app.listen(3000, () => console.log('App running on http://localhost:3000')); 