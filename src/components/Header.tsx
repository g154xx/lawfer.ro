
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, MapPin, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Acasă", href: "/" },
    { name: "Despre Cabinet", href: "/about" },
    { name: "Servicii Juridice", href: "/practice-areas" },
    { name: "Asistent IA", href: "/ai-lawyer" },
    { name: "Resurse Utile", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar cu informații de contact - stil Hogan Lovells */}
      <div className="bg-muted text-muted-foreground py-2 text-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+40 721 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>office@lawfer.ro</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>București, Sectorul 1</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Program: Luni - Vineri 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - stil Hogan Lovells */}
      <header className="sticky top-0 z-50 w-full bg-background border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Profesional - stil Hogan Lovells */}
            <Link to="/" className="flex items-center space-x-4">
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-primary font-playfair tracking-tight">
                  LAWFER
                </div>
                <div className="text-xs text-muted-foreground font-source-sans tracking-wide -mt-1">
                  by Yarina Laufer
                </div>
              </div>
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
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary font-source-sans" asChild>
                <Link to="/login">
                  <User className="h-4 w-4 mr-2" />
                  Cont Client
                </Link>
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-source-sans" asChild>
                <Link to="/contact">Consultație Gratuită</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Deschide meniu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Informații contact în mobile menu */}
                  <div className="border-b pb-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+40 721 123 456</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>office@lawfer.ro</span>
                    </div>
                  </div>
                  
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary border-b border-border pb-2 font-source-sans"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 space-y-3">
                    <Button variant="outline" className="w-full font-source-sans" asChild>
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        <User className="h-4 w-4 mr-2" />
                        Cont Client
                      </Link>
                    </Button>
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
