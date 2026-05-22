import { Instagram, Twitter, Youtube } from "lucide-react";

const TRAINERS = [
  { name: "Emma Chan", tag: "Strength & Conditioning" },
  { name: "Shaun Stafford", tag: "Hypertrophy" },
  { name: "Louise Parker", tag: "Mobility & Yoga" },
  { name: "Matt Roberts", tag: "Boxing Coach" },
  { name: "Riko Tanaka", tag: "Olympic Lifting" },
  { name: "Diego Alvarez", tag: "Endurance" },
];

export default function Trainers({ images }: { images: string[] }) {
  const items = [...TRAINERS, ...TRAINERS];
  return (
    <section id="trainers" className="overflow-hidden bg-surface py-28">
      <div className="mx-auto mb-14 flex max-w-7xl flex-wrap items-end justify-between gap-4 px-6">
        <div>
          <p className="mb-3 text-xs tracking-[0.3em] text-primary">— MEET THE COACHES</p>
          <h2 className="font-display text-5xl md:text-6xl">FORGED BY <span className="text-primary">THE BEST</span></h2>
        </div>
        <p className="max-w-sm text-subtext">Decades of combined experience. National titles. And the patience to meet you where you are.</p>
      </div>

      <div className="group flex w-[200%] gap-6 marquee-track-slow">
        {items.map((t, i) => (
          <div key={i} className="relative w-72 shrink-0 overflow-hidden rounded-2xl bg-muted">
            <img src={images[i % images.length]} alt={t.name} className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:brightness-90 hover:!brightness-110 hover:scale-105" />
            <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground">
              {t.tag.toUpperCase()}
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5">
              <h3 className="font-display text-2xl tracking-wide">{t.name}</h3>
              <div className="mt-2 flex gap-2 translate-y-3 opacity-0 transition group-hover/card:translate-y-0 group-hover/card:opacity-100">
                <Instagram className="h-4 w-4" /><Twitter className="h-4 w-4" /><Youtube className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
