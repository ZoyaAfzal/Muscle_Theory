import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services-data";

function Card({ s }: { s: typeof SERVICES[number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [8, -8]);
  const rotateY = useTransform(x, [-80, 80], [-8, 8]);
  const onMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  const Icon = s.icon;
  return (
    <motion.div
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(168,255,62,0.25)]"
    >
      <Icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-125" />
      <h3 className="mt-6 font-display text-3xl tracking-wide text-foreground">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-subtext">{s.desc}</p>
      <Link 
        to="/services/$serviceId" 
        params={{ serviceId: s.id }}
        className="mt-6 inline-flex items-center text-xs font-semibold tracking-[0.2em] text-primary opacity-0 transition group-hover:opacity-100"
      >
        EXPLORE →
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-primary">— OUR SERVICES</p>
            <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">
              EVERYTHING YOU NEED TO <span className="text-primary">LEVEL UP</span>
            </h2>
          </div>
          <p className="max-w-sm text-subtext">From striking to stillness, six disciplines under one roof, each led by world-class coaches.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <Card key={s.id} s={s} />)}
        </div>
      </div>
    </section>
  );
}
