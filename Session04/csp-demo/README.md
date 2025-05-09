# Content Security Policy (CSP) Demo

This is a demonstration web application that shows how Content Security Policy (CSP) works and how it can be used to enhance web security.

## Features

The demo includes several pages that demonstrate different aspects of CSP:

1. **Inline Script Demo** (`/csp-demo-inline`)
   - Shows how CSP blocks inline scripts
   - Demonstrates the `script-src` directive

2. **External Script Demo** (`/csp-demo-external`)
   - Shows how CSP controls external script loading
   - Demonstrates allowing specific domains for scripts

3. **Strict CSP Demo** (`/csp-demo-strict`)
   - Shows a comprehensive CSP policy
   - Demonstrates multiple security features working together

## Installation

### Option 1: Local Installation

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```

### Option 2: Docker Installation

1. Make sure you have Docker installed on your system
2. Clone this repository
3. Build the Docker image:
   ```bash
   docker build -t csp-demo .
   ```

## Running the Demo

### Option 1: Local Run

1. Start the application:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000/csp-demo`

### Option 2: Docker Run

1. Run the Docker container:
   ```bash
   docker run -p 3000:3000 csp-demo
   ```
2. Open your browser and navigate to `http://localhost:3000/csp-demo`

## How to Test

1. Visit the main demo page at `http://localhost:3000/csp-demo`
2. Click on any of the demonstration links to see different CSP scenarios
3. Open your browser's developer tools (F12) and check the Console tab to see CSP violations
4. Try the following tests:
   - Click the button on the inline script demo to see CSP blocking the inline script
   - Check the external script demo to see which scripts are allowed/blocked
   - Try submitting the form on the strict CSP demo to see form action restrictions

## Understanding CSP Violations

When testing the demo, you'll see CSP violations in your browser's console. These are expected and demonstrate how CSP works:

- Red messages indicate blocked resources
- The messages will show which directive was violated
- You can see which resource was blocked and why

## Security Notes

This demo is for educational purposes only. The CSP policies shown are examples and should be adjusted based on your specific security requirements.

## Resources

- [MDN Web Docs: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- [CSP Reference](https://content-security-policy.com/) 