import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const heights = ["row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-1", "row-span-1", "row-span-2"];
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-primary">— GALLERY</p>
          <h2 className="font-display text-5xl md:text-6xl">INSIDE THE <span className="text-primary">FORGE</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] md:aspect-auto md:h-64"
            >
              <img src={src} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/30" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/90 backdrop-blur-xl p-6"
          >
            <motion.img
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              src={images[open]} alt="" className="max-h-[85vh] max-w-5xl rounded-xl"
            />
            <button onClick={() => setOpen(null)} className="absolute right-6 top-6 rounded-full bg-surface p-3"><X className="h-5 w-5" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
