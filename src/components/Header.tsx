
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Phone, Mail, MapPin, Menu, Scale, ChevronDown, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useRole } from "@/hooks/useRole";
import UserMenu from "./UserMenu";
import lawferLogo from "@/assets/lawfer-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin } = useRole();

  const navigationItems = [
    { name: "Acasă", href: "/" },
    { name: "Despre Cabinet", href: "/about" },
    { name: "Servicii Juridice", href: "/practice-areas" },
    { name: "Asistent IA", href: "/ai-lawyer" },
    { name: "Resurse Utile", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  // Add admin navigation for admins
  if (isAdmin) {
    navigationItems.push({ name: "Admin", href: "/admin" });
  }

  return (
    <>
      {/* Top Bar cu informații de contact */}
      <div className="bg-background text-foreground py-2 text-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">yarina@lawfer.ro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+40 731 942 295</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={lawferLogo} alt="Lawfer Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold text-primary font-playfair tracking-wide">
                LAWFER
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group font-source-sans uppercase tracking-wide"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <UserMenu />
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-source-sans" asChild>
                <Link to="/contact">Consultație Gratuită</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Deschide meniu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-border">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary border-b border-border pb-2 font-source-sans uppercase tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 space-y-3">
                    <div className="flex justify-center">
                      <UserMenu />
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-source-sans" asChild>
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Consultație Gratuită
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
