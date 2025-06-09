
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LawyerProfile = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Legal Expert</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by an experienced attorney with a proven track record of success
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary">JS</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Harvard Law Graduate</Badge>
                    <Badge variant="secondary">15+ Years Experience</Badge>
                    <Badge variant="secondary">500+ Cases Won</Badge>
                  </div>
                  <CardTitle className="text-2xl">John Smith, Esq.</CardTitle>
                  <CardDescription className="text-lg">
                    Senior Partner & Founding Attorney
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    John Smith brings over 15 years of legal expertise to every case, specializing in corporate law, 
                    litigation, and complex commercial transactions. A Harvard Law School graduate, he has successfully 
                    represented clients ranging from startups to Fortune 500 companies.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Corporate Law</Badge>
                      <Badge variant="outline">Commercial Litigation</Badge>
                      <Badge variant="outline">M&A Transactions</Badge>
                      <Badge variant="outline">Intellectual Property</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Education & Bar Admissions:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• J.D., Harvard Law School (Magna Cum Laude)</li>
                      <li>• B.A., Yale University (Political Science)</li>
                      <li>• Licensed in New York, California, and Federal Courts</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild>
                      <Link to="/about">View Full Biography</Link>
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
