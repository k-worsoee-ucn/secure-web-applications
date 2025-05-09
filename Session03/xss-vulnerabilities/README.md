# XSS Vulnerable Web Application

This is a deliberately vulnerable web application created for educational purposes to demonstrate Cross-Site Scripting (XSS) vulnerabilities and how to prevent them.

## Setup Instructions

### Option 1: Local Setup

1. Install dependencies:
```bash
npm install
```

2. Start the application:
```bash
npm start
```

3. Visit http://localhost:3000 in your browser

### Option 2: Docker Setup

1. Build the Docker image:
```bash
docker build -t xss-vulnerable-app .
```

2. Run the container:
```bash
docker run -p 3000:3000 xss-vulnerable-app
```

3. Visit http://localhost:3000 in your browser

## Learning Objectives

This application contains several XSS vulnerabilities that you need to identify and fix:

1. Reflected XSS in the message parameter
2. Stored XSS in the comments section
3. Reflected XSS in the search query parameter

## Vulnerabilities to Fix

1. The application displays user input without proper sanitization in multiple places:
   - URL parameters (message and search query)
   - Comment form submissions
   - Display of stored comments

2. Your task is to implement proper input validation and output sanitization to prevent XSS attacks.

## Example XSS Payloads to Test

Try these payloads to test the vulnerabilities:

1. Basic alert:
```html
<script>alert('XSS')</script>
```

2. Image with error handler:
```html
<img src="x" onerror="alert('XSS')">
```

3. Event handler:
```html
<div onmouseover="alert('XSS')">Hover over me</div>
```

## Security Best Practices to Implement

1. Input Validation
   - Validate all user input
   - Use whitelisting approach
   - Implement proper length restrictions

2. Output Encoding
   - Use proper HTML encoding
   - Implement Content Security Policy (CSP)
   - Use appropriate encoding for different contexts

3. Additional Security Measures
   - Implement CSRF protection
   - Add proper HTTP headers
   - Use secure cookie settings

## Note

This application is intentionally vulnerable and should only be used in a controlled environment for educational purposes. 