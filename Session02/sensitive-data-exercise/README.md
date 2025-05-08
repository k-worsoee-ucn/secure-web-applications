# Secure Data Storage Exercise

This is a starter application for implementing secure data storage and handling in web applications. The application provides a basic structure for user authentication and profile management, where you'll implement password hashing and data encryption.

## Setup

### Option 1: Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

### Option 2: Using Docker

1. Build the Docker image:
```bash
docker build -t secure-data-exercise .
```

2. Run the container:
```bash
docker run -p 3000:3000 secure-data-exercise
```

The server will start on port 3000 by default.

## API Endpoints

- `POST /register` - Register a new user
  - Body: `{ username, password, email, phone }`
- `POST /login` - Login with existing credentials
  - Body: `{ username, password }`
- `GET /profile/:username` - Get user profile
- `PUT /profile/:username` - Update user profile
  - Body: `{ email, phone }`

## Exercise Tasks

### Part 1: Password Hashing
1. Implement password hashing using bcrypt in the registration endpoint
2. Implement password verification in the login endpoint
3. Ensure passwords are never stored in plain text

### Part 2: Data Encryption
1. Implement encryption for sensitive user data (email and phone)
2. Implement decryption when retrieving user data
3. Ensure encryption keys are managed securely

## Security Considerations
- Use environment variables for sensitive configuration
- Implement proper error handling
- Follow security best practices for key management
- Consider implementing rate limiting for authentication endpoints

## Testing
You can test the API endpoints using tools like Postman or curl. Example requests are provided in the exercise documentation. 