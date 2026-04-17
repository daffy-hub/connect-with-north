import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Globe, Rocket, Building2, ShoppingCart } from "lucide-react";

const packages = [
  {
    icon: Rocket,
    title: "Starter Website",
    subtitle: "Perfect for small businesses and startups.",
    features: [
      "1–3 pages",
      "Mobile responsive design",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "Social media integration",
    ],
  },
  {
    icon: Globe,
    title: "Business Website",
    subtitle: "Ideal for growing businesses that need stronger online presence.",
    features: [
      "4–8 pages",
      "Custom design",
      "Advanced contact forms",
      "SEO optimisation",
      "Speed optimisation",
      "WhatsApp integration",
      "Analytics setup",
      "Security setup (SSL ready)",
    ],
  },
  {
    icon: Building2,
    title: "Professional / Corporate Website",
    subtitle: "For established businesses and large operations.",
    features: [
      "8+ pages",
      "Fully custom UI/UX design",
      "CMS integration",
      "Blog functionality",
      "Advanced SEO",
      "Performance optimisation",
      "Security optimisation",
      "Admin dashboard",
      "Ongoing technical support options",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website",
    subtitle: "Full online selling capability.",
    features: [
      "Product management system",
      "Payment gateway integration",
      "Shopping cart system",
      "Order tracking",
      "Customer accounts",
      "Inventory management",
      "Mobile optimised checkout",
    ],
  },
];

const WebsiteServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Website Creation Services</h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              We build modern, high-performance, business-ready websites that help you stand out, attract clients, and grow your brand online.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Website Packages</h2>
            <p className="text-base sm:text-lg text-muted-foreground">Choose the package that fits your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                    <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <pkg.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold">{pkg.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">{pkg.subtitle}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm sm:text-base text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Let's Build Your Online Presence</h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ready to take your business online? Get in touch with us today and let's create something exceptional together.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 transition-transform">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteServices;
