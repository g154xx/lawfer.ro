import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-playfair text-foreground">Informații de Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 font-source-sans text-foreground">Adresa Biroului</h4>
            <p className="text-muted-foreground font-source-sans">
              Strada Juridică 123<br />
              Apartament 456<br />
              București, Sectorul 1, 010001
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 font-source-sans text-foreground">Telefon și Email</h4>
            <p className="text-muted-foreground font-source-sans">
              Birou: +40 721 123 456<br />
              Urgențe: +40 721 123 457<br />
              Email: office@lawfer.ro
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 font-source-sans text-foreground">Programul Biroului</h4>
            <p className="text-muted-foreground font-source-sans">
              Luni - Vineri: 09:00 - 18:00<br />
              Sâmbătă: 10:00 - 14:00<br />
              Duminică: Doar cu programare<br />
              Urgențe: Disponibilitate 24/7
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-playfair text-foreground">De ce să alegeți Lawfer?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-sm font-source-sans text-foreground">Consultație inițială gratuită</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-sm font-source-sans text-foreground">15+ ani de experiență</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-sm font-source-sans text-foreground">95% rată de succes în litigii</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-sm font-source-sans text-foreground">Asistență juridică IA 24/7</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-sm font-source-sans text-foreground">Prețuri transparente</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;