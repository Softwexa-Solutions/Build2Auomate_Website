import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import CaseStudies from "@/components/CaseStudies";
import CompanyValues from "@/components/CompanyValues";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="how-we-work">
          <HowWeWork />
        </div>
        <div id="case-studies">
          <CaseStudies />
        </div>
        <div id="why-us">
          <CompanyValues />
        </div>
        <div id="contact">
          <ContactCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
