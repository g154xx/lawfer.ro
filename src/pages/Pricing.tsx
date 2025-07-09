import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 font-playfair text-foreground">Prețuri Simple și Transparente</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-source-sans">
              Alegeți planul care funcționează cel mai bine pentru nevoile dvs. juridice. Toate planurile includ acces la asistentul nostru juridic IA 
              și suport premium de la avocați calificați.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Consultation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-playfair text-foreground">Consultație Unică</CardTitle>
                <CardDescription className="font-source-sans">Perfectă pentru întrebări juridice specifice</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary">150€</div>
                  <div className="text-muted-foreground font-source-sans">per consultație</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Consultație de 1 oră</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Rezumat prin email de urmărire</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Revizuire de bază a documentelor</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Îndrumare juridică și recomandări</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/contact">Rezervați Consultația</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium AI Plan */}
            <Card className="border-2 border-primary hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Cel mai Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-playfair text-foreground">Asistent Juridic IA</CardTitle>
                <CardDescription className="font-source-sans">Suport juridic IA 24/7</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary">99€</div>
                  <div className="text-muted-foreground font-source-sans">pe lună</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Consultații IA nelimitate</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Analiză și revizuire documente</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Cercetare juridică 24/7</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Acces prioritar la avocat</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Șabloane de formulare juridice</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Consultație lunară cu avocatul</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/ai-lawyer">Începeți Perioada Gratuită</Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center font-source-sans">
                  Perioadă gratuită de 7 zile • Anulați oricând
                </p>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-playfair text-foreground">Întreprinderi</CardTitle>
                <CardDescription className="font-source-sans">Pentru companii cu nevoi juridice continue</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary">Personalizat</div>
                  <div className="text-muted-foreground font-source-sans">prețuri</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Tot din planul IA</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Avocat dedicat</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Consultații nelimitate</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Documente juridice personalizate</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Timp de răspuns prioritar</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-source-sans text-foreground">Revizuiri trimestriale ale afacerii</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contactați Vânzările</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 font-playfair text-foreground">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-playfair text-foreground">Cum funcționează asistentul juridic IA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-source-sans">
                    Asistentul nostru IA folosește procesarea avansată a limbajului natural pentru a înțelege întrebările dvs. juridice 
                    și pentru a furniza informații juridice precise și actualizate. Poate analiza documente, cerceta jurisprudența 
                    și furniza îndrumări pe diverse probleme juridice.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-playfair text-foreground">Pot să îmi anulez abonamentul oricând?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-source-sans">
                    Da, vă puteți anula abonamentul oricând. Nu există contracte pe termen lung sau taxe de anulare. 
                    Veți continua să aveți acces la beneficiile abonamentului până la sfârșitul perioadei curente de facturare.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-playfair text-foreground">Sunt informațiile mele confidențiale?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-source-sans">
                    Absolut. Toate comunicările și informațiile partajate prin platforma noastră sunt protejate de 
                    privilegiul avocat-client și acorduri stricte de confidențialitate. Folosim securitate de nivel enterprise 
                    pentru a vă proteja datele.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;