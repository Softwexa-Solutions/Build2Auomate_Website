# Email Template Testing Instructions

## How to Test the Contact Form Email Functionality

To test that the email template is working correctly, follow these steps:

### Prerequisites
- Valid EmailJS account with service configured
- Service ID, Template ID, and Public Key from EmailJS
- Environment variables set up in your `.env` file

### Setup Environment Variables
Create a `.env` file in the project root with the following:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### Testing Steps

1. **Configure the Email Template in EmailJS Dashboard**:
   - Log into your EmailJS dashboard
   - Create a new template or edit an existing one
   - Copy the HTML content from `ContactEmailTemplate.html`
   - Make sure all variables are properly configured: `name`, `from_name`, `from_email`, `company`, `message`, `subject`, `time`, `to_name`, and `year`

2. **Run the Application**:
   ```bash
   npm run dev
   ```

3. **Test the Contact Form**:
   - Navigate to the contact form on the website
   - Fill in the form with test data
   - Submit the form
   - Check the browser console for success or error messages
   - Verify that the email was received with the correct template formatting

4. **Verify Email Content**:
   - Check that the email contains proper branding (colors, fonts)
   - Verify all fields are populated correctly
   - Confirm the layout is responsive and readable

### Troubleshooting

If emails are not sending:
- Verify your environment variables are correct
- Check the browser console for error messages
- Confirm your EmailJS service is properly configured
- Ensure your template variables match what's being sent from the form

### Template Variables Reference
- `name`: Name of the person submitting the form
- `from_email`: Email address of the submitter
- `company`: Company name (optional)
- `message`: The message content
- `subject`: Email subject line
- `time`: Timestamp of submission
- `to_name`: Recipient name
- `year`: Current year for footer