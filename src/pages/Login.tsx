
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically authenticate with your backend
    toast({
      title: "Conectare reușită",
      description: "Bun venit înapoi! Acum aveți acces la funcțiile premium.",
    });
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
                <CardTitle className="text-2xl">Bun venit înapoi</CardTitle>
                <CardDescription>
                  Conectați-vă pentru a accesa instrumentele juridice premium și istoricul consultațiilor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Conectare
                  </Button>
                </form>

                <div className="mt-6 text-center space-y-4">
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Ați uitat parola?
                  </Link>
                  
                  <div className="text-sm text-muted-foreground">
                    Nu aveți un cont?{" "}
                    <Link to="/pricing" className="text-primary hover:underline">
                      Abonați-vă acum
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
