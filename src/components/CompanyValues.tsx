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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex gap-4 sm:gap-6 bg-card border-2 border-border p-6 sm:p-8 hover:border-accent transition-all h-full">
                {/* Icon with Check Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center relative">
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.5] text-primary" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accent flex items-center justify-center">
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 text-background"
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
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-primary mb-2 sm:mb-3 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 font-body leading-relaxed">
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
