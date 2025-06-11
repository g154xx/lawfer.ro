
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Eroare 404: Utilizatorul a încercat să acceseze o rută inexistentă:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary font-playfair">404</h1>
        <h2 className="text-2xl font-semibold text-foreground font-source-sans">Pagina nu a fost găsită</h2>
        <p className="text-lg text-muted-foreground font-source-sans max-w-md mx-auto">
          Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
        </p>
        <div className="space-y-4">
          <Button size="lg" asChild>
            <Link to="/">Întoarce-te acasă</Link>
          </Button>
          <div className="text-sm text-muted-foreground">
            Sau contactează-ne la{" "}
            <Link to="/contact" className="text-primary hover:underline">
              office@lawfer.ro
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
