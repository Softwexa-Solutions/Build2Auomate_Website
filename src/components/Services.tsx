import { motion } from "framer-motion";
import { Code, Globe, Workflow, Box } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom-built websites that convert visitors into customers. Fast, responsive, and optimized for your business goals.",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Powerful web apps tailored to your unique processes. Scalable solutions that grow with your business.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect your tools and eliminate repetitive tasks. Save hours every week with intelligent automation.",
  },
  {
    icon: Box,
    title: "Industrial 3D Visualization",
    description: "Turn complex CAD data into photorealistic 3D animations. We use Blender to create high-fidelity simulations for technical training, product marketing, and process visualization.",
  },
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 border border-border/30 rotate-12 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary uppercase mb-4 sm:mb-6">
            What We Build
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-body px-4">
            Custom solutions designed around your specific needs. No templates, no compromises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-background border-2 border-border p-4 sm:p-6 lg:p-8 h-full transition-all hover:border-accent hover:shadow-lg">
                {/* Icon */}
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 flex items-center justify-center relative">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[2.5] text-primary" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-2 border-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary mb-2 sm:mb-3 lg:mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-foreground/70 font-body text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
