
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-32 overflow-hidden min-h-[700px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-source-sans">
            Suntem aici pentru tine cu
          </p>
          <p className="text-white text-sm uppercase tracking-[0.3em] mb-4 font-source-sans">
            consultanță juridică
          </p>
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-source-sans">
            servicii rapide
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white font-playfair leading-tight">
            Avocat Lawfer
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-source-sans leading-relaxed">
            Ai parte de un litigiu, iar procesele juridice ți se par greoaie și abstracte? 
            Avocații noștri sunt pregătiți să îți facă viața mai ușoară! Venim în sprijinul tău cu sesiuni de 
            consultanță juridică, în care analizăm cazul tău și găsim cele mai potrivite soluții pentru ca 
            viața ta să își reia cursul obișnuit. Serviciile noastre sunt rapide, clare și sincere.
          </p>
          
          <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-source-sans uppercase tracking-wide" asChild>
            <Link to="/contact">Contactează Avocatul</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
