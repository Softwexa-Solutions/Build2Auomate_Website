import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

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
    icon: TrendingUp,
    title: "Marketing Campaign Automation",
    metric: "3x Lead Conversion",
    description: "Integrated CRM and email automation workflow that nurtures leads automatically, tripling conversion rates.",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary uppercase mb-6">
            Real-World Impact
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-body">
            See how we've helped businesses eliminate bottlenecks and scale efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-background border-2 border-border p-8 h-full hover:border-accent transition-all relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -translate-y-8 translate-x-8 rotate-45" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                    <study.icon className="w-7 h-7 stroke-[2.5] text-primary" />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <div className="text-3xl font-heading font-bold text-accent mb-1 uppercase tracking-tight">
                      {study.metric}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-primary mb-4 uppercase">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 font-body leading-relaxed">
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
