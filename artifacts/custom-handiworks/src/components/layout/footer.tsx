import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import logoImg from "@assets/A63BEBB4-33FF-4129-87C3-0D140E3204BA_1774146982330.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Custom Handiworks"
                className="h-10 w-auto object-contain invert"
              />
              <span className="font-display font-bold text-lg text-white tracking-tight leading-tight">
                Custom Handiworks
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Denver's choice for expert carpentry and reliable handyman services. Built right, every time.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Denver, CO</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:7209373003" className="hover:text-white transition-colors">(720) 937-3003</a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hunter@customhandiworks.com" className="hover:text-white transition-colors">hunter@customhandiworks.com</a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                <Instagram className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="https://www.instagram.com/custom_handiworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @custom_handiworks
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Our Services</h3>
            <ul className="space-y-2">
              {['Custom Carpentry', 'Custom Furniture', 'Trim & Molding', 'Furniture Assembly & Door Installation', 'Home Repairs', 'Interior Renovations'].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="flex justify-between gap-4">
                    <span>Mon – Fri:</span>
                    <span>9am – 5pm</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Weekends:</span>
                    <span>By Appointment</span>
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
            Proudly serving Denver, CO and surrounding neighborhoods.
          </p>
        </div>
      </div>
    </footer>
  );
}
