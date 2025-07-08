
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

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

        const { error } = await signUp(formData.email, formData.password, formData.fullName);
        
        if (error) {
          if (error.message.includes('already registered')) {
            toast({
              title: "Eroare",
              description: "Acest email este deja înregistrat. Încercați să vă conectați.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Eroare la înregistrare",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Înregistrare reușită",
            description: "Verificați emailul pentru a confirma contul.",
          });
        }
      } else {
        const { error } = await signIn(formData.email, formData.password);
        
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast({
              title: "Eroare",
              description: "Email sau parolă incorectă",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Eroare la conectare",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Conectare reușită",
            description: "Bun venit înapoi!",
          });
          navigate('/');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
