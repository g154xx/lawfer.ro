
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
        <PracticeAreas />
        <LawyerProfile />
        <Testimonials />
        
        {/* AI Lawyer Tool Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Asistent juridic IA</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Obțineți îndrumare juridică instantanee cu asistentul nostru juridic avansat bazat pe IA. 
                Disponibil 24/7 pentru clienții premium.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Consultație juridică premium cu IA</CardTitle>
                  <CardDescription className="text-lg">
                    Instrument avansat de cercetare și consultanță juridică bazat pe IA
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">Revizuire documente</h3>
                      <p className="text-sm text-muted-foreground">Analiză contracte și documente bazată pe IA</p>
                    </div>
                    <div className="text-center p-4">
                      <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">Cercetare juridică</h3>
                      <p className="text-sm text-muted-foreground">Acces instant la jurisprudență și statute</p>
                    </div>
                    <div className="text-center p-4">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">Consultație expert</h3>
                      <p className="text-sm text-muted-foreground">Îndrumare IA 24/7 pentru probleme juridice</p>
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
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
            <h2 className="text-3xl font-bold mb-4">Gata să obțineți ajutor juridic?</h2>
            <p className="text-xl mb-8 opacity-90">
              Programați o consultație astăzi și obțineți consiliere juridică de expert
            </p>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Programare consultație</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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
