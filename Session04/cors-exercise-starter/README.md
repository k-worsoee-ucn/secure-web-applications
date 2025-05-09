# CORS Exercise

This exercise helps you understand Cross-Origin Resource Sharing (CORS) by experimenting with different CORS configurations in a simple todo application.

## Setup

### Option 1: Using Docker (Recommended)

1. Make sure you have Docker and Docker Compose installed on your system.

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3000

### Option 2: Manual Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open the `index.html` file in your browser. You can use a simple HTTP server like `python -m http.server 8080` or any other local server.

## Exercise Tasks

1. **Basic CORS Understanding**
   - Open the browser's developer tools (F12)
   - Observe the CORS errors in the console when the frontend tries to access the API
   - Note the error messages and understand what they mean

2. **Testing CORS Restrictions**
   The server is configured with restrictive CORS settings. Try these scenarios:

   a. **Origin Restriction**
   - The server only allows requests from http://localhost:8080
   - Try accessing the frontend from a different port (e.g., http://localhost:8081)
   - Observe the CORS error in the console

   b. **Method Restriction**
   - The server only allows GET and POST methods
   - Try adding a DELETE or PUT method to the frontend code
   - Observe the CORS error for unsupported methods

   c. **Header Restriction**
   - The server only allows the Content-Type header
   - Try adding custom headers to the requests
   - Observe the CORS error for unsupported headers

   d. **Credentials**
   - The server doesn't allow credentials
   - Try adding `credentials: 'include'` to the fetch requests
   - Observe the CORS error for credentials

3. **Configuring CORS**
   - Open `server.js`
   - Modify the CORS configuration to:
     - Allow different origins
     - Allow additional HTTP methods
     - Allow additional headers
     - Enable credentials

## Learning Objectives

- Understand what CORS is and why it's important
- Learn how to configure CORS on a server
- Understand different CORS headers and their purposes
- Practice debugging CORS-related issues
- Learn about security implications of CORS configurations

## Common CORS Headers to Experiment With

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`
- `Access-Control-Allow-Credentials`
- `Access-Control-Max-Age`

## Tips

- Always check the browser's console for CORS-related errors
- Use the Network tab in developer tools to inspect request/response headers
- Remember that CORS is enforced by the browser, not the server
- Test your configurations thoroughly with different scenarios

## Docker Commands Reference

- Start the application: `docker-compose up`
- Start in detached mode: `docker-compose up -d`
- Stop the application: `docker-compose down`
- Rebuild containers: `docker-compose up --build`
- View logs: `docker-compose logs -f` 