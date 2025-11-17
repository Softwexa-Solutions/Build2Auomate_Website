import { motion } from "framer-motion";
import { Search, Lightbulb, Hammer, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your processes to identify automation opportunities and pain points.",
  },
  {
    icon: Lightbulb,
    title: "Prototype",
    description: "Rapid prototyping to validate the solution before full development begins.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Custom development with regular updates and your feedback incorporated throughout.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Smooth deployment with thorough testing and training for your team.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance and optimization to ensure peak performance.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 border-2 border-border/20 -rotate-12" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary uppercase mb-4 sm:mb-6">
            How We Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-body px-4">
            A proven process that delivers results. From initial consultation to ongoing support.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex"
              >
                {/* Step Card */}
                <div className="bg-card border-2 border-border p-4 sm:p-5 lg:p-6 relative z-10 hover:border-accent transition-all group flex flex-col w-full min-h-[220px] sm:min-h-[240px]">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-primary mx-auto mb-3 sm:mb-4 flex items-center justify-center relative">
                    <step.icon className="w-6 h-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 stroke-[2.5] text-primary-foreground" />
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-accent flex items-center justify-center">
                      <span className="text-[10px] sm:text-xs lg:text-xs font-heading font-bold text-background">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-primary mb-2 sm:mb-3 uppercase text-center">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 font-body text-center leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Connector for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-accent z-20 transform -translate-y-1/2 rotate-45" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
