import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/A63BEBB4-33FF-4129-87C3-0D140E3204BA_1774146982330.png";

const SERVICE_AREAS = [
  { city: "Aurora, CO", slug: "commercial-contractor-aurora-co" },
  { city: "Denver, CO", slug: "commercial-contractor-denver-co" },
  { city: "Englewood, CO", slug: "commercial-contractor-englewood-co" },
  { city: "Littleton, CO", slug: "commercial-contractor-littleton-co" },
  { city: "Cherry Creek", slug: "commercial-contractor-cherry-creek-denver" },
  { city: "Cherry Hills Village", slug: "commercial-contractor-cherry-hills-village-co" },
  { city: "Cheesman Park", slug: "commercial-contractor-cheesman-park-denver" },
  { city: "Congress Park", slug: "commercial-contractor-congress-park-denver" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsAreasOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Tips", href: "#tips" },
  ];

  const textColor = isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white";
  const textColorActive = isScrolled ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Custom Handiworks logo"
            className="h-9 w-auto object-contain"
          />
          <span className={`font-display font-bold text-lg tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            Custom Handiworks
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${textColor}`}
            >
              {link.name}
            </a>
          ))}

          {/* Service Areas dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsAreasOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${textColor}`}
            >
              Service Areas
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isAreasOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isAreasOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                >
                  {SERVICE_AREAS.map((area) => (
                    <a
                      key={area.slug}
                      href={`/${area.slug}`}
                      onClick={() => setIsAreasOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:bg-[#41b75b]/8 hover:text-[#41b75b] transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#41b75b] shrink-0" />
                      {area.city}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/#contact"
            className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Get a Quote
          </a>
        </nav>

        <button
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-foreground py-2.5 border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Service Areas */}
              <div className="border-b border-border/50">
                <button
                  onClick={() => setIsMobileAreasOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-base font-medium text-foreground py-2.5"
                >
                  Service Areas
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileAreasOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMobileAreasOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 pl-2 flex flex-col gap-1">
                        {SERVICE_AREAS.map((area) => (
                          <a
                            key={area.slug}
                            href={`/${area.slug}`}
                            className="flex items-center gap-2 py-2 text-sm text-foreground/80 hover:text-[#41b75b]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <MapPin className="w-3.5 h-3.5 text-[#41b75b] shrink-0" />
                            {area.city}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/#contact"
                className="mt-2 text-center px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
