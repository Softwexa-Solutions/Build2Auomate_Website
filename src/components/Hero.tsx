import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/build2automate-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-primary rotate-45" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border-2 border-accent" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Logo and Headlines */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.img
              src={logo}
              alt="Build2Automate"
              className="w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-heading font-bold text-primary uppercase tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                AUTOMATE.<br />
                ACCELERATE.<br />
                OWN YOUR WORKFLOW.
              </motion.h1>
              
              <motion.p
                className="text-xl lg:text-2xl text-foreground/80 font-body max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Stop wasting time on repetitive tasks. We build custom tech solutions and workflow automations that eliminate manual work and power your business growth.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-heading font-bold uppercase tracking-wide group"
              >
                Request Your Free Workflow Audit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Icons/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10hrs+", label: "Saved Weekly" },
                { value: "100%", label: "Custom Built" },
                { value: "24/7", label: "Automation" },
                { value: "ROI", label: "Guaranteed" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-card border-2 border-border p-6 text-center relative overflow-hidden group hover:border-accent transition-all"
                >
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative z-10">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-body text-foreground/70 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Geometric Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
