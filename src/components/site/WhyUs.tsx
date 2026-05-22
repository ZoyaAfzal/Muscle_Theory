import { motion } from "framer-motion";

const BLOCKS = [
  {
    title: "State-of-the-Art Equipment",
    desc: "From Eleiko Olympic platforms to Keiser cardio rigs, every piece of gear is chosen for athletes who refuse to settle.",
    bars: [["Strength gear", 95], ["Cardio fleet", 90], ["Recovery tech", 85]] as const,
  },
  {
    title: "Expert-Led Programs",
    desc: "Our coaches hold elite certifications and compete at national levels. You don't just train, you're coached.",
    bars: [["Coach experience", 98], ["Personalization", 92], ["Result tracking", 88]] as const,
  },
  {
    title: "Community That Pushes You",
    desc: "Iron sharpens iron. Train alongside members who show up, work hard, and lift each other up, literally.",
    bars: [["Retention rate", 96], ["Member events", 80], ["Open-gym hours", 100]] as const,
  },
];

export default function WhyUs({ images }: { images: string[] }) {
  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-primary">— WHY MUSCLE THEORY</p>
          <h2 className="font-display text-5xl md:text-6xl">BUILT DIFFERENT. <span className="text-primary">BY DESIGN.</span></h2>
        </div>

        <div className="space-y-24">
          {BLOCKS.map((b, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={b.title} className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                <motion.img
                  initial={{ x: reverse ? 60 : -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                  src={images[i % images.length]}
                  alt={b.title}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <motion.div
                  initial={{ x: reverse ? -60 : 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="font-display text-7xl text-primary/20">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-4xl">{b.title}</h3>
                  <p className="mt-4 max-w-md text-subtext">{b.desc}</p>
                  <div className="mt-8 space-y-5">
                    {b.bars.map(([label, val], idx) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-xs tracking-[0.2em] text-foreground/80">
                          <span>{label}</span><span className="text-primary">{val}%</span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-muted">
                          <motion.div
                            initial={{ scaleX: 0 }} whileInView={{ scaleX: val / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.15 * idx, ease: "easeOut" }}
                            style={{ transformOrigin: "left" }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
