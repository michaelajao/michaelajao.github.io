# EmailJS Setup Guide 📧

## 🚀 Quick Setup Instructions

### Step 1: Get Your EmailJS User ID
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to **Account** > **API Keys**
3. Copy your **User ID** (starts with `user_`)
4. Replace `user_XXXXXXXXXXXXX` in `.env.local` with your actual User ID

### Step 2: Verify Service ID
✅ **Already Done!** Your service ID is `service_4k3qbu9` (from your screenshot)

### Step 3: Create Email Template
1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Portfolio Contact</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            🔒 Secure Contact Form Submission
        </h2>
        
        <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">From:</h3>
            <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">
                <strong>{{from_name}}</strong><br>
                <a href="mailto:{{from_email}}" style="color: #16a34a;">{{from_email}}</a>
            </p>
        </div>

        <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Subject:</h3>
            <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">
                {{subject}}
            </p>
        </div>

        <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 5px;">Message:</h3>
            <div style="margin: 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px; line-height: 1.6;">
                {{message}}
            </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p><strong>Security Info:</strong></p>
            <p>{{security_info}}</p>
            <p>Sent from: <a href="https://michaelajao.github.io" style="color: #16a34a;">michaelajao.github.io</a></p>
        </div>
    </div>
</body>
</html>
```

4. **Subject Line**: `Portfolio Contact: {{subject}}`
5. **To Email**: `ajaoolarinoyemichael@gmail.com`
6. Save the template and copy its ID (starts with `template_`)

### Step 4: Update Environment Variables
Update `.env.local` with your actual values:

```bash
# Replace these with your actual EmailJS values
NEXT_PUBLIC_EMAILJS_USER_ID=your_actual_user_id_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_4k3qbu9
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### Step 5: Test the Setup
1. Run `npm run build` to ensure everything compiles
2. Run `npm run dev` for local testing
3. Fill out the contact form and test it works

## 🔧 Template Variables Used

The contact form sends these variables to your EmailJS template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{to_email}}` - Your email (ajaoolarinoyemichael@gmail.com)
- `{{domain}}` - Website domain for security
- `{{timestamp}}` - When the email was sent
- `{{security_info}}` - Security validation info

## 🛡️ Security Features Maintained

✅ **Domain Validation** - Only allows emails from authorized domains
✅ **Rate Limiting** - Max 3 emails per 10 minutes
✅ **Input Sanitization** - Prevents XSS attacks
✅ **Email Validation** - Validates email format
✅ **CORS Friendly** - EmailJS is designed for client-side use

## 🚨 Important Notes

- EmailJS has a **free tier limit** of 200 emails/month
- Your EmailJS credentials are **safe to expose** client-side (by design)
- The domain validation provides additional security beyond EmailJS
- All security measures from the previous implementation are maintained

## 🧪 Testing

After setup, test with these scenarios:
1. **Valid submission** - Should send email successfully
2. **Rate limiting** - Try sending 4 emails quickly (4th should be blocked)
3. **Invalid email** - Should show validation error
4. **Empty fields** - Should show validation errors

Let me know when you've completed the EmailJS setup, and I'll help you test it! 🎉
