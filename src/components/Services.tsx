import { motion } from "framer-motion";
import { Code, Globe, Workflow, User, Zap } from "lucide-react";

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
    icon: Zap,
    title: "Integration Solutions",
    description: "Seamlessly connect your existing tools and platforms. One unified system that works for you.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-card relative">
      {/* Geometric Background */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-border/30 rotate-12 opacity-50" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary uppercase mb-6">
            What We Build
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-body">
            Custom solutions designed around your specific needs. No templates, no compromises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-background border-2 border-border p-8 h-full transition-all hover:border-accent hover:shadow-lg">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center relative">
                    <service.icon className="w-8 h-8 stroke-[2.5] text-primary" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-primary mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-foreground/70 font-body leading-relaxed">
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
