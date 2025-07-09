
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, MapPin, Menu, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useRole } from "@/hooks/useRole";
import UserMenu from "./UserMenu";

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
      {/* Top Bar cu informații de contact - stil Hogan Lovells */}
      <div className="bg-card/50 backdrop-blur-sm text-foreground py-2 text-sm border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-foreground">+40 721 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-foreground">office@lawfer.ro</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-foreground">București, Sectorul 1</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-muted-foreground">Program: Luni - Vineri 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - stil Hogan Lovells */}
      <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border/50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Royal Cursive - same as Footer */}
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold text-teal-400 font-sans tracking-wide uppercase">Lawfer</span>
            </Link>

            {/* Desktop Navigation - stil clean Hogan Lovells */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group font-source-sans"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA - stil Hogan Lovells */}
            <div className="hidden lg:flex items-center space-x-4">
              <UserMenu />
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-source-sans" asChild>
                <Link to="/contact">Consultație Gratuită</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Deschide meniu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card border-border">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Informații contact în mobile menu */}
                  <div className="border-b border-border pb-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+40 721 123 456</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>office@lawfer.ro</span>
                    </div>
                  </div>
                  
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary border-b border-border pb-2 font-source-sans text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 space-y-3">
                    <div className="flex justify-center">
                      <UserMenu />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 font-source-sans" asChild>
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
