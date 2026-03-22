import { MapPin, Phone, Mail, Clock, Hammer } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Hammer className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Custom<span className="text-primary">Handiworks</span>
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Denver's premier choice for expert carpentry and reliable handyman services. We build trust through quality craftsmanship.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>761 Eudora Street<br/>Denver, CO 8020</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(720) 555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@customhandiworks.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Why Choose Us', 'Service Area', 'Testimonials', 'Get a Quote'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="space-y-1">
                  <div className="flex justify-between w-32">
                    <span>Mon - Fri:</span>
                    <span>8am - 6pm</span>
                  </div>
                  <div className="flex justify-between w-32">
                    <span>Saturday:</span>
                    <span>9am - 4pm</span>
                  </div>
                  <div className="flex justify-between w-32">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Custom Handiworks. All rights reserved.
          </p>
          <p className="text-secondary-foreground/60 text-sm">
            Serving Denver within an 8-mile radius.
          </p>
        </div>
      </div>
    </footer>
  );
}
