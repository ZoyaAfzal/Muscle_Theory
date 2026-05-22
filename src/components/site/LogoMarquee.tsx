const LOGOS = ["NIKE", "ADIDAS", "UNDER ARMOUR", "REEBOK", "PUMA", "GYMSHARK", "NEW BALANCE", "ASICS"];

export default function LogoMarquee() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <section className="relative border-y border-border bg-surface/40 py-8 overflow-hidden">
      <div className="flex w-[200%] marquee-track">
        {items.map((l, i) => (
          <div key={i} className="flex shrink-0 items-center justify-center px-12 font-display text-3xl tracking-[0.3em] text-foreground/40 transition hover:text-primary">
            {l}
          </div>
        ))}
      </div>
    </section>
  );
}
