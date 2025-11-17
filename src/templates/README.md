# Email Template Configuration

This directory contains the HTML email template for the Build2Automate contact form. The template is designed to match the website's branding and provide a professional appearance for incoming inquiries.

## Contact Form Email Template

The `ContactEmailTemplate.html` file contains the HTML email template that will be used when someone submits the contact form on the website.

### Template Variables

The following variables are used in the template and must be configured in your EmailJS dashboard:

- `{{name}}` - The name of the person submitting the form
- `{{from_name}}` - The name of the person submitting the form (duplicate of name)
- `{{from_email}}` - The email address of the person submitting the form
- `{{company}}` - The company name provided by the submitter (optional)
- `{{message}}` - The message content from the form
- `{{subject}}` - The subject of the email
- `{{time}}` - The timestamp when the form was submitted
- `{{to_name}}` - The recipient name (typically "Build2Automate Team")
- `{{year}}` - The current year for the footer

### How to Configure in EmailJS Dashboard

1. Log in to your [EmailJS dashboard](https://dashboard.emailjs.com/)
2. Go to "Email Templates" and create a new template or edit an existing one
3. Copy the HTML content from `ContactEmailTemplate.html` into the template editor
4. In the "Content" tab, make sure all the variables mentioned above are defined
5. Save the template
6. Use the template ID in your `.env` file as `VITE_EMAILJS_TEMPLATE_ID`

### Branding Notes

- The template uses the Build2Automate brand colors (dark blue: `hsl(207, 53%, 31%)`, medium blue: `hsl(204, 37%, 56%)`, light blue: `hsl(203, 73%, 79%)`)
- The template uses Orbitron font for headings and DM Sans for body text to match the website
- The design is responsive and will work well on both desktop and mobile email clients