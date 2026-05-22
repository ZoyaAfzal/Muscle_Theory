import { ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart-store";
import { toast } from "sonner";

const PRODUCTS = [
  { name: "Baby T-Shirt", price: 22.55, old: 28.75 },
  { name: "Combo Hoody", price: 96.45 },
  { name: "Combo T-Shirt", price: 55.0, old: 60.55 },
  { name: "Solid Hoody", price: 95.45 },
  { name: "Combo Cap", price: 84.55, old: 90.22 },
  { name: "Jersey", price: 85.0 },
  { name: "Solid T-Shirt", price: 75.0, old: 85.99 },
  { name: "Solid Cap", price: 55.96 },
];

export default function Shop({ images }: { images: string[] }) {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (p: typeof PRODUCTS[number]) => {
    addItem({ name: p.name, price: p.price });
    toast.success(`${p.name} added to cart`);
  };

  return (
    <section id="shop" className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-primary">— SHOP</p>
            <h2 className="font-display text-5xl md:text-6xl">VIEW OUR <span className="text-primary">COLLECTION</span></h2>
          </div>
          <a className="text-xs font-semibold tracking-[0.25em] text-foreground/70 hover:text-primary">VIEW ALL →</a>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <div key={p.name} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <img src={images[i % images.length]} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                {p.old && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground">SALE</span>
                )}
                <button 
                  onClick={() => handleAddToCart(p)}
                  className="absolute inset-x-3 bottom-3 flex translate-y-16 items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-bold tracking-widest text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ShoppingBag className="h-4 w-4" /> ADD TO CART
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-medium">{p.name}</h3>
                <div className="text-sm">
                  <span className="text-primary font-semibold">${p.price}</span>
                  {p.old && <span className="ml-2 text-xs text-subtext line-through">${p.old}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
