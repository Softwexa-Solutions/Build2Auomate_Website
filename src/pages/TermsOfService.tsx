import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-4 sm:mb-6">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body transition-colors"
            >
              ← Back to Website
            </button>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary uppercase mb-6 sm:mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg prose-primary max-w-none">
            <p className="text-foreground/80 font-body mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground/70 font-body mb-4">
                By accessing and using the Build2Automate website and services, you accept and agree to be bound by these 
                Terms of Service and our Privacy Policy. If you do not agree to these terms, you should not use our website 
                or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">2. Use License</h2>
              <p className="text-foreground/70 font-body mb-4">
                Subject to these terms, we grant you a limited, non-exclusive, non-transferable license to access and 
                use our website for your personal or business use. You may not modify, copy, distribute, or create 
                derivative works from our content without express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">3. User Responsibilities</h2>
              <p className="text-foreground/70 font-body mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-foreground/70 font-body mb-4 space-y-2">
                <li>Providing accurate and complete information when using our services</li>
                <li>Maintaining the security of your account information</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Using our services in a professional and lawful manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">4. Services Description</h2>
              <p className="text-foreground/70 font-body mb-4">
                Build2Automate provides custom automation solutions, web development, and workflow optimization services. 
                All services are provided as described and may be subject to change with notice. We reserve the right to 
                modify our services at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">5. Intellectual Property</h2>
              <p className="text-foreground/70 font-body mb-4">
                All content, features, and functionality on this website are owned by Build2Automate and are protected 
                by intellectual property laws. Our clients retain ownership of custom solutions built for them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">6. Limitation of Liability</h2>
              <p className="text-foreground/70 font-body mb-4">
                Build2Automate shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of our website or services. Our total liability shall not exceed the 
                amount paid by you for the services in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">7. Data and Privacy</h2>
              <p className="text-foreground/70 font-body mb-4">
                We handle your data according to our Privacy Policy. By using our services, you consent to the 
                collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">8. Termination</h2>
              <p className="text-foreground/70 font-body mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for any 
                reason whatsoever, including without limitation if you breach these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">9. Governing Law</h2>
              <p className="text-foreground/70 font-body mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction 
                where Build2Automate operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">10. Changes to Terms</h2>
              <p className="text-foreground/70 font-body mb-4">
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting 
                the new Terms of Service on this page. Your continued use of the website after any changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">11. Contact Information</h2>
              <p className="text-foreground/70 font-body mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-foreground/70 font-body">
                Email: contact@build2automate.online
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;