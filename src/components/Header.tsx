
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
      <div className="bg-blue-900 text-white py-2 text-sm border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-white">+40 731 942 295</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white">yarina@lawfer.ro</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <a href="https://wa.me/40731942295" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.5"/>
                  </svg>
                  <span className="text-white">WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-white/80">Program: Luni - Vineri 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - stil Hogan Lovells */}
      <header className="sticky top-0 z-50 w-full bg-blue-900 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo integrated with background */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3b592205-d3ac-4efa-a711-06996be47db7.png" 
                alt="Lawfer Law Firm" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation - stil clean Hogan Lovells */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-white hover:text-teal-200 transition-colors duration-200 relative group font-source-sans"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-200 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA - stil Hogan Lovells */}
            <div className="hidden lg:flex items-center space-x-4">
              <UserMenu />
              <Button size="sm" className="bg-white text-blue-900 hover:bg-teal-50 font-source-sans" asChild>
                <Link to="/contact">Consultație Gratuită</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6 text-white" />
                  <span className="sr-only">Deschide meniu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-blue-900 border-white/20 text-white">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Informații contact în mobile menu */}
                  <div className="border-b border-white/20 pb-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-white">
                      <Phone className="h-4 w-4 text-white" />
                      <span>+40 731 942 295</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white">
                      <Mail className="h-4 w-4 text-white" />
                      <span>yarina@lawfer.ro</span>
                    </div>
                  </div>
                  
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg font-medium transition-colors hover:text-teal-200 border-b border-white/20 pb-2 font-source-sans text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 space-y-3">
                    <div className="flex justify-center">
                      <UserMenu />
                    </div>
                    <Button className="w-full bg-white text-blue-900 hover:bg-teal-50 font-source-sans" asChild>
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
