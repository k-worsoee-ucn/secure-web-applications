const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Store comments in memory (for demonstration purposes)
let comments = [];

// Vulnerable route - displays user input without sanitization
app.get('/', (req, res) => {
    res.render('index', { 
        comments: comments,
        message: req.query.message || ''
    });
});

// Vulnerable route - accepts and displays user input without sanitization
app.post('/comment', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.redirect('/');
});

// Vulnerable route - displays user input in URL parameters without sanitization
app.get('/search', (req, res) => {
    const query = req.query.q || '';
    res.render('index', { 
        comments: comments,
        searchQuery: query,
        message: '' // Add empty message to prevent undefined error
    });
});

app.listen(port, () => {
    console.log(`Vulnerable app listening at http://localhost:${port}`);
}); 