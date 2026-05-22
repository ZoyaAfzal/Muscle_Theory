import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart-store";

const links = [
  { name: "HOME", hash: "home" },
  { name: "ABOUT", hash: "about" },
  { name: "SERVICES", hash: "services" },
  { name: "TRAINERS", hash: "trainers" },
  { name: "CONTACT", hash: "contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const cartItems = useCart((state) => state.items);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" hash="home" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" fill="currentColor" />
          <span className="font-display text-2xl tracking-wider text-foreground">MUSCLE THEORY</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.name}
              to="/"
              hash={l.hash}
              className="group relative text-xs font-medium tracking-[0.2em] text-foreground/80 transition hover:text-foreground"
            >
              {l.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/cart" className="relative p-2 text-foreground/70 hover:text-primary transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-display text-2xl">MUSCLE THEORY</span>
              <button onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
            </div>
            <motion.nav
              initial="hidden" animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              className="flex flex-col gap-2 px-8 py-12"
            >
              {links.map((l) => (
                <Link
                  key={l.name}
                  to="/"
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl tracking-wide text-foreground"
                >
                  <motion.span
                    variants={{ hidden: { x: 60, opacity: 0 }, show: { x: 0, opacity: 1 } }}
                  >
                    {l.name}
                  </motion.span>
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="font-display text-5xl tracking-wide text-primary flex items-center gap-4 mt-4"
              >
                <motion.span
                  variants={{ hidden: { x: 60, opacity: 0 }, show: { x: 0, opacity: 1 } }}
                  className="flex items-center gap-4"
                >
                  CART ({cartItems.length})
                </motion.span>
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
