import { Facebook, Instagram, Send, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2"><Zap className="h-6 w-6 text-primary" fill="currentColor" /><span className="font-display text-2xl tracking-wider">MUSCLE THEORY</span></div>
          <p className="mt-4 text-sm text-subtext">Where iron meets identity. A gym built for those who don't settle.</p>
          <div className="mt-6 flex gap-3">
            {[Send, Facebook, Instagram].map((I, i) => (
              <a key={i} className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-xs tracking-[0.25em] text-primary">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            {["Home", "About", "Services", "Trainers", "News", "Contact"].map((l) => <li key={l}><a className="hover:text-primary">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs tracking-[0.25em] text-primary">OPEN HOURS</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Mon–Fri <span className="text-subtext">06:00–22:00</span></li>
            <li>Saturday <span className="text-subtext">08:00–17:00</span></li>
            <li>Sunday <span className="text-subtext">Closed</span></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs tracking-[0.25em] text-primary">NEWSLETTER</h4>
          <p className="mb-3 text-sm text-subtext">Tips, programs, and members-only drops.</p>
          <form className="flex">
            <input placeholder="email" className="w-full rounded-l-full border border-border bg-surface px-4 py-2 text-sm outline-none focus:border-primary" />
            <button className="rounded-r-full bg-primary px-4 text-primary-foreground"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-end gap-4 border-t border-border px-6 pt-6 text-xs text-subtext md:flex-row">
        <a 
          href="https://axistechgroup.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary transition-colors"
        >
          Powered by AxisTechGroup
        </a>
      </div>
    </footer>
  );
}
