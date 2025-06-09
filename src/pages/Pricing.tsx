
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that works best for your legal needs. All plans include access to our AI legal assistant 
              and premium support from qualified attorneys.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Consultation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">One-Time Consultation</CardTitle>
                <CardDescription>Perfect for specific legal questions</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold">$150</div>
                  <div className="text-muted-foreground">per consultation</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">1-hour consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Follow-up email summary</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Basic document review</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Legal guidance & recommendations</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium AI Plan */}
            <Card className="border-2 border-primary hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">AI Legal Assistant</CardTitle>
                <CardDescription>24/7 AI-powered legal support</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold">$99</div>
                  <div className="text-muted-foreground">per month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Unlimited AI consultations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Document analysis & review</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">24/7 legal research</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Priority attorney access</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Legal form templates</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Monthly attorney consultation</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/ai-lawyer">Start Free Trial</Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  7-day free trial • Cancel anytime
                </p>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For businesses with ongoing legal needs</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold">Custom</div>
                  <div className="text-muted-foreground">pricing</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Everything in AI plan</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Dedicated attorney</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Unlimited consultations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Custom legal documents</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Priority response time</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Quarterly business reviews</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How does the AI legal assistant work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI assistant uses advanced natural language processing to understand your legal questions 
                    and provide accurate, up-to-date legal information. It can analyze documents, research case law, 
                    and provide guidance on various legal matters.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I cancel my subscription anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. 
                    You'll continue to have access to your subscription benefits until the end of your current billing period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is my information confidential?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. All communications and information shared through our platform are protected by 
                    attorney-client privilege and strict confidentiality agreements. We use enterprise-grade security 
                    to protect your data.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
