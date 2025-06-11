
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gavel, Users, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 font-playfair">Despre Lawfer</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-source-sans">
              Înființat pe principiile excelenței, integrității și inovației, Lawfer combină expertiza juridică tradițională 
              cu tehnologia IA de ultimă generație pentru a oferi servicii juridice de neegalat.
            </p>
          </div>

          {/* Lawyer Detailed Profile */}
          <Card className="mb-16">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="text-8xl font-bold text-primary font-playfair">YL</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="text-3xl font-playfair">Yarina Laufer, Avocat</CardTitle>
                  <CardDescription className="text-xl font-source-sans">Avocat Senior & Fondator</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Absolventă Facultatea de Drept</Badge>
                    <Badge>15+ Ani Experiență</Badge>
                    <Badge>500+ Cazuri Câștigate</Badge>
                    <Badge>Pionier IA Juridic</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 font-source-sans">Fundal profesional</h3>
                    <p className="text-muted-foreground font-source-sans">
                      Yarina Laufer a fondat Lawfer cu o viziune de a revoluționa serviciile juridice prin tehnologie și expertiză. 
                      Cu peste 15 ani de experiență în reprezentarea clienților de la startup-uri la companii din Fortune 500, Yarina și-a 
                      construit o reputație pentru livrarea de rezultate excepționale în probleme juridice complexe.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 font-source-sans">Educație și acreditări</h3>
                    <ul className="space-y-2 text-muted-foreground font-source-sans">
                      <li>• Licența în Drept, Universitatea București (Magna Cum Laude, 2009)</li>
                      <li>• Masterul în Științe Politice, Universitatea București (Summa Cum Laude, 2006)</li>
                      <li>• Licențiată să practice în România și instanțele federale</li>
                      <li>• Membru, Uniunea Națională a Barourilor din România</li>
                      <li>• Certificată în IA și Tehnologie Juridică</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 font-source-sans">Realizări notabile</h3>
                    <ul className="space-y-2 text-muted-foreground font-source-sans">
                      <li>• A finalizat cu succes tranzacții M&A de peste 500M EUR</li>
                      <li>• Câștigătoare în 95% din cazurile de litigiu</li>
                      <li>• Prezentată în Legal 500 ca "Stea în ascensiune"</li>
                      <li>• Pionier în cercetarea juridică asistată de IA</li>
                      <li>• Autor publicat pe subiecte de drept societar</li>
                    </ul>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Firm Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair">Excelență</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-source-sans">
                  Menținem cele mai înalte standarde de practică juridică, oferind rezultate excepționale pentru fiecare client.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair">Orientat către client</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-source-sans">
                  Succesul dvs. este prioritatea noastră. Oferim atenție personalizată și soluții juridice personalizate.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair">Inovație</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-source-sans">
                  Utilizăm IA și tehnologia pentru a oferi servicii juridice mai rapide și mai eficiente.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Gata să lucrăm împreună?</h2>
            <p className="text-lg text-muted-foreground mb-8 font-source-sans">
              Experimentați diferența pe care expertiza și inovația o pot face pentru nevoile dvs. juridice.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link to="/contact">Programează consultație</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/ai-lawyer">Încearcă asistentul IA</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
