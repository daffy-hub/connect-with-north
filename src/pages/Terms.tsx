import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Services</h1>
            <p className="text-muted-foreground">Last Updated: 2026</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-10 animate-fade-in-up">
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground">By using our services, you agree to comply with and be bound by the following terms and conditions.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">2. Services Provided</h2>
              <p className="text-muted-foreground">We provide website development, business support services, digital solutions, GPS/security solutions, and call centre operations.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">3. Project Agreements</h2>
              <p className="text-muted-foreground">All website projects require clear agreement on scope before development begins. Additional features requested later may require scope adjustments.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">4. Payments</h2>
              <p className="text-muted-foreground">Payment terms will be agreed upon before project commencement.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">5. Intellectual Property</h2>
              <p className="text-muted-foreground">Upon full payment, clients receive rights to their completed website unless otherwise agreed in writing.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">6. Client Responsibilities</h2>
              <p className="text-muted-foreground">Clients must provide necessary content, branding materials, and information required for project completion.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">We are not liable for third-party service failures, hosting issues, or external system interruptions.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">8. Confidentiality</h2>
              <p className="text-muted-foreground">All client information is handled professionally and kept confidential.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">9. Modifications</h2>
              <p className="text-muted-foreground">We reserve the right to update these terms when necessary.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">10. Contact Information</h2>
              <p className="text-muted-foreground">
                Phone: +251 991 874 507<br />
                Location: Infront of Dembel City Center, African Avenue, Addis Ababa
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
