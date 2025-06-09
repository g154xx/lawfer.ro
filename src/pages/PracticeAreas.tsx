
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
      title: "Corporate Law",
      description: "Comprehensive business legal services for companies of all sizes",
      details: "We provide full-service corporate legal support including entity formation, governance, compliance, mergers and acquisitions, and contract negotiations. Our expertise helps businesses navigate complex legal landscapes while focusing on growth and success.",
      services: [
        "Business Formation & Structure",
        "Corporate Governance",
        "Mergers & Acquisitions",
        "Contract Negotiation",
        "Compliance & Regulatory",
        "Securities Law"
      ]
    },
    {
      icon: Users,
      title: "Litigation",
      description: "Aggressive representation in civil and commercial disputes",
      details: "Our litigation practice covers a wide range of civil and commercial disputes. We combine strategic thinking with aggressive advocacy to achieve favorable outcomes for our clients in both state and federal courts.",
      services: [
        "Commercial Litigation",
        "Contract Disputes",
        "Employment Law",
        "Personal Injury",
        "Business Torts",
        "Appeals"
      ]
    },
    {
      icon: FileText,
      title: "Real Estate Law",
      description: "Complete real estate legal services for all types of transactions",
      details: "From residential purchases to complex commercial developments, we handle all aspects of real estate law. Our team ensures smooth transactions while protecting your interests throughout the process.",
      services: [
        "Residential Transactions",
        "Commercial Real Estate",
        "Property Development",
        "Zoning & Land Use",
        "Landlord-Tenant Law",
        "Real Estate Litigation"
      ]
    },
    {
      icon: BookOpen,
      title: "Intellectual Property",
      description: "Protecting your innovations, brands, and creative works",
      details: "In today's knowledge economy, intellectual property is often your most valuable asset. We help protect, enforce, and monetize your IP rights through comprehensive legal strategies.",
      services: [
        "Patent Applications",
        "Trademark Registration",
        "Copyright Protection",
        "Trade Secrets",
        "IP Licensing",
        "IP Litigation"
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
            <h1 className="text-4xl font-bold mb-6">Practice Areas</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive legal services across multiple practice areas, 
              combining deep expertise with innovative technology to deliver exceptional results.
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
                        Specialized Practice
                      </Badge>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-2xl">{area.title}</CardTitle>
                      <CardDescription className="text-lg">{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">{area.details}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Services Include:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {area.services.map((service, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              <span className="text-sm">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button asChild>
                          <Link to="/contact">Discuss Your Case</Link>
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
                <CardTitle className="text-2xl">Need Legal Assistance?</CardTitle>
                <CardDescription>
                  Don't see your specific legal matter listed? We handle a wide range of legal issues.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Every legal situation is unique. Contact us today to discuss your specific needs 
                  and learn how we can help you achieve the best possible outcome.
                </p>
                <div className="space-x-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/ai-lawyer">Ask AI Assistant</Link>
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
