# Exercise: Implementing Secure Data Storage and Handling

## Objective:
This exercise aims to provide hands-on experience in applying encryption and data protection methods for secure data storage and handling in web applications. Students will implement password hashing and user data encryption techniques learned in the lecture.

## Part 1: Hashing Passwords

**Overview**: Students will create a secure authentication system that hashes passwords before storing them in a database. 

In this repository on GitHub:  [UCN-PWU-Secure-Web-Applications/sensitive-data-exercise](https://github.com/UCN-PWU-Secure-Web-Applications/sensitive-data-exercise) you will find inspiration for a simple scaffold for your application, that defines endpoints for login, viewing, and editing user data. 

**Note:** The code in the repository does not use a database, but stores data in memory. This will suffice for this exercise, but you may of course try and implement database access if you have the time.

**Tasks**:
1. **Implement Hashing**: Use a secure hashing algorithm (e.g., `bcrypt`) to hash user passwords. Ensure each password is salted before hashing.
2. **Store Hashes**: Modify the database schema to store password hashes and salts (if not automatically included in the hash by the chosen library).
3. **Authentication**: Implement a login mechanism that hashes the input password and compares it with the stored hash for authentication.

**Goals**:
- Understand the importance of hashing and salting passwords.
- Learn to implement secure authentication mechanisms.

## Part 2: Encrypting User Data

**Overview**: Extend the web application to securely store sensitive user information using encryption.

**Tasks**:
1. **Identify Sensitive Data**: Determine which user data is considered sensitive and requires encryption (e.g., email addresses, phone numbers).
2. **Choose an Encryption Method**: Implement symmetric encryption (e.g., AES) for encrypting user data. Use a secure method to generate and store encryption keys.
3. **Encrypt Data Before Storage**: Modify the data storage mechanism to encrypt sensitive information before saving it to the database.
4. **Decrypt Data for Use**: Ensure that encrypted data can be decrypted when needed for legitimate use in the application (e.g., displaying user profiles).

**Goals**:
- Apply encryption techniques to protect user data at rest.
- Manage encryption keys securely.

## Deliverables:  
You can hand in you solution in the following format and get written feedback in return.
- A web application that securely hashes user passwords for storage.
- Extension of the application to encrypt sensitive user data before storing it in the database.
- Documentation detailing the implemented security measures and choices of algorithms.

## Assessment Criteria:
- Correct implementation of password hashing and salting.
- Secure storage and handling of encrypted user data.
- Ability to explain the implemented security measures and their importance.

## Resources:
- [bcrypt documentation](https://www.npmjs.com/package/bcrypt) for password hashing.
- [Crypto module in Node.js](https://nodejs.org/api/crypto.html) for data encryption and decryption.
- [OWASP Cheatsheet](https://cheatsheetseries.owasp.org/) for best practices in web application security.

