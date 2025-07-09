import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, BookOpen, Users, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AILawyer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [query, setQuery] = useState("");

  const features = [
    {
      icon: Search,
      title: "Cercetare Juridică",
      description: "Acces instant la jurisprudență, statute și precedente juridice"
    },
    {
      icon: FileText,
      title: "Analiză Documente",
      description: "Analiză de contracte și documente bazată pe IA"
    },
    {
      icon: BookOpen,
      title: "Îndrumare Juridică",
      description: "Consiliere juridică 24/7 pentru probleme complexe"
    },
    {
      icon: Users,
      title: "Consultație Expert",
      description: "Conexiune directă cu avocați calificați când este necesar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Asistent Juridic IA Premium
            </Badge>
            <h1 className="text-4xl font-bold mb-6 font-playfair text-foreground">Cercetare și Consultație Juridică Bazată pe IA</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-source-sans">
              Obțineți îndrumare juridică instantanee cu asistentul nostru IA avansat. Disponibil 24/7 pentru abonații premium 
              cu acces direct la avocați calificați când este necesar.
            </p>
          </div>

          {/* AI Interface */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-playfair text-foreground">Asistent Juridic IA</CardTitle>
                <CardDescription className="font-source-sans">
                  Puneți întrebări juridice, analizați documente sau obțineți asistență instantanee pentru cercetare
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isLoggedIn ? (
                  <div className="text-center space-y-6">
                    <div className="p-8 bg-secondary/30 rounded-lg">
                      <Gavel className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2 font-playfair text-foreground">Funcție Premium</h3>
                      <p className="text-muted-foreground mb-6 font-source-sans">
                        Asistentul Juridic IA este disponibil pentru abonații premium. 
                        Înscrieți-vă astăzi pentru a obține acces instantaneu la îndrumare juridică.
                      </p>
                      <div className="space-y-4">
                        <Badge variant="outline" className="text-lg px-4 py-2">
                          99€/lună - Acces Complet
                        </Badge>
                        <div className="space-x-4">
                          <Button size="lg" asChild>
                            <Link to="/pricing">Abonați-vă Acum</Link>
                          </Button>
                          <Button variant="outline" size="lg" asChild>
                            <Link to="/login">Conectați-vă</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex space-x-4">
                      <Input
                        placeholder="Puneți o întrebare juridică sau descrieți problema dvs. juridică..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1"
                      />
                      <Button>
                        <Search className="h-4 w-4 mr-2" />
                        Întrebați IA
                      </Button>
                    </div>
                    
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2 font-source-sans text-foreground">Întrebări Exemplu:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground font-source-sans">
                        <li>• "Care sunt elementele cheie ale unui contract valid?"</li>
                        <li>• "Cum îmi protejez proprietatea intelectuală?"</li>
                        <li>• "Care sunt drepturile mele ca chiriaș în București?"</li>
                        <li>• "Puteți revizui acest contract de muncă?"</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm font-source-sans">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Section */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-playfair text-foreground">Prețuri Asistent Juridic IA</CardTitle>
              <CardDescription className="font-source-sans">
                Alegeți planul care funcționează cel mai bine pentru nevoile dvs. juridice
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99€</div>
                <div className="text-muted-foreground font-source-sans">pe lună</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="font-source-sans text-foreground">Consultații juridice IA nelimitate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="font-source-sans text-foreground">Analiză și revizuire documente</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="font-source-sans text-foreground">Asistență pentru cercetare juridică 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="font-source-sans text-foreground">Acces prioritar la avocați umani</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="font-source-sans text-foreground">Șabloane și generatoare de formulare juridice</span>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/pricing">Începeți Perioada Gratuită</Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2 font-source-sans">
                  Perioadă gratuită de 7 zile • Anulați oricând
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AILawyer;