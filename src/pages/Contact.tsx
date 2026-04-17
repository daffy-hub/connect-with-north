import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
            <p className="text-base sm:text-xl text-muted-foreground">
              We're here to help. Reach out to us for partnerships, support, or general enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
