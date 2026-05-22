import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services-data";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/$serviceId")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.id === params.serviceId);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link 
            to="/" 
            className="group mb-12 inline-flex items-center text-sm font-semibold tracking-widest text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            BACK TO HOME
          </Link>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 text-xs tracking-[0.3em] text-primary uppercase">— {service.title}</p>
              <h1 className="mb-8 font-display text-6xl leading-[0.9] md:text-7xl lg:text-8xl">
                MASTER THE <span className="text-primary">ART</span> OF {service.title.toUpperCase()}
              </h1>
              <p className="mb-10 text-xl leading-relaxed text-subtext italic">
                "{service.desc}"
              </p>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-foreground/80">
                  {service.fullDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="rounded-3xl border border-border bg-surface p-10">
                <h3 className="mb-8 font-display text-3xl text-primary">KEY BENEFITS</h3>
                <ul className="space-y-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="mr-4 h-6 w-6 shrink-0 text-primary" />
                      <span className="text-lg font-medium text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-surface/50 p-10">
                <h3 className="mb-8 font-display text-3xl text-primary">WHAT TO EXPECT</h3>
                <ul className="space-y-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-lg text-subtext">
                      <div className="mr-4 h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-24 rounded-[3rem] bg-primary p-12 text-center md:p-20"
          >
            <h2 className="mb-8 font-display text-5xl leading-tight text-background md:text-6xl">
              READY TO START YOUR <br /> {service.title.toUpperCase()} JOURNEY?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-background/80">
              Join Muscle Theory today and get 1-on-1 guidance from our expert coaches. 
              Your first session is on us.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/book-trial">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-lg font-bold">
                  BOOK FREE TRIAL
                </Button>
              </Link>
              <Link to="/" hash="contact">
                <Button size="lg" variant="ghost" className="h-16 px-10 text-lg font-bold text-background hover:bg-background/10 border-2 border-background/30">
                  CONTACT US
                </Button>
              </Link>
            </div>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
