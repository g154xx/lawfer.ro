
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      content: "John helped us navigate a complex acquisition. His expertise in corporate law and attention to detail made all the difference. Highly recommended!",
      rating: 5,
      case: "M&A Transaction"
    },
    {
      name: "Michael Chen",
      title: "Real Estate Developer",
      content: "Outstanding legal representation in our commercial real estate deals. Professional, responsive, and always delivers results.",
      rating: 5,
      case: "Commercial Real Estate"
    },
    {
      name: "Lisa Rodriguez",
      title: "Startup Founder",
      content: "The AI legal tool is a game-changer! Quick answers to legal questions and excellent follow-up consultation. Worth every penny.",
      rating: 5,
      case: "AI Legal Assistant"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about our legal services and expertise
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
