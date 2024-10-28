export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>

<body
  style="font-family: Arial, sans-serif; line-height: 1.6; color: #4E3620; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #F2C94C, #F2994A); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Confirm Your Email</h1>
  </div>
  <div
    style="background-color: #FDFDFB; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello, <span style="color: #F2C94C;">{name}</span></p>
    <p>Welcome to our platform! To complete your registration, please confirm your email by entering the verification
      code below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #F2C94C;">{verificationCode}</span>
    </div>
    <p>This code will be valid for the next 15 minutes.</p>
    <p>Didn’t Sign Up? Just ignore it—no further action is needed.</p>
    <p>Looking forward to having you onboard!</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #6B705C; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>

</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>

<body
  style="font-family: Arial, sans-serif; line-height: 1.6; color: #4E3620; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #F2C94C, #EB5757); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Complete</h1>
  </div>
  <div
    style="background-color: #FDFDFB; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello, <span style="color: #F2C94C;">{name}</span></p>
    <p>Your password has been successfully reset. You can now log in using your new password.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div
        style="background-color: #F2C94C; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If this wasn’t you, please contact our support team immediately.</p>
    <p>We recommend following these tips for account security:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Avoid reusing passwords across multiple accounts</li>
    </ul>
    <p>Thanks for staying secure with us!</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #6B705C; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>

</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>

<body
  style="font-family: Arial, sans-serif; line-height: 1.6; color: #4E3620; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #F2C94C, #F2994A); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Reset Your Password</h1>
  </div>
  <div
    style="background-color: #FDFDFB; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello, <span style="color: #F2C94C;">{name}</span></p>
    <p>We received a request to reset the password for your account. Click the button below to create a new password:
    </p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}"
        style="background-color: #2D9CDB; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Create
        New Password</a>
    </div>
    <p>This link is valid for the next 1 hour.</p>
    <p>If you didn’t request a password reset, just ignore this message—your account is safe.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #6B705C; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>

</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our Platform</title>
</head>

<body
  style="font-family: Arial, sans-serif; line-height: 1.6; color: #4E3620; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #F2C94C, #F2994A); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Welcome Aboard!</h1>
  </div>
  <div
    style="background-color: #FDFDFB; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello, <span style="color: #F2C94C;">{name}</span></p>
    <p>We are excited to have you with us! Whether you’re here to explore new opportunities, enhance your skills, or connect with others, we’re thrilled to be a part of your journey.</p>
    <p>To get started, you can log in to your account and explore what we have to offer:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{loginURL}"
        style="background-color: #2D9CDB; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Log In to Your Account</a>
    </div>
    <p>If you have any questions or need assistance, feel free to reach out. We’re here to help!</p>
    <p>Welcome once again, and let’s get started!</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #6B705C; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>

</html>
`;
