
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, BookOpen, Users, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AILawyer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [query, setQuery] = useState("");

  const features = [
    {
      icon: Search,
      title: "Legal Research",
      description: "Instant access to case law, statutes, and legal precedents"
    },
    {
      icon: FileText,
      title: "Document Analysis",
      description: "AI-powered contract review and document analysis"
    },
    {
      icon: BookOpen,
      title: "Legal Guidance",
      description: "24/7 legal advice and guidance on complex matters"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Direct connection to qualified attorneys when needed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Premium AI Legal Assistant
            </Badge>
            <h1 className="text-4xl font-bold mb-6">AI-Powered Legal Research & Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get instant legal guidance with our advanced AI assistant. Available 24/7 for premium subscribers 
              with direct access to qualified attorneys when needed.
            </p>
          </div>

          {/* AI Interface */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Legal AI Assistant</CardTitle>
                <CardDescription>
                  Ask legal questions, analyze documents, or get instant research assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isLoggedIn ? (
                  <div className="text-center space-y-6">
                    <div className="p-8 bg-secondary/30 rounded-lg">
                      <Gavel className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Premium Feature</h3>
                      <p className="text-muted-foreground mb-6">
                        The AI Legal Assistant is available to premium subscribers. 
                        Sign up today to get instant access to legal guidance.
                      </p>
                      <div className="space-y-4">
                        <Badge variant="outline" className="text-lg px-4 py-2">
                          $99/month - Full Access
                        </Badge>
                        <div className="space-x-4">
                          <Button size="lg" asChild>
                            <Link to="/pricing">Subscribe Now</Link>
                          </Button>
                          <Button variant="outline" size="lg" asChild>
                            <Link to="/login">Login</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex space-x-4">
                      <Input
                        placeholder="Ask a legal question or describe your legal issue..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1"
                      />
                      <Button>
                        <Search className="h-4 w-4 mr-2" />
                        Ask AI
                      </Button>
                    </div>
                    
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Sample Questions:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• "What are the key elements of a valid contract?"</li>
                        <li>• "How do I protect my intellectual property?"</li>
                        <li>• "What are my rights as a tenant in New York?"</li>
                        <li>• "Can you review this employment contract?"</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Section */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">AI Legal Assistant Pricing</CardTitle>
              <CardDescription>
                Choose the plan that works best for your legal needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$99</div>
                <div className="text-muted-foreground">per month</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Unlimited AI legal consultations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Document analysis and review</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>24/7 legal research assistance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Priority access to human attorneys</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Legal form templates and generators</span>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/pricing">Start Free Trial</Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  7-day free trial • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AILawyer;
