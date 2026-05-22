import { Play } from "lucide-react";

export default function VideoBanner({ poster }: { poster: string }) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <p className="mb-4 text-xs tracking-[0.4em] text-primary">— BE INSPIRED™</p>
        <h2 className="font-display text-6xl leading-none md:text-8xl">EXPLORE LIFE <br /> AT THE GYM</h2>
        <button className="group relative mt-12 grid h-24 w-24 place-items-center rounded-full bg-primary text-primary-foreground">
          <Play className="h-8 w-8 fill-current" />
          <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring [animation-delay:0.8s]" />
        </button>
      </div>
    </section>
  );
}
