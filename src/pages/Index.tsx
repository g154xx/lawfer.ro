
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gavel, Users, FileText, BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import LawyerProfile from "@/components/LawyerProfile";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* Practice Areas - Similar to gunea.ro */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border hover:border-primary transition-colors group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Gavel className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-playfair text-foreground">Dreptul Penal</h3>
                  <p className="text-muted-foreground text-center font-source-sans">
                    Apărăm interesele și vă ajutăm pentru exercitarea drepturilor dumneavoastră în majoritatea cauzelor penale, 
                    atât pe parcursul fazei de urmărire penală, prin asistarea dvs...
                  </p>
                  <div className="text-center mt-6">
                    <Button variant="outline" asChild>
                      <Link to="/practice-areas">Detalii</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-primary transition-colors group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-playfair text-foreground">Dreptul Civil</h3>
                  <p className="text-muted-foreground text-center font-source-sans">
                    Oferim consultanță și vă reprezentăm juridic în litigii civile de orice fel, precum acțiuni în pretenții 
                    pentru recuperarea creanțelor, daunelor materiale și morale, etc.
                  </p>
                  <div className="text-center mt-6">
                    <Button variant="outline" asChild>
                      <Link to="/practice-areas">Detalii</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-primary transition-colors group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-playfair text-foreground">Contestații la Executare</h3>
                  <p className="text-muted-foreground text-center font-source-sans">
                    Luptăm împotriva băncilor și a recuperatorilor de creante, IFN-urilor etc. și introducem acțiuni solide împotriva 
                    execuțiilor silite începute în mod abuziv.
                  </p>
                  <div className="text-center mt-6">
                    <Button variant="outline" asChild>
                      <Link to="/practice-areas">Detalii</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <LawyerProfile />
        <Testimonials />
        
        {/* AI Lawyer Tool Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-playfair text-foreground">Asistent juridic IA</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source-sans">
                Obțineți îndrumare juridică instantanee cu asistentul nostru juridic avansat bazat pe IA. 
                Disponibil 24/7 pentru clienții premium.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-foreground">Consultație juridică premium cu IA</CardTitle>
                  <CardDescription className="text-lg font-source-sans text-muted-foreground">
                    Instrument avansat de cercetare și consultanță juridică bazat pe IA
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold font-source-sans text-foreground">Revizuire documente</h3>
                      <p className="text-sm text-muted-foreground font-source-sans">Analiză contracte și documente bazată pe IA</p>
                    </div>
                    <div className="text-center p-4">
                      <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold font-source-sans text-foreground">Cercetare juridică</h3>
                      <p className="text-sm text-muted-foreground font-source-sans">Acces instant la jurisprudență și statute</p>
                    </div>
                    <div className="text-center p-4">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold font-source-sans text-foreground">Consultație expert</h3>
                      <p className="text-sm text-muted-foreground font-source-sans">Îndrumare IA 24/7 pentru probleme juridice</p>
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <Badge variant="secondary" className="text-lg px-4 py-2 font-source-sans">
                      Funcție premium - 99€/lună
                    </Badge>
                    <div className="space-x-4">
                      <Button size="lg" asChild>
                        <Link to="/ai-lawyer">Încearcă asistentul IA</Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/pricing">Vezi prețurile</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Gata să obțineți ajutor juridic?</h2>
            <p className="text-xl mb-8 font-source-sans">
              Programați o consultație astăzi și obțineți consiliere juridică de expert
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/contact">Programare consultație</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/about">Aflați mai multe</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
