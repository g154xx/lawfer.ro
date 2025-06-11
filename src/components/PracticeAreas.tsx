
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gavel, Users, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Gavel,
      title: "Drept societar",
      description: "Servicii juridice complete pentru afaceri, inclusiv contracte, fuziuni, achiziții și conformitatea.",
      features: ["Negociere contracte", "Tranzacții M&A", "Guvernanță corporativă", "Conformitate"]
    },
    {
      icon: Users,
      title: "Litigii",
      description: "Reprezentare agresivă în litigii civile și comerciale cu o expertiză dovedită.",
      features: ["Litigii civile", "Dispute comerciale", "Dreptul muncii", "Dispute contractuale"]
    },
    {
      icon: FileText,
      title: "Drept imobiliar",
      description: "Suport juridic complet pentru tranzacții imobiliare rezidențiale și comerciale.",
      features: ["Tranzacții imobiliare", "Probleme de titlu", "Drept urbanistic", "Relații proprietar-chiriaș"]
    },
    {
      icon: BookOpen,
      title: "Proprietate intelectuală",
      description: "Protejarea inovațiilor, mărcilor comerciale, drepturilor de autor și secretelor comerciale.",
      features: ["Aplicații de brevete", "Înregistrare mărci", "Protecție drepturi de autor", "Litigii PI"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Domenii de practică</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source-sans">
            Oferim servicii juridice experţe în multiple domenii de practică cu cunoştinţe specializate şi experienţă.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-playfair">{area.title}</CardTitle>
                <CardDescription className="font-source-sans">{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm font-source-sans">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/practice-areas">Vezi toate domeniile de practică</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
