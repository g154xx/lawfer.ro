
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gavel, Users, FileText, Scale, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-24 bg-background hero-background overflow-hidden min-h-[600px]">
      {/* Enhanced Floating animated elements - Hogan Lovells style */}
      <div className="floating-elements">
        <div className="floating-element">
          <Scale className="h-16 w-16 text-primary" />
        </div>
        <div className="floating-element">
          <Gavel className="h-12 w-12 text-primary" />
        </div>
        <div className="floating-element">
          <FileText className="h-14 w-14 text-primary" />
        </div>
        <div className="floating-element">
          <Users className="h-10 w-10 text-primary" />
        </div>
        <div className="floating-element">
          <Award className="h-13 w-13 text-primary" />
        </div>
        <div className="floating-element">
          <BookOpen className="h-11 w-11 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 font-source-sans">
            Excelență juridică de încredere din 2024
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground font-playfair leading-tight">
            Reprezentare juridică de experți în care puteți avea{" "}
            <span className="text-primary">încredere</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-source-sans leading-relaxed">
            Oferim servicii juridice cuprinzătoare cu instrumente de ultimă generație bazate pe IA. 
            De la dreptul societăților la litigii, livrăm rezultate care contează.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-source-sans" asChild>
              <Link to="/contact">Programare consultație gratuită</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-source-sans" asChild>
              <Link to="/ai-lawyer">Încearcă asistentul juridic IA</Link>
            </Button>
          </div>
          
          {/* Stats - Hogan Lovells style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-card/70 backdrop-blur-md p-6 rounded-lg border border-border/50 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2 font-playfair">15+</div>
              <div className="text-muted-foreground font-source-sans">Ani de experiență</div>
            </div>
            <div className="text-center bg-card/70 backdrop-blur-md p-6 rounded-lg border border-border/50 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2 font-playfair">500+</div>
              <div className="text-muted-foreground font-source-sans">Cazuri câștigate</div>
            </div>
            <div className="text-center bg-card/70 backdrop-blur-md p-6 rounded-lg border border-border/50 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2 font-playfair">24/7</div>
              <div className="text-muted-foreground font-source-sans">Suport juridic IA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
