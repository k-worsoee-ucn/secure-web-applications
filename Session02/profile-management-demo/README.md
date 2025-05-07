# Broken Access Control Demo

This is a simple Node.js Express application that demonstrates broken access control. Any logged-in user can view or edit any user's profile, regardless of ownership.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

## Usage

### Simulate Login
- Log in as Alice:
  [http://localhost:3000/login/abc123](http://localhost:3000/login/abc123)
- Log in as Bob:
  [http://localhost:3000/login/def456](http://localhost:3000/login/def456)

### View Any Profile (Broken Access Control)
- As Alice, view Bob's profile:
  [http://localhost:3000/view_profile?user_id=user2](http://localhost:3000/view_profile?user_id=user2)

### Edit Any Profile (Broken Access Control)
- As Alice, edit Bob's profile:
  ```bash
  curl -X POST http://localhost:3000/edit_profile \
    -H "Content-Type: application/json" \
    --cookie "session_id=abc123" \
    -d '{"user_id":"user2","data":{"email":"hacked@example.com"}}'
  ```

## What to Observe
- Any logged-in user can view or edit any profile by changing the `user_id` parameter.
- This is a demonstration of **broken access control**. 