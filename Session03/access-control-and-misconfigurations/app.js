const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// TODO: Configure MongoDB connection
// Hint: Use mongoose.connect() to connect to your MongoDB database

// TODO: Create User Schema
// Hint: Define a schema with username, password, and role fields
// The role should be one of: 'admin', 'user', 'guest'

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// TODO: Implement authentication middleware
// Hint: Create a middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    // TODO: Check if user is logged in
    // If not, redirect to login page
    next();
};

// TODO: Implement role-based access control middleware
// Hint: Create a middleware to check user roles
const checkRole = (role) => {
    return (req, res, next) => {
        // TODO: Check if user has the required role
        // If not, redirect to dashboard with error message
        next();
    };
};

// Passport configuration
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

// Routes
app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

// TODO: Implement registration route
app.get('/register', (req, res) => {
    res.render('register', { error: req.flash('error') });
});

app.post('/register', async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const existingUser = await User.findOne({ username });
        
        if (existingUser) {
            req.flash('error', 'Username already exists');
            return res.redirect('/register');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password: hashedPassword,
            role: role || 'guest'
        });

        await user.save();
        req.flash('success', 'Registration successful! Please log in.');
        res.redirect('/login');
    } catch (err) {
        req.flash('error', 'Error during registration');
        res.redirect('/register');
    }
});

// TODO: Implement login route
app.get('/login', (req, res) => {
    res.render('login', { error: req.flash('error') });
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

// TODO: Implement logout route
app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// Protected routes
app.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.user });
});

// TODO: Implement role-specific routes
app.get('/admin', isAuthenticated, checkRole('admin'), (req, res) => {
    res.render('admin', { user: req.user });
});

app.get('/user', isAuthenticated, checkRole('user'), (req, res) => {
    res.render('user', { user: req.user });
});

app.get('/guest', isAuthenticated, checkRole('guest'), (req, res) => {
    res.render('guest', { user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 