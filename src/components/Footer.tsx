
import { Scale } from "lucide-react";
import { Link } from "react-router-dom";
import lawferLogo from "@/assets/lawfer-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={lawferLogo} alt="Lawfer Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-primary font-playfair tracking-wide">Lawfer</span>
            </Link>
            <p className="text-muted-foreground font-source-sans">
              Reprezentare juridică de experți cu tehnologie avansată IA. 
              De încredere pentru companii și particulari la nivel național.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold mb-4 font-source-serif text-foreground">Domenii de practică</h3>
            <ul className="space-y-2 text-muted-foreground font-source-sans">
              <li><Link to="/practice-areas" className="hover:text-primary transition-colors">Drept societar</Link></li>
              <li><Link to="/practice-areas" className="hover:text-primary transition-colors">Litigii</Link></li>
              <li><Link to="/practice-areas" className="hover:text-primary transition-colors">Imobiliare</Link></li>
              <li><Link to="/practice-areas" className="hover:text-primary transition-colors">Proprietate intelectuală</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 font-source-serif text-foreground">Servicii</h3>
            <ul className="space-y-2 text-muted-foreground font-source-sans">
              <li><Link to="/ai-lawyer" className="hover:text-primary transition-colors">Asistent juridic IA</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Consultație juridică</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resurse juridice</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Despre noi</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 font-source-serif text-foreground">Contact</h3>
            <div className="space-y-2 text-muted-foreground font-source-sans">
              <p>Strada Juridică 123<br />București, Sector 1</p>
              <p>Telefon: +40 721 123 456</p>
              <p>Email: office@lawfer.ro</p>
              <p className="text-sm pt-2">
                Urgențe: Disponibil 24/7<br />
                Asistent IA: Mereu online
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-source-sans">
            © {currentYear} Lawfer Cabinet de Avocatură. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors font-source-sans">
              Politica de confidențialitate
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors font-source-sans">
              Termeni și condiții
            </Link>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-primary text-sm transition-colors font-source-sans">
              Clauză de non-responsabilitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
