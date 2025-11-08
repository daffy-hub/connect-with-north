import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPin, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Engineering Smarter Connections.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              TRUE NORTH develops advanced vehicle security systems, GPS tracking solutions, and
              workforce management operations connecting companies across borders.
            </p>
            <Link to="/our-work">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Explore Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Innovation, Technology & Reliability</h2>
            <p className="text-lg text-muted-foreground">
              At TRUE NORTH, we combine cutting-edge technology with unwavering commitment to
              deliver solutions that empower businesses and secure assets across borders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Vehicle Security",
                description: "Advanced GPS tracking and remote vehicle management systems",
              },
              {
                icon: Users,
                title: "Workforce Solutions",
                description: "International staffing and call centre operations management",
              },
              {
                icon: TrendingUp,
                title: "Innovation Driven",
                description: "Leveraging technology to create smarter business connections",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Founded", value: "2025" },
              { label: "Speed Limiters Installed", value: "3,000+" },
              { label: "Client Reach", value: "Local & International" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
