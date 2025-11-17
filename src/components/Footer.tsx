import logo from "@/assets/Lockup-WHITE-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12 border-t-2 border-primary-foreground/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div>
            <img src={logo} alt="Build2Automate" className="h-8 sm:h-10 opacity-90" />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/80 font-body text-sm">
              © {new Date().getFullYear()} Build2Automate. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 font-body text-xs mt-1">
              Custom Tech & Workflow Automation Solutions
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="/privacy-policy"
              className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
