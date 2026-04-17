import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Globe, Award, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">About TRUE NORTH</h1>
            <p className="text-base sm:text-xl text-muted-foreground">
              Building intelligent systems that make movement, work, and communication simpler,
              safer, and smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in">
              <CardContent className="p-6 sm:p-8">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To build intelligent systems that make movement, work, and communication simpler,
                  safer, and smarter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in">
              <CardContent className="p-6 sm:p-8">
                <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To be a leader in intelligent technology and international workforce solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 animate-fade-in-up">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Heart,
                  title: "Innovation & Integrity",
                  description: "We push boundaries whilst maintaining the highest ethical standards",
                },
                {
                  icon: Award,
                  title: "Reliability & Precision",
                  description: "Our solutions deliver consistent, accurate results you can trust",
                },
                {
                  icon: Globe,
                  title: "Global Mindset, Local Expertise",
                  description: "We think internationally whilst understanding local needs",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <value.icon className="h-10 w-10 mx-auto text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Story */}
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <Card className="border-2">
              <CardContent className="p-6 sm:p-8">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-4 sm:mb-6" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Story</h2>
                <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    TRUE NORTH began as a vehicle technology company, driven by a vision to enhance
                    safety and security on Ethiopian roads. Our journey started with the successful
                    installation of over 3,000 speed limiters during Ethiopia's national compliance
                    phase, establishing our reputation for reliability and technical excellence.
                  </p>
                  <p>
                    Building on this foundation, we expanded our expertise into advanced GPS tracking
                    and remote vehicle management systems, providing car owners and fleet operators
                    with cutting-edge solutions to protect and monitor their assets.
                  </p>
                  <p>
                    Recognising the growing need for international business connections, TRUE NORTH
                    evolved into a comprehensive solutions provider. Today, we bridge borders by
                    offering workforce management and call centre operations, helping foreign
                    companies reduce operational costs whilst providing quality employment
                    opportunities locally and abroad.
                  </p>
                  <p className="font-semibold text-foreground">
                    From vehicle security to global workforce solutions, TRUE NORTH continues to
                    engineer smarter connections that empower businesses and individuals across
                    borders.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
