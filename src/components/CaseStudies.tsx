import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Box } from "lucide-react";

const caseStudies = [
  {
    icon: Clock,
    title: "E-Commerce Order Processing",
    metric: "15 Hours Saved Weekly",
    description: "Automated order processing and inventory management system eliminated manual data entry for a growing online retailer.",
  },
  {
    icon: DollarSign,
    title: "Financial Report Generation",
    metric: "80% Time Reduction",
    description: "Custom reporting dashboard automatically compiles data from multiple sources, delivering real-time financial insights.",
  },
  {
    icon: Box,
    title: "Industrial Product Visualization",
    metric: "40% Faster Sales Cycle",
    description: "High-fidelity 3D product simulations allowed sales teams to demonstrate complex features remotely, significantly reducing sales cycle time.",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary uppercase mb-4 sm:mb-6">
            Real-World Impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-body px-4">
            See how we've helped businesses eliminate bottlenecks, visualize complex products, and scale efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div className="bg-background border-2 border-border p-4 sm:p-6 lg:p-8 h-full hover:border-accent transition-all relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-accent/5 -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8 rotate-45" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center mb-3 sm:mb-6">
                    <study.icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] text-primary" />
                  </div>

                  {/* Metric */}
                  <div className="mb-2 sm:mb-4">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-accent mb-1 uppercase tracking-tight">
                      {study.metric}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-primary mb-2 sm:mb-3 lg:mb-4 uppercase">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 font-body text-sm sm:text-base leading-relaxed">
                    {study.description}
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

export default CaseStudies;
