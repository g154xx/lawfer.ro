
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gavel, Users, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Gavel,
      title: "Corporate Law",
      description: "Comprehensive business legal services including contracts, mergers, acquisitions, and compliance.",
      features: ["Contract Negotiation", "M&A Transactions", "Corporate Governance", "Compliance"]
    },
    {
      icon: Users,
      title: "Litigation",
      description: "Aggressive representation in civil and commercial litigation with a proven track record.",
      features: ["Civil Litigation", "Commercial Disputes", "Employment Law", "Contract Disputes"]
    },
    {
      icon: FileText,
      title: "Real Estate Law",
      description: "Full-service real estate legal support for residential and commercial transactions.",
      features: ["Property Transactions", "Title Issues", "Zoning Law", "Landlord-Tenant"]
    },
    {
      icon: BookOpen,
      title: "Intellectual Property",
      description: "Protecting your innovations, trademarks, copyrights, and trade secrets.",
      features: ["Patent Applications", "Trademark Registration", "Copyright Protection", "IP Litigation"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Practice Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide expert legal services across multiple practice areas with specialized knowledge and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
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
            <Link to="/practice-areas">View All Practice Areas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
