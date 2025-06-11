
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const LawyerProfile = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Întâlnește expertul nostru juridic</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source-sans">
            Condus de un avocat cu experiență, cu o reputație dovedită de succes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <Avatar className="w-48 h-48">
                  <AvatarImage 
                    src="/lovable-uploads/65b7c728-9d63-446d-a365-5c1f629c65de.png" 
                    alt="Yarina Laufer" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold text-primary font-playfair bg-primary/20">
                    YL
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Absolventă Facultatea de Drept</Badge>
                    <Badge variant="secondary">15+ Ani Experiență</Badge>
                    <Badge variant="secondary">500+ Cazuri Câștigate</Badge>
                  </div>
                  <CardTitle className="text-2xl font-playfair">Yarina Laufer, Avocat</CardTitle>
                  <CardDescription className="text-lg font-source-sans">
                    Avocat Senior & Fondator
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-source-sans">
                    Yarina Laufer aduce peste 15 ani de expertiză juridică fiecărui caz, specializându-se în dreptul societar, 
                    litigii și tranzacții comerciale complexe. Absolventă cu distincție, a reprezentat cu succes 
                    clienți de la startup-uri la companii Fortune 500.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold font-source-sans">Specializări:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Drept societar</Badge>
                      <Badge variant="outline">Litigii comerciale</Badge>
                      <Badge variant="outline">Tranzacții M&A</Badge>
                      <Badge variant="outline">Proprietate intelectuală</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold font-source-sans">Educație & Admitere la Barou:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 font-source-sans">
                      <li>• Licența în Drept, Universitatea București (Magna Cum Laude)</li>
                      <li>• Masterul în Științe Politice, Universitatea București</li>
                      <li>• Licențiată să practice în România și instanțele federale</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild>
                      <Link to="/about">Vezi biografia completă</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LawyerProfile;
