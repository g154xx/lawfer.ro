
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { validateContactForm } from "@/utils/contactValidation";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  legalMatter: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validationError = validateContactForm(formData);
      if (validationError) {
        toast({
          title: "Eroare",
          description: validationError,
          variant: "destructive",
        });
        return;
      }

      const sanitizedData = {
        name: formData.name.trim().replace(/[<>]/g, ''),
        email: formData.email.trim().replace(/[<>]/g, ''),
        phone: formData.phone ? formData.phone.trim().replace(/[<>]/g, '') : null,
        legal_matter: formData.legalMatter,
        message: formData.message.trim().replace(/[<>]/g, ''),
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
  );
};

export default ContactForm;
