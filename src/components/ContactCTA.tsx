import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactCTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 border-2 border-primary-foreground rotate-12" />
        <div className="absolute bottom-10 right-20 w-96 h-96 border-2 border-primary-foreground -rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight">
                Ready to Automate Your Success?
              </h2>
              <p className="text-xl text-primary-foreground/90 font-body leading-relaxed">
                Let's discuss how custom automation can eliminate your bottlenecks and accelerate your growth. Get a free workflow audit and discover where you're losing time.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-primary-foreground/10 border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-heading font-bold uppercase text-lg mb-1">Email Us</div>
                  <a href="mailto:contact@build2automate.com" className="text-primary-foreground/90 hover:text-primary-foreground font-body">
                    contact@build2automate.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary-foreground/10 border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all">
                <Calendar className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-heading font-bold uppercase text-lg mb-1">Schedule a Call</div>
                  <p className="text-primary-foreground/90 font-body">
                    Book a free 30-minute consultation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background text-foreground p-8 border-2 border-primary-foreground/20">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-heading font-bold text-primary uppercase">
                  Quick Inquiry
                </h3>
              </div>

              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-background border-2 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-background border-2 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Company (Optional)"
                    className="bg-background border-2 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your automation needs..."
                    rows={4}
                    className="bg-background border-2 border-border focus:border-accent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold uppercase group"
                  size="lg"
                >
                  Send Inquiry
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
