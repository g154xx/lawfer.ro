
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      content: "Yarina ne-a ajutat să navigăm printr-o achiziție complexă. Expertiza ei în dreptul societăților și atenția la detalii au făcut toată diferența. Recomand cu încredere!",
      rating: 5,
      case: "Tranzacție M&A"
    },
    {
      name: "Michael Chen",
      title: "Dezvoltator imobiliar",
      content: "Reprezentare juridică excepțională în afacerile noastre imobiliare comerciale. Profesională, receptivă și livrează întotdeauna rezultate.",
      rating: 5,
      case: "Imobiliare comerciale"
    },
    {
      name: "Lisa Rodriguez",
      title: "Fondator startup",
      content: "Instrumentul juridic IA este o schimbare majoră! Răspunsuri rapide la întrebări juridice și consultanță excelentă de urmărire. Merită fiecare ban.",
      rating: 5,
      case: "Asistent juridic IA"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mărturii ale clienților</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vedeți ce spun clienții noștri despre serviciile noastre juridice și expertiza
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{testimonial.case}</Badge>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
