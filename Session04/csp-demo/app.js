const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Route for demonstrating CSP
app.get('/csp-demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'csp-demo.html'));
});

// Route for demonstrating CSP with inline scripts (will be blocked)
app.get('/csp-demo-inline', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'csp-demo-inline.html'));
});

// Route for demonstrating CSP with external scripts
app.get('/csp-demo-external', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'csp-demo-external.html'));
});

// Route for demonstrating CSP with strict policy
app.get('/csp-demo-strict', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'csp-demo-strict.html'));
});

app.listen(port, () => {
    console.log(`CSP Demo app listening at http://localhost:${port}`);
}); 