import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

const TIERS = [
  { name: "STARTER", price: 29, popular: false, features: ["Open-gym access", "1 group class / week", "Locker room access", "Mobile app workouts"] },
  { name: "ELITE", price: 59, popular: true, features: ["Unlimited gym access", "All group classes", "2 PT sessions / month", "Nutrition plan", "Recovery lounge", "Guest passes"] },
  { name: "PRO", price: 89, popular: false, features: ["24/7 gym access", "Unlimited PT", "Custom programming", "InBody scans", "Sports massage", "Priority booking"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-primary">— MEMBERSHIP</p>
          <h2 className="font-display text-5xl md:text-6xl">CHOOSE YOUR <span className="text-primary">WEIGHT CLASS</span></h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl border p-8 transition-all hover:scale-[1.02] ${
                t.popular
                  ? "border-primary bg-surface lime-glow md:scale-110 animate-float"
                  : "border-border bg-surface"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-primary-foreground">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display text-3xl tracking-widest">{t.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl text-primary">${t.price}</span>
                <span className="text-sm text-subtext">/month</span>
              </div>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link 
                to="/" 
                hash="contact"
                className={`mt-10 block w-full text-center rounded-full py-4 text-sm font-bold tracking-[0.2em] transition ${
                  t.popular ? "bg-primary text-primary-foreground hover:brightness-110" : "border border-foreground/20 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                ENROLL NOW
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
