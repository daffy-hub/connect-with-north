import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Headphones, Gauge } from "lucide-react";

const OurWork = () => {
  const services = [
    {
      icon: Satellite,
      title: "Vehicle Security & GPS Tracking",
      description:
        "We provide advanced GPS tracking and remote vehicle management systems for car owners and fleet operators. Our solutions enable real-time monitoring, route optimisation, and enhanced security for vehicles of all types.",
      features: [
        "Real-time GPS tracking",
        "Remote vehicle immobilisation",
        "Fleet management solutions",
        "Route optimisation",
        "Geofencing capabilities",
        "24/7 monitoring support",
      ],
    },
    {
      icon: Headphones,
      title: "Call Centre & Workforce Solutions",
      description:
        "TRUE NORTH specialises in hiring and managing employees on behalf of foreign companies, helping reduce operational costs whilst maintaining high-quality service delivery. Our workforce solutions include both local and international deployment.",
      features: [
        "International staffing services",
        "Call centre operations management",
        "Employee training programmes",
        "Local and international deployment",
        "Cost-effective solutions",
        "Quality assurance processes",
      ],
    },
    {
      icon: Gauge,
      title: "Speed Limiter Installation (Past Project)",
      description:
        "During Ethiopia's national compliance phase, TRUE NORTH successfully installed over 3,000 speed limiters across various vehicle types. This project established our reputation for reliability, technical expertise, and large-scale project delivery.",
      features: [
        "3,000+ installations completed",
        "National compliance standards met",
        "Professional installation service",
        "Post-installation support",
        "Vehicle safety enhancement",
        "Regulatory compliance assured",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground">
              Delivering intelligent solutions across vehicle security, GPS tracking, and
              international workforce management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <service.icon className="h-16 w-16 text-accent mb-6" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-accent mr-2">✓</span>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-12">
                      <service.icon className="h-48 w-48 text-accent/20" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you need vehicle security solutions or workforce management services, TRUE
              NORTH is here to help.
            </p>
            <a href="/contact">
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-md text-lg font-semibold hover:scale-105 transition-transform">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
