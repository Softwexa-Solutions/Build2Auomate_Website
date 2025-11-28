import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of automation solutions do you build?",
      answer: "We specialize in custom website development, web applications, workflow automation, and integration solutions. Each project is tailored to your specific business needs and processes."
    },
    {
      question: "How long does it take to build an automation solution?",
      answer: "Timeline varies based on project complexity. Simple websites typically take 2-4 weeks, while complex web applications and automation workflows may take 4-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer training for your team and provide comprehensive documentation. We also offer optional maintenance and support packages to ensure your solution continues to run smoothly."
    },
    {
      question: "Will I own the code and have full control?",
      answer: "Absolutely. You own 100% of the code we build for you. We believe in transparent pricing with no lock-in, no hidden costs, and complete code ownership for our clients."
    },
    {
      question: "How do you ensure the security of my data and applications?",
      answer: "We follow industry best practices for security including secure coding standards, regular security updates, SSL certificates, and secure hosting recommendations. All solutions are built with security as a top priority."
    },
    {
      question: "Can you integrate with my existing tools and systems?",
      answer: "Yes, integration is one of our specialties. We can connect your existing tools and platforms to create a unified system that works seamlessly for your business operations."
    },
    {
      question: "What is Industrial 3D Visualization?",
      answer: "Industrial 3D Visualization transforms complex technical data (CAD files, engineering schematics) into photorealistic 3D animations and renderings. This helps in clearly communicating product features, assembly processes, and technical concepts that are difficult to explain with traditional video or text."
    },
    {
      question: "How can 3D visualization help my business?",
      answer: "3D visualization accelerates sales cycles by showcasing products before they are manufactured, improves training effectiveness with immersive simulations, and enhances marketing materials with high-fidelity visuals that stand out from competitors."
    },
    {
      question: "What industries do you typically work with?",
      answer: "We work with a diverse range of industries including e-commerce, healthcare, finance, real estate, manufacturing, and professional services. Our solutions are adaptable to any industry's unique requirements."
    },
    {
      question: "How do you measure the ROI of your automation solutions?",
      answer: "We track time saved, efficiency gained, and costs reduced through our solutions. We provide measurable metrics that demonstrate the impact of automation on your business operations."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Geometric Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-36 h-36 sm:w-72 sm:h-72 border-2 border-border/20 -rotate-12" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary uppercase mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-body px-4">
            Get answers to common questions about our automation solutions and services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-card border-2 border-border p-4 sm:p-6 hover:border-accent transition-all">
                  <AccordionTrigger className="text-left text-base sm:text-lg font-body text-foreground font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-body text-sm sm:text-base pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;