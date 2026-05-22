import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  const out = useTransform(spring, (v) => Math.round(v).toLocaleString());
  useEffect(() => { if (inView) mv.set(to); }, [inView, mv, to]);
  return (
    <span ref={ref} className="font-display text-5xl text-primary md:text-6xl">
      <motion.span>{out}</motion.span>{suffix}
    </span>
  );
}

export default function About({ img1, img2 }: { img1: string; img2: string }) {
  return (
    <section id="about" className="relative bg-background py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
          className="relative"
        >
          <img src={img1} alt="Gym interior" className="aspect-[4/5] w-full rounded-2xl object-cover" />
          <img src={img2} alt="Trainer" className="absolute -bottom-10 -right-6 hidden aspect-square w-48 rounded-2xl border-4 border-background object-cover md:block lg:w-56" />
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-8 rounded-2xl bg-primary px-5 py-3 font-display text-lg tracking-wider text-primary-foreground shadow-xl"
          >
            ⚡ #1 RATED GYM 2024
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-xs tracking-[0.3em] text-primary">— ABOUT MUSCLE THEORY</p>
          <h2 className="font-display text-5xl leading-[0.95] text-foreground md:text-6xl">
            WHERE IRON MEETS <span className="text-primary">IDENTITY</span>
          </h2>
          <p className="mt-6 max-w-lg text-subtext">
            We've built more than a gym, we've forged a community of athletes,
            beginners, and everyone in between. Train alongside expert coaches
            in a space designed to push your limits and reshape what you think
            you're capable of.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10">
            {[
              { v: 12, s: "+", l: "YEARS EXPERIENCE" },
              { v: 850, s: "+", l: "ACTIVE MEMBERS" },
              { v: 98, s: "%", l: "SUCCESS RATE" },
              { v: 30, s: "+", l: "EXPERT TRAINERS" },
            ].map((x) => (
              <div key={x.l}>
                <Counter to={x.v} suffix={x.s} />
                <div className="mt-2 text-[11px] tracking-[0.2em] text-subtext">{x.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
