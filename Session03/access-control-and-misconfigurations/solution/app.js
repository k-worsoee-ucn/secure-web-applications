const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rbac_exercise', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// User Schema with role-based access control
const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ['admin', 'user', 'guest'], 
        default: 'guest' 
    }
});

const User = mongoose.model('User', UserSchema);

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session configuration
app.use(session({
    secret: 'your-secret-key', // In production, use environment variable
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        httpOnly: true, // Prevent client-side access to cookies
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Authentication middleware
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Role-based access control middleware
const checkRole = (role) => {
    return (req, res, next) => {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        
        if (req.session.user.role !== role) {
            return res.status(403).render('error', { 
                message: 'You do not have permission to access this page' 
            });
        }
        
        next();
    };
};

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Registration route
app.post('/register', async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).render('register', { 
                error: 'Username already exists' 
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new User({
            username,
            password: hashedPassword,
            role: role || 'guest'
        });

        await user.save();
        res.redirect('/login');
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).render('register', { 
            error: 'Error during registration' 
        });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).render('login', { 
                error: 'Invalid username or password' 
            });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).render('login', { 
                error: 'Invalid username or password' 
            });
        }

        // Set up session
        req.session.user = {
            id: user._id,
            username: user.username,
            role: user.role
        };

        res.redirect('/dashboard');
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).render('login', { 
            error: 'Error during login' 
        });
    }
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Logout error:', err);
        }
        res.redirect('/');
    });
});

// Protected routes
app.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.session.user });
});

// Role-specific routes
app.get('/admin', isAuthenticated, checkRole('admin'), (req, res) => {
    res.render('admin', { user: req.session.user });
});

app.get('/user', isAuthenticated, checkRole('user'), (req, res) => {
    res.render('user', { user: req.session.user });
});

app.get('/guest', isAuthenticated, checkRole('guest'), (req, res) => {
    res.render('guest', { user: req.session.user });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { 
        message: 'Something went wrong!' 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 