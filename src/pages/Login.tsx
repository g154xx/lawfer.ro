
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {isSignUp ? "Creați un cont nou" : "Bun venit înapoi"}
                </CardTitle>
                <CardDescription>
                  {isSignUp 
                    ? "Înregistrați-vă pentru a accesa instrumentele juridice premium"
                    : "Conectați-vă pentru a accesa instrumentele juridice premium și istoricul consultațiilor"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
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

                <div className="mt-6 text-center space-y-4">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-sm text-primary hover:underline"
                  >
                    {isSignUp 
                      ? "Aveți deja un cont? Conectați-vă" 
                      : "Nu aveți un cont? Înregistrați-vă"
                    }
                  </button>
                  
                  {!isSignUp && (
                    <div className="text-sm text-muted-foreground">
                      <Link to="/forgot-password" className="text-primary hover:underline">
                        Ați uitat parola?
                      </Link>
                    </div>
                  )}
                  
                  <div className="text-sm text-muted-foreground">
                    <Link to="/pricing" className="text-primary hover:underline">
                      Vezi planurile premium
                    </Link>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-center">Beneficii premium</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Consultații juridice IA nelimitate
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Analiză și revizuire documente
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Acces prioritar la avocați
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Șabloane de formulare juridice
                    </li>
                  </ul>
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

export default Login;
