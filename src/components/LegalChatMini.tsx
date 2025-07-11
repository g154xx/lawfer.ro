import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, MessageCircle, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export const LegalChatMini = () => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasUsedFreeQuery, setHasUsedFreeQuery] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    if (hasUsedFreeQuery) {
      toast.error("Ați folosit deja query-ul gratuit. Abonați-vă pentru mai multe întrebări.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://frgdwxlqqnrqewcvzzkh.supabase.co/functions/v1/legal-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZ2R3eGxxcW5ycWV3Y3Z6emtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NDMzNzEsImV4cCI6MjA2NTMxOTM3MX0.yH1eQ4avKygXJ7C6alkK9Wm-Leybb8Cbnia6SuZhxy8`,
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        setReply(data.reply);
        setHasUsedFreeQuery(true);
        toast.success("Răspuns primit!");
      }
    } catch (error) {
      toast.error("Eroare în comunicarea cu serverul");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto mb-16 border-primary/20">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-playfair text-foreground">
          Chat Juridic Gratuit
        </CardTitle>
        <p className="text-sm text-muted-foreground font-source-sans">
          1 întrebare gratuită despre cercetare și consultație juridică
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Întrebați despre aspecte juridice..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={hasUsedFreeQuery || loading}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={hasUsedFreeQuery || loading || !message.trim()}
          >
            {loading ? (
              <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>

        {hasUsedFreeQuery && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-yellow-800">
              <p className="font-medium">Query gratuit folosit</p>
              <p>Pentru mai multe întrebări, vă rugăm să vă abonați la planul premium.</p>
            </div>
          </div>
        )}

        {reply && (
          <div className="bg-secondary/30 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-foreground font-source-sans">Răspuns:</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap font-source-sans">
              {reply}
            </p>
          </div>
        )}

        <div className="text-xs text-muted-foreground text-center border-t pt-3 font-source-sans">
          Informațiile oferite sunt în scop educativ și nu constituie consiliere juridică specifică.
        </div>
      </CardContent>
    </Card>
  );
};