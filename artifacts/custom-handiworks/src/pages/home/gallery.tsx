import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import staircaseImg from "@assets/Image_3-21-26_at_11.08_PM_(1)_1774157483013.png";
import liveEdgeShelvesImg from "@assets/Image_3-21-26_at_11.04_PM_1774157549013.png";
import cedarBenchImg from "@assets/Image_3-21-26_at_11.03_PM_1774157549013.png";
import blueBookshelvesImg from "@assets/Image_3-21-26_at_11.05_PM_(2)_1774157483013.png";
import bathroomTileImg from "@assets/Image_3-21-26_at_11.09_PM_(1)_1774157483012.png";
import rangeHoodImg from "@assets/Image_3-21-26_at_11.11_PM_1774157483012.png";
import kitchenIslandImg from "@assets/Image_3-21-26_at_11.11_PM_(2)_1774157483011.png";
import butcherBlockImg from "@assets/Image_3-21-26_at_11.07_PM_1774157483013.png";
import walkInClosetImg from "@assets/Image_3-21-26_at_11.08_PM_(2)_1774157483013.png";
import commercialDeckImg from "@assets/Image_3-21-26_at_11.10_PM_1774157483012.png";
import tableSawImg from "@assets/Image_3-21-26_at_11.06_PM_(1)_1774157483013.png";
import porchRailingImg from "@assets/Image_3-21-26_at_11.05_PM_1774157483013.png";
import interiorRailingImg from "@assets/Image_3-21-26_at_11.05_PM_(1)_1774157483013.png";
import barBeforeImg from "@assets/Image_3-21-26_at_11.13_PM_(1)_1774157483011.png";
import barAfterImg from "@assets/Image_3-21-26_at_11.13_PM_1774157483011.png";
import picnicTableImg from "@assets/Image_3-21-26_at_11.11_PM_(1)_1774157483012.png";
import gardenBedImg from "@assets/Image_3-21-26_at_11.04_PM_1774157549012.png";
import shoeStorageImg from "@assets/Image_3-21-26_at_11.08_PM_1774157483013.png";
import hunterFlooringImg from "@assets/Image_3-21-26_at_11.12_PM_(1)_1774157483011.png";

const photos = [
  { src: staircaseImg, alt: "Custom oak staircase with hand-forged iron balusters", label: "Custom Staircase" },
  { src: liveEdgeShelvesImg, alt: "Live edge floating shelves with steel brackets", label: "Live Edge Shelves" },
  { src: cedarBenchImg, alt: "Custom redwood outdoor garden bench", label: "Redwood Garden Bench" },
  { src: blueBookshelvesImg, alt: "Custom built-in blue bookshelves with window seat", label: "Built-In Bookshelves" },
  { src: bathroomTileImg, alt: "Bathroom renovation with striped subway tile and custom shower niche", label: "Bathroom Renovation" },
  { src: butcherBlockImg, alt: "Custom butcher block kitchen countertop", label: "Butcher Block Countertop" },
  { src: walkInClosetImg, alt: "Custom built-in walk-in closet system", label: "Walk-In Closet Built-In" },
  { src: commercialDeckImg, alt: "Commercial deck with custom built-in benches", label: "Deck & Built-In Seating" },
  { src: tableSawImg, alt: "Precision woodworking at the table saw", label: "Precision Craftsmanship" },
  { src: porchRailingImg, alt: "Custom porch deck with horizontal metal railing", label: "Porch & Railing" },
  { src: interiorRailingImg, alt: "Custom interior horizontal stair railing system", label: "Interior Railing System" },
  { src: picnicTableImg, alt: "Large custom cedar picnic table", label: "Custom Picnic Table" },
  { src: gardenBedImg, alt: "Custom cedar raised garden bed planter", label: "Raised Garden Bed" },
  { src: shoeStorageImg, alt: "Custom white built-in shoe storage cabinet", label: "Custom Storage Built-In" },
  { src: hunterFlooringImg, alt: "Hunter cutting flooring pieces with precision", label: "Hardwood Floor Installation" },
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  }, [lightboxIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeLightbox, goNext, goPrev]);

  return (
    <section id="gallery" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our <span className="text-primary">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A sample of what we've built.
          </motion.p>
        </div>

        {/* Before / After feature card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 rounded-2xl overflow-hidden border border-border shadow-sm"
        >
          <div className="grid grid-cols-2">
            <div className="relative">
              <img
                src={barBeforeImg}
                alt="Custom bar build in progress — raw wood rounded top with spindle base"
                className="w-full h-72 object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                Before
              </div>
            </div>
            <div className="relative">
              <img
                src={barAfterImg}
                alt="Finished custom reception desk — green fabric wrap with painted wood rounded top"
                className="w-full h-72 object-cover object-center"
              />
              <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                After
              </div>
            </div>
          </div>
          <div className="bg-white px-6 py-4 border-t border-border">
            <p className="text-sm font-semibold text-foreground">Custom Reception Desk Built for <a href="https://www.lovebeehive.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BeeHive</a></p>
            <p className="text-xs text-muted-foreground mt-0.5">Raw wood frame with rounded top → finished fabric-wrapped reception desk with painted wood top</p>
          </div>
        </motion.div>

        {/* Reclaimed wood paired project card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 rounded-2xl overflow-hidden border border-border shadow-sm"
        >
          <div className="grid grid-cols-2">
            <div className="relative">
              <img
                src={rangeHoodImg}
                alt="Custom reclaimed wood range hood built in Denver"
                className="w-full h-72 object-cover object-center"
              />
            </div>
            <div className="relative">
              <img
                src={kitchenIslandImg}
                alt="Kitchen island wrapped in the same reclaimed wood as the range hood"
                className="w-full h-72 object-cover object-center"
              />
            </div>
          </div>
          <div className="bg-white px-6 py-4 border-t border-border">
            <p className="text-sm font-semibold text-foreground">One kitchen, one wood — two statement pieces</p>
            <p className="text-xs text-muted-foreground mt-0.5">Both pieces use reclaimed wood salvaged from an old barn in North Dakota. Same house, same material, intentionally matched.</p>
          </div>
        </motion.div>

        {/* Masonry photo grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-colors duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {photos[lightboxIndex].label} — {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
