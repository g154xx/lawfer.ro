import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { sanitizeInput, checkRateLimit, sanitizeErrorMessage, secureLog } from "@/utils/security";

interface LoginFormProps {
  isSignUp: boolean;
}

const LoginForm = ({ isSignUp }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Rate limiting check
      const userKey = formData.email || 'anonymous';
      if (!checkRateLimit(`auth_${userKey}`, 5, 300000)) { // 5 attempts per 5 minutes
        toast({
          title: "Prea multe încercări",
          description: "Vă rugăm să așteptați 5 minute înainte de a încerca din nou.",
          variant: "destructive",
        });
        return;
      }

      // Input validation and sanitization
      const sanitizedEmail = sanitizeInput(formData.email.trim().toLowerCase());
      const sanitizedFullName = isSignUp ? sanitizeInput(formData.fullName.trim()) : "";

      if (isSignUp) {
        if (formData.password !== formData.confirmPassword) {
          toast({
            title: "Eroare",
            description: "Parolele nu se potrivesc",
            variant: "destructive",
          });
          return;
        }

        if (formData.password.length < 6) {
          toast({
            title: "Eroare",
            description: "Parola trebuie să aibă cel puțin 6 caractere",
            variant: "destructive",
          });
          return;
        }

        if (sanitizedFullName.length < 2) {
          toast({
            title: "Eroare",
            description: "Numele trebuie să aibă cel puțin 2 caractere",
            variant: "destructive",
          });
          return;
        }

        const { error } = await signUp(sanitizedEmail, formData.password, sanitizedFullName);
        
        if (error) {
          secureLog('Sign up error:', error);
          if (error.message.includes('already registered')) {
            toast({
              title: "Eroare",
              description: "Acest email este deja înregistrat. Încercați să vă conectați.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Eroare la înregistrare",
              description: sanitizeErrorMessage(error.message),
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Înregistrare reușită",
            description: "Verificați emailul pentru a confirma contul.",
          });
          secureLog('User signed up successfully');
        }
      } else {
        const { error } = await signIn(sanitizedEmail, formData.password);
        
        if (error) {
          secureLog('Sign in error:', error);
          if (error.message.includes('Invalid login credentials')) {
            toast({
              title: "Eroare",
              description: "Email sau parolă incorectă",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Eroare la conectare",
              description: sanitizeErrorMessage(error.message),
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Conectare reușită",
            description: "Bun venit înapoi!",
          });
          secureLog('User signed in successfully');
          navigate('/');
        }
      }
    } catch (error) {
      secureLog('Unexpected auth error:', error);
      toast({
        title: "Eroare",
        description: "A apărut o eroare neașteptată. Încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Basic input sanitization (keep original for passwords)
    let sanitizedValue = value;
    if (name !== 'password' && name !== 'confirmPassword') {
      sanitizedValue = sanitizeInput(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSignUp && (
        <div>
          <Label htmlFor="fullName">Nume complet</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Numele dvs. complet"
            maxLength={100}
          />
        </div>
      )}

      <div>
        <Label htmlFor="email">Adresa de email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="email@exemplu.com"
          maxLength={255}
        />
      </div>

      <div>
        <Label htmlFor="password">Parola</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="••••••••"
          minLength={6}
          maxLength={128}
        />
      </div>

      {isSignUp && (
        <div>
          <Label htmlFor="confirmPassword">Confirmați parola</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="••••••••"
            minLength={6}
            maxLength={128}
          />
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading 
          ? (isSignUp ? "Se înregistrează..." : "Se conectează...") 
          : (isSignUp ? "Înregistrare" : "Conectare")
        }
      </Button>
    </form>
  );
};

export default LoginForm;
