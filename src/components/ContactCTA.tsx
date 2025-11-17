import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { send } from "@emailjs/browser";

const ContactCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Log environment variables on component mount
  useEffect(() => {
    console.log('EmailJS Environment Variables:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      serviceIdExists: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateIdExists: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKeyExists: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formDataObj = new FormData(e.currentTarget);

    const formData = {
      name: formDataObj.get("user_name")?.toString().trim() || "",
      email: formDataObj.get("user_email")?.toString().trim() || "",
      company: formDataObj.get("company")?.toString().trim() || "",
      subject: formDataObj.get("subject")?.toString().trim() || "",
      message: formDataObj.get("message")?.toString().trim() || "",
    };

    // Validate form data before sending
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitMessage("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Debug: Log the environment variables and form data
    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('Public Key exists:', !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('Form Data:', formData);
    
    // Check if environment variables are loaded
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS environment variables:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });
      setSubmitMessage("Configuration error. Please contact the website administrator.");
      setIsSubmitting(false);
      return;
    }

    // Validate that the service ID, template ID, and public key have the correct format
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId.startsWith('service_')) {
      console.error('Invalid Service ID format:', serviceId);
      setSubmitMessage("Configuration error: Invalid Service ID. Please contact the website administrator.");
      setIsSubmitting(false);
      return;
    }

    if (!templateId.startsWith('template_')) {
      console.error('Invalid Template ID format:', templateId);
      setSubmitMessage("Configuration error: Invalid Template ID. Please contact the website administrator.");
      setIsSubmitting(false);
      return;
    }

    if (publicKey.length < 10) {
      console.error('Invalid Public Key format:', publicKey);
      setSubmitMessage("Configuration error: Invalid Public Key. Please contact the website administrator.");
      setIsSubmitting(false);
      return;
    }
    
    // Add a timeout to prevent hanging requests
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout after 10 seconds')), 10000);
    });
    
    Promise.race([
      send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "No company provided",
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
          to_name: "Build2Automate Team",
          year: new Date().getFullYear(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
      timeoutPromise
    ])
    .then((response: any) => {
      console.log('EmailJS Success:', response);
      console.log('Response Status:', response.status);
      console.log('Response Text:', response.text);
      setSubmitMessage("Your message has been sent successfully!");
      // Reset form using ref instead of event.currentTarget
      if (formRef.current) {
        formRef.current.reset();
      }
    })
    .catch((error: any) => {
      console.error('EmailJS Error:', error);
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        status: error.status,
        response: error.response,
        // Let's log the environment variables to check if they're loaded correctly
        envVars: {
          serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          // Check if they're undefined
          serviceIdExists: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
          templateIdExists: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          publicKeyExists: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      });
      
      // Provide more specific error messages
      if (error.message === 'Request timeout after 10 seconds') {
        setSubmitMessage("Request timed out. Please check your internet connection and try again.");
      } else if (error.status === 400) {
        setSubmitMessage("Invalid request. Please check your input and try again.");
      } else if (error.status === 401) {
        setSubmitMessage("Authentication failed. Please contact the website administrator.");
      } else if (error.status === 403) {
        setSubmitMessage("Access denied. Please contact the website administrator.");
      } else if (error.status === 500) {
        setSubmitMessage("Server error. Please try again later.");
      } else if (error.text && typeof error.text === 'string') {
        // Handle EmailJS specific errors
        setSubmitMessage(`Error: ${error.text}`);
      } else if (error.message && error.message.includes('Network Error')) {
        setSubmitMessage("Network error. Please check your internet connection and try again.");
      } else if (error.message && error.message.includes('CORS')) {
        setSubmitMessage("CORS error. Please contact the website administrator.");
      } else {
        setSubmitMessage("Failed to send your message. Please try again.");
        // Log the full error for debugging
        console.error('Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
      }
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 border-2 border-primary-foreground rotate-12" />
        <div className="absolute bottom-10 right-4 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 border-2 border-primary-foreground -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold uppercase leading-tight">
              Ready to Automate Your Success?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 font-body leading-relaxed">
              Let's discuss how custom automation can eliminate your bottlenecks and accelerate your growth.
            </p>

            {/* Contact Options */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-primary-foreground/10 border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold uppercase text-sm sm:text-lg">Email Us</h3>
                  <a href="mailto:contact@build2automate.online" className="text-primary-foreground/90 hover:text-primary-foreground text-sm sm:text-base break-words">
                    contact@build2automate.online
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-primary-foreground/10 border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold uppercase text-sm sm:text-lg">Schedule a Call</h3>
                  <p className="text-primary-foreground/90 text-sm sm:text-base">Send an inquiry to book a free 30-minute consultation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background text-foreground p-4 sm:p-6 lg:p-8 border-2 border-primary-foreground/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold uppercase">Quick Inquiry</h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <Input name="user_name" placeholder="Your Name" required className="text-sm sm:text-base" />
                <Input name="user_email" type="email" placeholder="Email Address" required className="text-sm sm:text-base" />
                <Input name="company" placeholder="Company (Optional)" className="text-sm sm:text-base" />

                {/* NEW SUBJECT FIELD */}
                <Input name="subject" placeholder="Subject" required className="text-sm sm:text-base" />

                <Textarea name="message" placeholder="Tell us about your automation needs..." className="text-sm sm:text-base min-h-[100px] sm:min-h-[120px]" />

                <Button type="submit" className="w-full group text-sm sm:text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>Send Inquiry <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition" /></>}
                </Button>

                {submitMessage && (
                  <div className={`mt-3 sm:mt-4 p-2 sm:p-3 text-center rounded-md text-sm sm:text-base ${
                    submitMessage.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;