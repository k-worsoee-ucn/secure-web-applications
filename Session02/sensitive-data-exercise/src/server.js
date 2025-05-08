const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

// Middleware
app.use(express.json());

// In-memory data store (for demonstration purposes)
const users = new Map();

// Validation middleware
const validateUser = [
    body('username').trim().isLength({ min: 3 }).escape(),
    body('password').isLength({ min: 6 }),
    body('email').isEmail().normalizeEmail(),
    body('phone').optional().trim().escape()
];

// Routes
app.post('/register', validateUser, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, email, phone } = req.body;
    
    if (users.has(username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // TODO: Implement password hashing here
    users.set(username, {
        password, // This should be hashed
        email,    // This should be encrypted
        phone     // This should be encrypted
    });

    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', [
    body('username').trim().escape(),
    body('password').exists()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const user = users.get(username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // TODO: Implement password verification here
    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
});

app.get('/profile/:username', (req, res) => {
    const { username } = req.params;
    const user = users.get(username);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // TODO: Implement data decryption here
    res.json({
        username,
        email: user.email,
        phone: user.phone
    });
});

app.put('/profile/:username', validateUser, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username } = req.params;
    const { email, phone } = req.body;

    if (!users.has(username)) {
        return res.status(404).json({ message: 'User not found' });
    }

    const user = users.get(username);
    
    // TODO: Implement data encryption here
    user.email = email;
    user.phone = phone;
    
    users.set(username, user);
    res.json({ message: 'Profile updated successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 