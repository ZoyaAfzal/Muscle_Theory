import { Zap } from "lucide-react";

export default function CTABanner() {
  const items = Array.from({ length: 12 });
  return (
    <section className="py-12">
      <div className="-skew-y-1 overflow-hidden bg-primary py-8">
        <div className="flex w-[200%] items-center marquee-track-fast">
          {items.map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 px-6 font-display text-7xl tracking-wide text-primary-foreground md:text-8xl">
              <Zap className="h-12 w-12 fill-current" /> JOIN NOW
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
