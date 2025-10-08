import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              Alight Infocom Consultancy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional consultation services to help your business thrive in
              today's competitive landscape.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Services
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Business Strategy</p>
              <p className="text-sm text-muted-foreground">
                Digital Transformation
              </p>
              <p className="text-sm text-muted-foreground">
                Process Optimization
              </p>
              <p className="text-sm text-muted-foreground">Market Analysis</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-muted-foreground" />
                <a
                  href="mailto:info@alightinfocom.in"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  info@alightinfocom.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-muted-foreground" />
                <a
                  href="tel:+919321070511"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  +91 93210 70511
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  New York, NY
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Alight Infocom Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
