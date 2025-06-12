
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (input: string) => {
    return input.trim().replace(/[<>]/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Client-side validation
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        toast({
          title: "Eroare",
          description: "Numele trebuie să aibă cel puțin 2 caractere",
          variant: "destructive",
        });
        return;
      }

      if (!validateEmail(formData.email)) {
        toast({
          title: "Eroare",
          description: "Adresa de email nu este validă",
          variant: "destructive",
        });
        return;
      }

      if (!formData.legalMatter) {
        toast({
          title: "Eroare",
          description: "Vă rugăm să selectați tipul de problemă juridică",
          variant: "destructive",
        });
        return;
      }

      if (!formData.message.trim() || formData.message.trim().length < 10) {
        toast({
          title: "Eroare",
          description: "Mesajul trebuie să aibă cel puțin 10 caractere",
          variant: "destructive",
        });
        return;
      }

      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: formData.phone ? sanitizeInput(formData.phone) : null,
        legal_matter: formData.legalMatter,
        message: sanitizeInput(formData.message),
        user_id: user?.id || null,
      };

      console.log('Submitting contact form:', sanitizedData);

      const { error } = await supabase
        .from('contact_submissions')
        .insert([sanitizedData]);

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Eroare",
          description: "A apărut o eroare la trimiterea mesajului. Încercați din nou.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Mesaj trimis cu succes",
          description: "Vă vom contacta în termen de 24 de ore pentru a programa consultația.",
        });
        
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          legalMatter: "", 
          message: "" 
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Eroare",
        description: "A apărut o eroare neașteptată. Încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Basic input length limits for security
    let sanitizedValue = value;
    if (name === 'name' && value.length > 100) sanitizedValue = value.slice(0, 100);
    if (name === 'email' && value.length > 255) sanitizedValue = value.slice(0, 255);
    if (name === 'phone' && value.length > 20) sanitizedValue = value.slice(0, 20);
    if (name === 'message' && value.length > 2000) sanitizedValue = value.slice(0, 2000);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Schedule Your Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your legal matter? Contact us today for a free initial consultation. 
              We're here to help you navigate your legal challenges with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request Free Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll contact you within 24 hours
                  {user && (
                    <span className="block mt-2 text-sm font-medium text-primary">
                      Conectat ca: {user.email}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <Label htmlFor="legalMatter">Type of Legal Matter *</Label>
                    <select
                      id="legalMatter"
                      name="legalMatter"
                      value={formData.legalMatter}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select legal matter type</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="litigation">Litigation</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="intellectual-property">Intellectual Property</option>
                      <option value="employment">Employment Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Please describe your legal matter and any specific questions you have..."
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      maxLength={2000}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/2000 caractere
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Se trimite..." : "Request Free Consultation"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    All communications are confidential and protected by attorney-client privilege.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Office Address</h4>
                    <p className="text-muted-foreground">
                      123 Legal Street<br />
                      Suite 456<br />
                      New York, NY 10001
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Phone & Email</h4>
                    <p className="text-muted-foreground">
                      Office: (555) 123-4567<br />
                      Emergency: (555) 123-4568<br />
                      Email: info@legalpro.com
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: By appointment only<br />
                      Emergency: 24/7 availability
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose LegalPro?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">15+ years of experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">95% success rate in litigation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">24/7 AI legal assistance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Transparent pricing</span>
                  </div>
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

export default Contact;
