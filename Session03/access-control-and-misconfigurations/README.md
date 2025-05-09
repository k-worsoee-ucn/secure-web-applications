# Role-Based Access Control (RBAC) Exercise

This is a scaffold for implementing Role-Based Access Control (RBAC) in a web application. Your task is to implement the authentication and authorization system according to the requirements below.

## Important Note
When you first run the application, you will encounter several errors because the core functionality is not yet implemented. This is expected and part of the exercise. You will need to implement:

1. MongoDB connection and User schema
2. Authentication middleware
3. Role-based access control
4. Session management
5. Password hashing

The errors you'll see initially are related to missing type definitions and unimplemented functionality, which you'll need to fix as part of the exercise.

## Exercise Requirements

1. Implement User Authentication:
   - Create a user registration system
   - Implement login functionality
   - Add session management
   - Implement secure password handling

2. Implement Role-Based Access Control:
   - Define three roles: Admin, User, and Guest
   - Implement role checking middleware
   - Protect routes based on user roles
   - Ensure users can only access appropriate resources

3. Security Requirements:
   - Hash passwords before storing
   - Implement session security
   - Add proper error handling
   - Implement secure redirects

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Implementation Tasks

1. Database Setup:
   - Complete the MongoDB connection in `app.js`
   - Create the User schema with required fields

2. Authentication:
   - Implement the `isAuthenticated` middleware
   - Complete the registration route
   - Complete the login route
   - Implement the logout functionality

3. Role-Based Access:
   - Implement the `checkRole` middleware
   - Add role checking to protected routes
   - Implement role-specific access control

4. Security:
   - Add password hashing
   - Implement session security
   - Add proper error handling
   - Implement secure redirects

## Hints

- Use `bcrypt` for password hashing
- Use `express-session` for session management
- Implement proper error handling and user feedback
- Test all role combinations and access restrictions
- Consider edge cases and security implications

## Testing

Test your implementation by:
1. Creating users with different roles
2. Attempting to access role-specific routes
3. Testing authentication flows
4. Verifying security measures

## Learning Objectives

- Understand RBAC concepts and implementation
- Learn about authentication and authorization
- Practice secure coding practices
- Implement role-based access control
- Understand middleware and route protection

## Features

- User authentication (login/register)
- Role-based access control
- Three different user roles:
  - Admin: Full access to all features and administrative controls
  - User: Access to standard user features and personal data
  - Guest: Limited access to basic features
- Protected routes based on user roles
- Clean and intuitive user interface
- Docker containerization

## Prerequisites

### Option 1: Local Development
- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas account)
- npm (Node Package Manager)

### Option 2: Docker
- Docker
- Docker Compose

## Installation

### Option 1: Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd rbac-exercise
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your system or update the MongoDB connection string in `app.js` to point to your MongoDB instance.

4. Start the application:
```bash
npm start
```

### Option 2: Docker

1. Clone the repository:
```bash
git clone <repository-url>
cd rbac-exercise
```

2. Build and start the containers:
```bash
docker-compose up --build
```

The application will be available at `http://localhost:3000`

## Usage

1. Register a new account:
   - Visit `/register`
   - Choose a username and password
   - Select a role (Admin, User, or Guest)

2. Login:
   - Visit `/login`
   - Enter your credentials

3. Access role-specific features:
   - Admin users can access the Admin Panel
   - Regular users can access the User Panel
   - Guest users can access the Guest Panel

## Security Features

- Password hashing using bcrypt
- Session-based authentication
- Role-based access control middleware
- Protected routes
- Flash messages for user feedback

## Exercise Tasks

1. Study the role-based access control implementation in `app.js`
2. Understand how the `checkRole` middleware works
3. Analyze the different access levels for each role
4. Try to access different role-specific pages with different user accounts
5. Implement additional security features or role-specific functionality

## Learning Objectives

- Understand RBAC concepts and implementation
- Learn about authentication and authorization
- Practice secure coding practices
- Implement role-based access control in a web application
- Understand middleware and route protection
- Learn about containerization with Docker

## Note

This is a learning exercise. In a production environment, you would want to add additional security measures such as:
- CSRF protection
- Rate limiting
- Input validation
- Secure session configuration
- HTTPS enforcement
- Password complexity requirements
- Docker security best practices 