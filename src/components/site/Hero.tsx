import { motion } from "framer-motion";
import { ArrowDown, Grid3x3 } from "lucide-react";
import ParticleOverlay from "./ParticleOverlay";
import { Link } from "@tanstack/react-router";

export default function Hero({ heroImg }: { heroImg: string }) {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-background pt-24">
      <ParticleOverlay />

      {/* Background athlete image */}
      <motion.div
        initial={{ scale: 1 }} animate={{ scale: 1.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-3/5 md:block"
      >
        <img src={heroImg} alt="Athlete training" className="h-full w-full object-cover object-center [mask-image:linear-gradient(to_left,black_55%,transparent)]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs tracking-[0.2em] text-subtext backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            EST. 2012 - JAKARTA
          </motion.div>

          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] text-foreground">
            <motion.span
              initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              TRAIN SMART
            </motion.span>
            <motion.span
              initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block text-primary text-glow"
            >
              LIVE STRONG
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 max-w-md text-base leading-relaxed text-subtext"
          >
            Whether you're a beginner or a seasoned athlete, our personalized workouts, expert
            guidance, and supportive community are here to help you every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link to="/" hash="about" className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold tracking-[0.18em] text-primary-foreground transition hover:scale-[1.03] lime-glow">
              <Grid3x3 className="h-4 w-4 transition-transform group-hover:rotate-90" />
              LEARN MORE
            </Link>
            <Link to="/" hash="services" className="text-xs font-semibold tracking-[0.25em] text-subtext underline-offset-8 hover:text-foreground hover:underline">
              EXPLORE PROGRAMS
            </Link>
          </motion.div>
        </div>

        {/* Right overlay massive text */}
        <div className="pointer-events-none absolute bottom-10 right-6 z-20 hidden text-right md:block">
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-display text-[clamp(6rem,16vw,16rem)] leading-[0.8] text-foreground/95 mix-blend-difference"
          >
            FORGE<span className="text-primary">®</span>
            <div className="-mt-6">FIT</div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <ArrowDown className="h-5 w-5 text-primary animate-bounce-down" />
      </div>
    </section>
  );
}
