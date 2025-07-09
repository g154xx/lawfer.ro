import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, Gavel, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const legalGuides = [
    {
      title: "Înființarea unei Afaceri: Lista de Verificare Juridică",
      description: "Pașii juridici esențiali pentru înființarea unei noi entități comerciale",
      category: "Drept Comercial",
      readTime: "10 min citire"
    },
    {
      title: "Înțelegerea Contractelor de Muncă",
      description: "Termenii și clauzele cheie pe care fiecare angajat ar trebui să le cunoască",
      category: "Dreptul Muncii",
      readTime: "8 min citire"
    },
    {
      title: "Ghidul pentru Cumpărarea Imobilelor",
      description: "Navigați aspectele juridice ale cumpărării proprietății",
      category: "Drept Imobiliar",
      readTime: "15 min citire"
    },
    {
      title: "Noțiuni de Bază ale Proprietății Intelectuale",
      description: "Protejarea ideilor, mărcilor și lucrărilor creative",
      category: "Drept PI",
      readTime: "12 min citire"
    }
  ];

  const legalForms = [
    {
      title: "Acord de Confidențialitate (NDA)",
      description: "Protejați informațiile confidențiale în relațiile comerciale",
      premium: false
    },
    {
      title: "Șablon Contract de Muncă",
      description: "Șablon cuprinzător pentru acordul de angajare",
      premium: true
    },
    {
      title: "Acord de Servicii",
      description: "Șablon pentru contractul de servicii profesionale",
      premium: true
    },
    {
      title: "Acord de Parteneriat",
      description: "Documente pentru înființarea parteneriatului comercial",
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 font-playfair text-foreground">Resurse Juridice</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-source-sans">
              Accesați biblioteca noastră cuprinzătoare de ghiduri juridice, șabloane și resurse 
              pentru a vă ajuta să înțelegeți și să navigați problemele juridice cu încredere.
            </p>
          </div>

          {/* Legal Guides Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold font-playfair text-foreground">Ghiduri și Articole Juridice</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalGuides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{guide.category}</Badge>
                      <span className="text-sm text-muted-foreground font-source-sans">{guide.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-playfair text-foreground">{guide.title}</CardTitle>
                    <CardDescription className="font-source-sans">{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      Citește Ghidul
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal Forms Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <FileText className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold font-playfair text-foreground">Formulare și Șabloane Juridice</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalForms.map((form, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {form.premium ? (
                        <Badge>Premium</Badge>
                      ) : (
                        <Badge variant="outline">Gratuit</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-playfair text-foreground">{form.title}</CardTitle>
                    <CardDescription className="font-source-sans">{form.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {form.premium ? (
                      <Button size="sm" asChild>
                        <Link to="/pricing">Upgrade pentru Acces</Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        Descarcă Gratuit
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Gavel className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold font-playfair text-foreground">Întrebări Juridice Frecvente</h2>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-playfair text-foreground">Am nevoie de avocat pentru a începe o afacere?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-source-sans">
                    Deși nu este obligatoriu din punct de vedere legal, consultarea unui avocat la începerea unei afaceri este foarte recomandată. 
                    Un avocat vă poate ajuta să alegeți structura comercială potrivită, să redacteze documente importante, să asigure conformitatea 
                    cu reglementările și să vă protejeze interesele de la început.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-playfair text-foreground">Ce ar trebui să fac dacă primesc o citație juridică?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-source-sans">
                    Nu o ignorați! Citiți citația cu atenție, notați orice termene limită și contactați imediat un avocat. 
                    Multe citații juridice au limite de timp stricte pentru răspuns, iar nerespectarea poate duce la 
                    hotărâri prin lipsă sau alte consecințe adverse.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-playfair text-foreground">Cât costă reprezentarea juridică?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-source-sans">
                    Onorariile juridice variază în funcție de complexitatea problemei, experiența avocatului și locația dvs. 
                    Oferim prețuri transparente cu opțiuni incluzând tarife orare, taxe fixe pentru servicii specifice și 
                    planuri de abonament pentru suport juridic continuu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section>
            <Card className="text-center max-w-2xl mx-auto">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-playfair text-foreground">Aveți nevoie de consiliere juridică personalizată?</CardTitle>
                <CardDescription className="text-lg font-source-sans">
                  Deși resursele noastre oferă informații generale, fiecare situație juridică este unică.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-source-sans">
                  Obțineți consiliere juridică personalizată adaptată situației dvs. specifice cu asistentul nostru juridic bazat pe IA 
                  sau programați o consultație cu avocatul nostru experimentat.
                </p>
                <div className="space-x-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Programați Consultația</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/ai-lawyer">Încercați Asistentul IA</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;