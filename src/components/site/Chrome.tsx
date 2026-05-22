import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[70] h-0.5 w-full origin-left bg-primary"
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[70] grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:scale-110 lime-glow"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
