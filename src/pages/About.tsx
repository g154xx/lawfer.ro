
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gavel, Users, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">About LegalPro</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded on the principles of excellence, integrity, and innovation, LegalPro combines traditional legal expertise 
              with cutting-edge AI technology to deliver unparalleled legal services.
            </p>
          </div>

          {/* Lawyer Detailed Profile */}
          <Card className="mb-16">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="text-8xl font-bold text-primary">JS</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="text-3xl">John Smith, Esq.</CardTitle>
                  <CardDescription className="text-xl">Founding Partner & Senior Attorney</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Harvard Law Graduate</Badge>
                    <Badge>15+ Years Experience</Badge>
                    <Badge>500+ Cases Won</Badge>
                    <Badge>AI Legal Pioneer</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Professional Background</h3>
                    <p className="text-muted-foreground">
                      John Smith founded LegalPro with a vision to revolutionize legal services through technology and expertise. 
                      With over 15 years of experience representing clients from startups to Fortune 500 companies, John has built 
                      a reputation for delivering exceptional results in complex legal matters.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Education & Credentials</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• J.D., Harvard Law School (Magna Cum Laude, 2009)</li>
                      <li>• B.A., Yale University, Political Science (Summa Cum Laude, 2006)</li>
                      <li>• Licensed to practice in New York, California, and Federal Courts</li>
                      <li>• Member, American Bar Association</li>
                      <li>• Certified in AI and Legal Technology</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Notable Achievements</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Successfully closed $500M+ in M&A transactions</li>
                      <li>• Winner of 95% of litigation cases</li>
                      <li>• Featured in Legal 500 as "Rising Star"</li>
                      <li>• Pioneer in AI-assisted legal research</li>
                      <li>• Published author on corporate law topics</li>
                    </ul>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Firm Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards of legal practice, delivering exceptional results for every client.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Client-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your success is our priority. We provide personalized attention and tailored legal solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leveraging AI and technology to provide faster, more efficient legal services.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the difference that expertise and innovation can make for your legal needs.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/ai-lawyer">Try AI Assistant</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
