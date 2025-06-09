
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, MapPin, User } from "lucide-react";
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
      {/* Top Bar cu informații de contact - specific site-urilor românești */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
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

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo nou Y+L */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center overflow-hidden">
                {/* Logo Y+L combinat */}
                <div className="relative text-primary-foreground font-bold text-xl">
                  <div className="absolute -left-1 top-0 transform">Y</div>
                  <div className="absolute left-2 top-0 transform">L</div>
                  <div className="absolute left-1 top-0 w-3 h-3 border-l-2 border-b-2 border-primary-foreground transform rotate-45 translate-y-1"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">Lawfer</span>
                <span className="text-xs text-muted-foreground -mt-1">by Yarina Laufer</span>
              </div>
            </Link>

            {/* Desktop Navigation - stil românesc cu separatori */}
            <nav className="hidden lg:flex items-center">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                  {index < navigationItems.length - 1 && (
                    <div className="w-px h-4 bg-border mx-2"></div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA - stil românesc */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/login">
                  <User className="h-4 w-4 mr-2" />
                  Cont Client
                </Link>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" asChild>
                <Link to="/contact">Consultație Gratuită</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Deschide meniu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
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
                      className="text-lg font-medium transition-colors hover:text-primary border-b border-border pb-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 space-y-3">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        <User className="h-4 w-4 mr-2" />
                        Cont Client
                      </Link>
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80" asChild>
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
