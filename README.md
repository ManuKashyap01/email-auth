# Email Authentication Backend

This is a backend service for email authentication, which includes features such as sending a welcome email, email verification using OTP, password reset, and confirmation emails upon password reset.

## Features
- Send a welcome email upon user registration.
- Verify email with an OTP.
- Reset password functionality.
- Send a confirmation email when the password is successfully reset.

## Tech Stack
- **Backend Framework**: (Node.js / Express)
- **Database**: (MongoDB)
- **Email Service**: (Mailtrap)

## API Endpoints

### 1. User Signup
**Endpoint:** `POST /signup`  
- Registers a new user and sends a welcome email.

### 2. User Signin
**Endpoint:** `POST /signin`  
- Authenticates a user and logs them in.

### 3. User Logout
**Endpoint:** `POST /logout`  
- Logs out the user from the application.

### 4. Verify Email with OTP
**Endpoint:** `POST /verify-email`  
- Verifies the user's email with an OTP sent via email.

### 5. Forgot Password
**Endpoint:** `POST /forgot-password`  
- Sends a password reset link or OTP to the user's email.

### 6. Reset Password
**Endpoint:** `POST /reset-password/:token`  
- Updates the user's password and sends a confirmation email.


## Screenshots

### Welcome Email
![Welcome Email](https://github.com/ManuKashyap01/email-auth/blob/main/Welcome!_page.jpg)

### Email Verification OTP
![Email Verification OTP](https://github.com/ManuKashyap01/email-auth/blob/main/Verify_your_Email_page.jpg)

### Password Reset Email
![Password Reset Email](https://github.com/ManuKashyap01/email-auth/blob/main/Reset_Password_page.jpg)

### Password Reset Confirmation Email
![Password Reset Confirmation Email](https://github.com/ManuKashyap01/email-auth/blob/main/Password_Reset_Successful_page.jpg)
