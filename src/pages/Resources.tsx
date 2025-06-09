
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
      title: "Starting a Business: Legal Checklist",
      description: "Essential legal steps when forming a new business entity",
      category: "Corporate Law",
      readTime: "10 min read"
    },
    {
      title: "Understanding Employment Contracts",
      description: "Key terms and clauses every employee should know",
      category: "Employment Law",
      readTime: "8 min read"
    },
    {
      title: "Real Estate Purchase Guide",
      description: "Navigate the legal aspects of buying property",
      category: "Real Estate",
      readTime: "15 min read"
    },
    {
      title: "Intellectual Property Basics",
      description: "Protecting your ideas, brands, and creative works",
      category: "IP Law",
      readTime: "12 min read"
    }
  ];

  const legalForms = [
    {
      title: "Non-Disclosure Agreement (NDA)",
      description: "Protect confidential information in business relationships",
      premium: false
    },
    {
      title: "Employment Contract Template",
      description: "Comprehensive employment agreement template",
      premium: true
    },
    {
      title: "Service Agreement",
      description: "Professional services contract template",
      premium: true
    },
    {
      title: "Partnership Agreement",
      description: "Business partnership formation documents",
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
            <h1 className="text-4xl font-bold mb-6">Legal Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive library of legal guides, templates, and resources 
              to help you understand and navigate legal matters with confidence.
            </p>
          </div>

          {/* Legal Guides Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Legal Guides & Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalGuides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{guide.category}</Badge>
                      <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      Read Guide
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
              <h2 className="text-2xl font-bold">Legal Forms & Templates</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalForms.map((form, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {form.premium ? (
                        <Badge>Premium</Badge>
                      ) : (
                        <Badge variant="outline">Free</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{form.title}</CardTitle>
                    <CardDescription>{form.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {form.premium ? (
                      <Button size="sm" asChild>
                        <Link to="/pricing">Upgrade for Access</Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        Download Free
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
              <h2 className="text-2xl font-bold">Frequently Asked Legal Questions</h2>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need a lawyer to start a business?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    While not legally required, consulting with a lawyer when starting a business is highly recommended. 
                    A lawyer can help you choose the right business structure, draft important documents, ensure compliance 
                    with regulations, and protect your interests from the start.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What should I do if I receive a legal notice?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Don't ignore it! Read the notice carefully, note any deadlines, and contact a lawyer immediately. 
                    Many legal notices have strict time limits for response, and failing to respond can result in 
                    default judgments or other adverse consequences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much does legal representation cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Legal fees vary depending on the complexity of the matter, the attorney's experience, and your location. 
                    We offer transparent pricing with options including hourly rates, flat fees for specific services, and 
                    subscription plans for ongoing legal support.
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
                <CardTitle className="text-2xl">Need Personalized Legal Advice?</CardTitle>
                <CardDescription className="text-lg">
                  While our resources provide general information, every legal situation is unique.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Get personalized legal advice tailored to your specific situation with our AI-powered 
                  legal assistant or schedule a consultation with our experienced attorney.
                </p>
                <div className="space-x-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/ai-lawyer">Try AI Assistant</Link>
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
