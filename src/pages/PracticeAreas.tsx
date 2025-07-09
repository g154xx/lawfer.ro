import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gavel, Users, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PracticeAreasPage = () => {
  const practiceAreas = [
    {
      icon: Gavel,
      title: "Drept Comercial",
      description: "Servicii juridice complete pentru companii de toate dimensiunile",
      details: "Oferim suport juridic complet pentru companii, inclusiv înființarea entităților, guvernanță, conformitate, fuziuni și achiziții, și negocierea contractelor. Expertiza noastră ajută companiile să navigheze în peisajul juridic complex în timp ce se concentrează pe creștere și succes.",
      services: [
        "Înființarea și Structurarea Companiei",
        "Guvernanță Corporativă",
        "Fuziuni și Achiziții",
        "Negocierea Contractelor",
        "Conformitate și Reglementare",
        "Dreptul Valorilor Mobiliare"
      ]
    },
    {
      icon: Users,
      title: "Litigii",
      description: "Reprezentare agresivă în disputele civile și comerciale",
      details: "Practica noastră de litigii acoperă o gamă largă de dispute civile și comerciale. Combinăm gândirea strategică cu susținerea agresivă pentru a obține rezultate favorabile pentru clienții noștri în instanțele de stat și federale.",
      services: [
        "Litigii Comerciale",
        "Dispute Contractuale",
        "Dreptul Muncii",
        "Prejudicii Personale",
        "Prejudicii Comerciale",
        "Apeluri"
      ]
    },
    {
      icon: FileText,
      title: "Dreptul Imobiliar",
      description: "Servicii juridice complete pentru toate tipurile de tranzacții imobiliare",
      details: "De la achiziții rezidențiale la dezvoltări comerciale complexe, gestionăm toate aspectele dreptului imobiliar. Echipa noastră asigură tranzacții fără probleme în timp ce vă protejează interesele pe tot parcursul procesului.",
      services: [
        "Tranzacții Rezidențiale",
        "Imobiliare Comerciale",
        "Dezvoltarea Proprietății",
        "Zonare și Utilizarea Terenurilor",
        "Dreptul Proprietar-Chiriași",
        "Litigii Imobiliare"
      ]
    },
    {
      icon: BookOpen,
      title: "Proprietatea Intelectuală",
      description: "Protejarea inovațiilor, mărcilor și lucrărilor creative",
      details: "În economia cunoașterii de astăzi, proprietatea intelectuală este adesea cel mai valoros activ al dvs. Vă ajutăm să protejați, să aplicați și să monetizați drepturile de PI prin strategii juridice cuprinzătoare.",
      services: [
        "Cereri de Brevete",
        "Înregistrarea Mărcilor",
        "Protecția Drepturilor de Autor",
        "Secrete Comerciale",
        "Licențierea PI",
        "Litigii PI"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 font-playfair text-foreground">Domeniile de Practică</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-source-sans">
              Oferim servicii juridice cuprinzătoare în multiple domenii de practică, 
              combinând expertiza profundă cu tehnologia inovatoare pentru a livra rezultate excepționale.
            </p>
          </div>

          {/* Practice Areas Grid */}
          <div className="space-y-12">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <area.icon className="h-10 w-10 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        Practică Specializată
                      </Badge>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-2xl font-playfair text-foreground">{area.title}</CardTitle>
                      <CardDescription className="text-lg font-source-sans">{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground font-source-sans">{area.details}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 font-source-sans text-foreground">Serviciile includ:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {area.services.map((service, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              <span className="text-sm font-source-sans text-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button asChild>
                          <Link to="/contact">Discutați Cazul Dvs.</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">Aveți nevoie de asistență juridică?</CardTitle>
                <CardDescription className="font-source-sans">
                  Nu vă regăsiți problema juridică specifică în listă? Gestionăm o gamă largă de probleme juridice.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-source-sans">
                  Fiecare situație juridică este unică. Contactați-ne astăzi pentru a discuta nevoile dvs. specifice 
                  și aflați cum vă putem ajuta să obțineți cel mai bun rezultat posibil.
                </p>
                <div className="space-x-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Programați Consultația</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/ai-lawyer">Întrebați Asistentul IA</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreasPage;