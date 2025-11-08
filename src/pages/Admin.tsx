import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [newsData, setNewsData] = useState({
    title: "",
    category: "",
    excerpt: "",
  });
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would verify against a secure backend
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Authenticated",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Authentication Failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "News Added",
      description: "The news item has been successfully added",
    });
    setNewsData({ title: "", category: "", excerpt: "" });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-md border-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <Lock className="mr-2 h-6 w-6 text-accent" />
                Admin Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter admin password"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 animate-fade-in">Admin Panel</h1>

            <Card className="border-2 animate-fade-in-up">
              <CardHeader>
                <CardTitle>Add News Item</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddNews} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newsData.title}
                      onChange={(e) =>
                        setNewsData({ ...newsData, title: e.target.value })
                      }
                      required
                      placeholder="News title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={newsData.category}
                      onChange={(e) =>
                        setNewsData({ ...newsData, category: e.target.value })
                      }
                      required
                      placeholder="e.g., Product Launch, Company News"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={newsData.excerpt}
                      onChange={(e) =>
                        setNewsData({ ...newsData, excerpt: e.target.value })
                      }
                      required
                      placeholder="Brief description of the news"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg">
                    Add News Item
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Button
                variant="outline"
                onClick={() => setIsAuthenticated(false)}
                className="w-full"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
