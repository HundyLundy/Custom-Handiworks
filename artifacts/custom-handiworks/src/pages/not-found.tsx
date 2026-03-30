import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight } from "lucide-react";
import logoImg from "@assets/A63BEBB4-33FF-4129-87C3-0D140E3204BA_1774146982330.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-lg mx-auto">
          <img
            src={logoImg}
            alt="Custom Handiworks"
            className="h-14 w-auto object-contain invert mx-auto mb-8"
          />

          <p className="text-[#41b75b] text-sm font-semibold uppercase tracking-widest mb-4">
            404 — Page Not Found
          </p>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            This page doesn't exist.
          </h1>

          <p className="text-white/50 text-lg mb-10">
            The page you're looking for may have moved or never existed. Let's get you back to something useful.
          </p>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#41b75b] text-white font-bold text-base hover:bg-[#39a351] transition-colors shadow-lg"
          >
            Back to Homepage
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
