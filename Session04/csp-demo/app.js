const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

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
    // Set strict CSP headers
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' https://cdn.jsdelivr.net; " +
        "style-src 'self'; " +
        "img-src 'self' https://*.example.com; " +
        "font-src 'self'; " +
        "connect-src 'self'; " +
        "frame-ancestors 'none'; " +
        "form-action 'self'; " +
        "base-uri 'self'; " +
        "object-src 'none'"
    );
    res.sendFile(path.join(__dirname, 'public', 'csp-demo-strict.html'));
});

// Route for demonstrating CSP form submission restrictions
app.get('/csp-demo-form', (req, res) => {
    // Set strict CSP headers
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' https://cdn.jsdelivr.net; " +
        "style-src 'self'; " +
        "img-src 'self' https://*.example.com; " +
        "font-src 'self'; " +
        "connect-src 'self'; " +
        "frame-ancestors 'none'; " +
        "form-action 'self'; " +
        "base-uri 'self'; " +
        "object-src 'none'"
    );
    res.sendFile(path.join(__dirname, 'public', 'csp-demo-form.html'));
});

// Handle form submission from strict CSP demo
app.post('/submit', (req, res) => {
    // Set strict CSP headers for the response
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' https://cdn.jsdelivr.net; " +
        "style-src 'self'; " +
        "img-src 'self' https://*.example.com; " +
        "font-src 'self'; " +
        "connect-src 'self'; " +
        "frame-ancestors 'none'; " +
        "form-action 'self'; " +
        "base-uri 'self'; " +
        "object-src 'none'"
    );
    
    // Send a response that demonstrates the form submission was successful
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Submission Result</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="demo-section">
                <h1>Form Submission Successful</h1>
                <p>The form was submitted successfully, demonstrating that the form-action CSP directive is working correctly.</p>
                <p>Submitted value: ${req.body.test}</p>
                <a href="/csp-demo-form" class="button">Back to Form Demo</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`CSP Demo app listening at http://localhost:${port}`);
}); 