import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import LogoMarquee from "@/components/site/LogoMarquee";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Pricing from "@/components/site/Pricing";
import Trainers from "@/components/site/Trainers";
import Gallery from "@/components/site/Gallery";
import VideoBanner from "@/components/site/VideoBanner";
import Shop from "@/components/site/Shop";
import Testimonials from "@/components/site/Testimonials";
import CTABanner from "@/components/site/CTABanner";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { BackToTop, ScrollProgress } from "@/components/site/Chrome";

import hero from "@/assets/hero-athlete.jpg";
import gym1 from "@/assets/gym-interior-1.jpg";
import trainerP from "@/assets/trainer-portrait.jpg";
import why1 from "@/assets/why-1.jpg";
import why2 from "@/assets/why-2.jpg";
import why3 from "@/assets/why-3.jpg";
import c1 from "@/assets/coach-1.jpg";
import c2 from "@/assets/coach-2.jpg";
import c3 from "@/assets/coach-3.jpg";
import c4 from "@/assets/coach-4.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import video from "@/assets/video-poster.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";
import p7 from "@/assets/product-7.jpg";
import p8 from "@/assets/product-8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MUSCLE THEORY — Where Iron Meets Identity" },
      { name: "description", content: "MUSCLE THEORY is a premium gym in Jakarta with expert coaching, elite equipment, and a community built to push you past your limits." },
      { property: "og:title", content: "MUSCLE THEORY — Where Iron Meets Identity" },
      { property: "og:description", content: "Train smart. Live strong. Premium coaching, elite equipment, real results." },
    ],
  }),
  component: Index,
});

function Index() {
  const coaches = [c1, c2, c3, c4];
  const gallery = [g1, g2, g3, g4, g5, g6, g7, g8];
  const products = [p1, p2, p3, p4, p5, p6, p7, p8];

  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <Hero heroImg={hero} />
      <LogoMarquee />
      <About img1={gym1} img2={trainerP} />
      <Services />
      <WhyUs images={[why1, why2, why3]} />
      <Pricing />
      <Trainers images={coaches} />
      <Gallery images={gallery} />
      <VideoBanner poster={video} />
      <Shop images={products} />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
