import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const News = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  // Mock news data - in production this would come from a database
  const newsItems = [
    {
      id: 1,
      title: "TRUE NORTH Launches New GPS Tracking Platform",
      date: "2025-01-15",
      excerpt:
        "We're excited to announce the launch of our next-generation GPS tracking platform, featuring enhanced real-time monitoring capabilities and improved fleet management tools.",
      category: "Product Launch",
    },
    {
      id: 2,
      title: "Expanding International Workforce Solutions",
      date: "2025-01-10",
      excerpt:
        "TRUE NORTH extends its workforce management services to three new countries, providing cost-effective staffing solutions for international companies.",
      category: "Company News",
    },
    {
      id: 3,
      title: "Celebrating 3,000+ Speed Limiter Installations",
      date: "2025-01-05",
      excerpt:
        "A milestone achievement in vehicle safety: TRUE NORTH successfully completes installation of over 3,000 speed limiters across Ethiopia.",
      category: "Milestone",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive our latest updates and news.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-muted-foreground">
              Stay informed about the latest developments, announcements, and milestones from TRUE
              NORTH.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {newsItems.map((item, index) => (
              <Card
                key={item.id}
                className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in-up cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full mb-2 md:mb-0">
                      {item.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto group/button">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest news and updates delivered directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
