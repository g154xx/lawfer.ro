
import { Gavel, FileText, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Gavel className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">LegalPro</span>
            </Link>
            <p className="text-muted-foreground">
              Expert legal representation with cutting-edge AI technology. 
              Trusted by businesses and individuals nationwide.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/practice-areas" className="hover:text-primary transition-colors">Corporate Law</Link></li>
              <li><Link to="/practice-areas" className="hover:text-primary transition-colors">Litigation</Link></li>
              <li><Link to="/practice-areas" className="hover:text-primary transition-colors">Real Estate</Link></li>
              <li><Link to="/practice-areas" className="hover:text-primary transition-colors">Intellectual Property</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/ai-lawyer" className="hover:text-primary transition-colors">AI Legal Assistant</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Legal Consultation</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Legal Resources</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>123 Legal Street<br />New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@legalpro.com</p>
              <p className="text-sm pt-2">
                Emergency: Available 24/7<br />
                AI Assistant: Always Online
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} LegalPro Law Firm. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
