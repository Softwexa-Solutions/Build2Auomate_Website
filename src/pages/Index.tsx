import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CompanyValues from "@/components/CompanyValues";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import EmailJSTest from "@/components/EmailJSTest";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16 sm:pt-20">
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
        <EmailJSTest />
        <div id="contact">
          <ContactCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}