import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Built with Integrity",
    description: "Transparent pricing, honest timelines, and code you own completely. No lock-in, no hidden costs.",
  },
  {
    icon: Target,
    title: "Precision Customization",
    description: "Every solution is built from scratch around your exact workflows and business requirements.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "We track time saved, efficiency gained, and costs reduced. You'll see the impact in real numbers.",
  },
  {
    icon: Users,
    title: "Client Empowerment",
    description: "We train your team and provide documentation so you're never dependent on us to make changes.",
  },
];

const CompanyValues = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Geometric Elements */}
      <div className="absolute top-20 right-4 sm:right-10 w-36 h-36 sm:w-72 sm:h-72 border-2 border-border/20 rotate-45" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary uppercase mb-4 sm:mb-6">
            Why Build2Automate
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-body px-4">
            We're not just developers—we're your automation partners committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-3 sm:gap-4 lg:gap-6 bg-card border-2 border-border p-4 sm:p-6 lg:p-8 hover:border-accent transition-all h-full relative overflow-hidden">
                {/* Background accent for hover effect */}
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity" />
                
                {/* Icon with Check Badge */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-primary/10 flex items-center justify-center relative">
                    <value.icon className="w-5 h-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 stroke-[2.5] text-primary" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-accent flex items-center justify-center">
                      <svg
                        className="w-1.5 h-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 text-background"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-primary mb-1 sm:mb-2 lg:mb-3 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-foreground/70 font-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
