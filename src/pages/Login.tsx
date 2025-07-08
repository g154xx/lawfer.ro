
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import AuthToggle from "@/components/AuthToggle";
import PremiumBenefits from "@/components/PremiumBenefits";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
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
                <LoginForm isSignUp={isSignUp} />
                <AuthToggle isSignUp={isSignUp} onToggle={handleToggle} />
                <PremiumBenefits />
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
