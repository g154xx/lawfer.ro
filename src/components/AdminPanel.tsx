
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useRole } from '@/hooks/useRole';
import { supabase } from '@/integrations/supabase/client';
import { Eye, Trash2, MessageSquare, Mail, Phone, User, Calendar } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  legal_matter: string;
  message: string;
  status: string | null;
  created_at: string;
  user_id: string | null;
}

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const { isAdmin } = useRole();
  const { toast } = useToast();

  useEffect(() => {
    if (isAdmin) {
      fetchSubmissions();
    }
  }, [isAdmin]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching submissions:', error);
        toast({
          title: "Eroare",
          description: "Nu s-au putut încărca submiterile de contact",
          variant: "destructive",
        });
      } else {
        setSubmissions(data || []);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting submission:', error);
        toast({
          title: "Eroare",
          description: "Nu s-a putut șterge submiterea",
          variant: "destructive",
        });
      } else {
        setSubmissions(submissions.filter(sub => sub.id !== id));
        toast({
          title: "Succes",
          description: "Submiterea a fost ștearsă",
        });
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id);

      if (error) {
        console.error('Error updating status:', error);
        toast({
          title: "Eroare",
          description: "Nu s-a putut actualiza statusul",
          variant: "destructive",
        });
      } else {
        setSubmissions(submissions.map(sub => 
          sub.id === id ? { ...sub, status } : sub
        ));
        toast({
          title: "Succes",
          description: "Statusul a fost actualizat",
        });
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getLegalMatterLabel = (matter: string) => {
    const labels: { [key: string]: string } = {
      'corporate': 'Drept societar',
      'litigation': 'Litigii',
      'real-estate': 'Imobiliare',
      'intellectual-property': 'Proprietate intelectuală',
      'employment': 'Drept muncii',
      'other': 'Altele'
    };
    return labels[matter] || matter;
  };

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-lg font-semibold mb-2">Acces restricționat</h3>
            <p className="text-muted-foreground">
              Nu aveți permisiunile necesare pentru a accesa această pagină.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Panou Admin</h2>
          <p className="text-muted-foreground">Gestionați submiterile de contact</p>
        </div>
        <Badge variant="secondary">
          {submissions.length} submiteri
        </Badge>
      </div>

      <div className="grid gap-4">
        {submissions.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Nu există submiteri de contact.</p>
            </CardContent>
          </Card>
        ) : (
          submissions.map((submission) => (
            <Card key={submission.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-lg">{submission.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {submission.email}
                        </span>
                        {submission.phone && (
                          <span className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {submission.phone}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">
                      {getLegalMatterLabel(submission.legal_matter)}
                    </Badge>
                    {submission.status && (
                      <Badge variant={submission.status === 'resolved' ? 'default' : 'secondary'}>
                        {submission.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mesaj:</h4>
                    <p className="text-sm text-muted-foreground bg-secondary/30 p-3 rounded">
                      {submission.message}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(submission.created_at)}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateStatus(submission.id, 'in_progress')}
                      >
                        În progres
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateStatus(submission.id, 'resolved')}
                      >
                        Rezolvat
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteSubmission(submission.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
