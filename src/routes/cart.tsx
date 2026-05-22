import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/cart")({
  component: Cart,
});

function Cart() {
  const { items, removeItem } = useCart();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-12 font-display text-5xl">YOUR <span className="text-primary">CART</span></h1>
          {items.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface p-12 text-center">
              <p className="text-subtext mb-8">Your cart is currently empty.</p>
              <Link to="/" hash="shop">
                <Button>Browse Shop</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between rounded-xl border border-border bg-surface p-6">
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-primary font-semibold">${item.price}</p>
                  </div>
                  <Button variant="ghost" onClick={() => removeItem(index)}>Remove</Button>
                </div>
              ))}
              <div className="flex justify-end mt-12">
                <Link to="/checkout">
                  <Button size="lg">PROCEED TO CHECKOUT</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
