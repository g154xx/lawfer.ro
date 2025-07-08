
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";
import AdminRoute from "@/components/AdminRoute";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <AdminRoute>
            <AdminPanel />
          </AdminRoute>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
