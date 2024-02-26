# Documentation for User Controllers

## Introduction:

These controllers handle user registration and login functionalities for a system with three user types: admin, staff, and user.

## Controllers:

### registerstaff:
#### Purpose: Registers a new user.
#### Request: Expects email and password in the request body.
#### Logic:
Validates if both email and password are provided.
Checks for an existing user with the same email.
If found, returns an error (400) indicating duplicate email.
Checks for an existing admin.
If an admin doesn't exist, sets the user type to "admin" and saves the user.
If an admin exists, sets the user type to "staff" and saves the user.
Returns a success message (201) with the type of user registered ("admin" or "user").
### staffLogin:
#### Purpose: Logs in a staff user.
#### Request: Expects email and password in the request body.
#### Logic:
Validates if both email and password are provided.
Finds the user by email.
If user not found, returns an error (401) indicating invalid credentials.
Compares the provided password with the hashed password stored in the database.
If passwords don't match, returns an error (401) indicating invalid credentials.
Generates a JWT token using the generateJWTToken function.
Returns a success message (200) with the generated token.
### userRegister:
#### Purpose: Registers a new standard user.
#### Request: Expects email and password in the request body.
#### Logic:
Validates if both email and password are provided.
Checks for an existing user with the same email.
If found, returns an error (400) indicating duplicate email.
Sets the user type to "user" and saves the user.
Returns a success message (201) indicating successful user registration.
### userLogin:
#### Purpose: Logs in a standard user.
#### Request: Expects email and password in the request body.
#### Logic:
Validates if both email and password are provided.
Finds the user by email.
If user not found, returns an error (401) indicating invalid credentials.
Compares the provided password with the hashed password stored in the database.
If passwords don't match, returns an error (401) indicating invalid credentials.
Generates a JWT token using the generateJWTToken function (assumed to exist elsewhere).
Returns a success message (200) with the generated token.
## Dependencies:

These controllers depend on the following:
User model for interacting with user data in the database.
bcrypt library for password hashing and comparison.
generateJWTToken function (assumed to exist elsewhere) for generating JWT tokens.
## Error Handling:

All controllers handle potential errors such as missing request data, database errors, and invalid credentials.
Errors are logged to the console and appropriate error messages are returned with specific status codes.
## Note: 
This documentation assumes the generateJWTToken function exists elsewhere and is responsible for securely generating JWT tokens.


# SETUP the SERVER

1) create the .env file and fill the details (referer the keys from env.example and use own values)
2) npm i .
3) npm start

### This will log this line in the console 
MongoDB connected
Server is running on port 3000 //port value will same as the provided in the .env else it will use 3000 as default