import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
});

function Checkout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-12 font-display text-5xl text-primary">CHECKOUT</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-3xl border border-border bg-surface p-8">
              <h3 className="mb-6 font-display text-2xl">SHIPPING & PAYMENT</h3>
              <p className="text-sm text-subtext">Checkout forms would go here.</p>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <h3 className="mb-6 font-display text-2xl">ORDER SUMMARY</h3>
              <p className="text-sm text-subtext">Order details will appear here.</p>
              <Button className="w-full mt-8">CONFIRM PURCHASE</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
