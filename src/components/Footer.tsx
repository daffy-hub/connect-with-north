import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="TRUE NORTH Logo" className="h-10 w-10" />
              <h3 className="text-2xl font-bold">TRUE NORTH</h3>
            </div>
            <p className="text-sm opacity-90">Engineering Smarter Connections.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-accent transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="hover:text-accent transition-colors text-sm">
                About Us
              </Link>
              <Link to="/our-work" className="hover:text-accent transition-colors text-sm">
                Our Work
              </Link>
              <Link to="/news" className="hover:text-accent transition-colors text-sm">
                News
              </Link>
              <Link to="/contact" className="hover:text-accent transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p>📧 truenorth.et@outlook.com</p>
              <p>☎️ 0964 165 967</p>
              <p>📍 11th Floor</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>Copyright © TRUE NORTH 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
