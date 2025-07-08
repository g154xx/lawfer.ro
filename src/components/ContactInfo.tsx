
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
