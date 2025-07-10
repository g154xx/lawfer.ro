
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { validateContactForm } from "@/utils/contactValidation";
import { sanitizeInput, checkRateLimit, sanitizeErrorMessage, secureLog } from "@/utils/security";

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
      // Rate limiting check
      const userKey = user?.id || 'anonymous';
      if (!checkRateLimit(`contact_${userKey}`, 3, 300000)) { // 3 attempts per 5 minutes
        toast({
          title: "Prea multe încercări",
          description: "Vă rugăm să așteptați 5 minute înainte de a încerca din nou.",
          variant: "destructive",
        });
        return;
      }

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
        name: sanitizeInput(formData.name).substring(0, 100),
        email: sanitizeInput(formData.email).substring(0, 255),
        phone: formData.phone ? sanitizeInput(formData.phone).substring(0, 20) : null,
        legal_matter: formData.legalMatter,
        message: sanitizeInput(formData.message).substring(0, 2000),
        user_id: user?.id || null,
      };

      secureLog('Submitting contact form');

      const { error } = await supabase
        .from('contact_submissions')
        .insert([sanitizedData]);

      if (error) {
        secureLog('Supabase error:', error);
        toast({
          title: "Eroare",
          description: sanitizeErrorMessage("A apărut o eroare la trimiterea mesajului. Încercați din nou."),
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
        secureLog('Contact form submitted successfully');
      }
    } catch (error) {
      secureLog('Unexpected error:', error);
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
    
    // Input length validation with security limits
    let sanitizedValue = sanitizeInput(value);
    if (name === 'name' && sanitizedValue.length > 100) sanitizedValue = sanitizedValue.slice(0, 100);
    if (name === 'email' && sanitizedValue.length > 255) sanitizedValue = sanitizedValue.slice(0, 255);
    if (name === 'phone' && sanitizedValue.length > 20) sanitizedValue = sanitizedValue.slice(0, 20);
    if (name === 'message' && sanitizedValue.length > 2000) sanitizedValue = sanitizedValue.slice(0, 2000);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Solicitare Consultație Gratuită</CardTitle>
        <CardDescription>
          Completați formularul de mai jos și vă vom contacta în termen de 24 de ore
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
              <Label htmlFor="name">Nume Complet *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ion Popescu"
                maxLength={100}
              />
            </div>
            <div>
              <Label htmlFor="email">Adresă Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ion@exemplu.ro"
                maxLength={255}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Număr de Telefon</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+40 721 123 456"
              maxLength={20}
            />
          </div>

          <div>
            <Label htmlFor="legalMatter">Tipul Problemei Juridice *</Label>
            <select
              id="legalMatter"
              name="legalMatter"
              value={formData.legalMatter}
              onChange={handleChange}
              required
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Selectați tipul problemei juridice</option>
              <option value="corporate">Drept Comercial</option>
              <option value="litigation">Litigii</option>
              <option value="real-estate">Imobiliare</option>
              <option value="intellectual-property">Proprietate Intelectuală</option>
              <option value="employment">Dreptul Muncii</option>
              <option value="other">Altele</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Mesaj *</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Vă rugăm să descrieți problema juridică și orice întrebări specifice pe care le aveți..."
              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              maxLength={2000}
            />
            <div className="text-xs text-muted-foreground mt-1">
              {formData.message.length}/2000 caractere
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Se trimite..." : "Solicitare Consultație Gratuită"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Prin trimiterea acestui formular, sunteți de acord cu politica noastră de confidențialitate. 
            Toate comunicările sunt confidențiale și protejate de privilegiul avocat-client.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
