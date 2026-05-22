import { Star } from "lucide-react";

const REVIEWS = [
  { name: "James Carter", role: "Businessman", text: "Hands down the best gym I've been to. The coaches genuinely care about your progress and the energy is electric." },
  { name: "Aisha Rahman", role: "Designer", text: "I've dropped 14kg and gained the kind of strength I didn't think possible. The community keeps me coming back." },
  { name: "Marco Bianchi", role: "Engineer", text: "Equipment is pristine, classes are challenging, and the recovery lounge is worth the membership alone." },
  { name: "Priya Nair", role: "Doctor", text: "Programming is intelligent - actual progression, not random workouts. Finally training that feels like a craft." },
  { name: "Liam O'Brien", role: "Founder", text: "Muscle Theory doesn't just train your body, it sharpens your mind. I leave every session more focused." },
];

export default function Testimonials() {
  const items = [...REVIEWS, ...REVIEWS];
  return (
    <section className="overflow-hidden bg-background py-28">
      <div className="mx-auto mb-14 max-w-7xl px-6 text-center">
        <p className="mb-3 text-xs tracking-[0.3em] text-primary">— TESTIMONIALS</p>
        <h2 className="font-display text-5xl md:text-6xl">REAL PEOPLE. <span className="text-primary">REAL RESULTS.</span></h2>
      </div>
      <div className="flex w-[200%] gap-6 marquee-track-slow">
        {items.map((r, i) => (
          <div key={i} className="w-[420px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-primary text-primary" />)}
              <span className="ml-2 text-xs text-subtext">5.0</span>
            </div>
            <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-subtext">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
