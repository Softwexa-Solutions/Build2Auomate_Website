import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg prose-primary max-w-none">
            <p className="text-foreground/80 font-body mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-foreground/70 font-body mb-4">
                We collect information you provide directly to us, including when you contact us through our website forms, 
                sign up for our services, or communicate with us. This may include your name, email address, company information, 
                and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-foreground/70 font-body mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 font-body mb-4 space-y-2">
                <li>Provide and improve our automation services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant information about our services</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">3. Information Sharing</h2>
              <p className="text-foreground/70 font-body mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information 
                with trusted third-party service providers who assist us in operating our website, conducting business, 
                or serving our users, provided they agree to maintain the confidentiality of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">4. Data Security</h2>
              <p className="text-foreground/70 font-body mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet or method of 
                electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">5. Your Rights</h2>
              <p className="text-foreground/70 font-body mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 font-body mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Data portability rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">6. Cookies</h2>
              <p className="text-foreground/70 font-body mb-4">
                Our website may use cookies to enhance user experience and analyze website traffic. You can instruct your 
                browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">7. Changes to This Policy</h2>
              <p className="text-foreground/70 font-body mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the 
                new privacy policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">8. Contact Us</h2>
              <p className="text-foreground/70 font-body mb-4">
                If you have questions about this privacy policy, please contact us at:
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

export default PrivacyPolicy;