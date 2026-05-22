import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [sent, setSent] = useState(false);
  
  return (
    <section id="contact" className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-primary">— GET IN TOUCH</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-6">READY TO <span className="text-primary">START?</span></h2>
            <p className="text-subtext mb-8">Drop us a message and we'll get back to you with a free intro session, gym tour, or personalized program recommendation.</p>
            
            <div className="flex items-center gap-3 text-subtext">
              <Mail className="h-5 w-5 text-primary" />
              <span>hello@muscletheory.design</span>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-6 rounded-3xl border border-border bg-background p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input required placeholder="Your Name" className="h-14 rounded-xl" />
              <Input type="email" required placeholder="Your Email" className="h-14 rounded-xl" />
            </div>
            <Input required placeholder="Subject" className="h-14 rounded-xl" />
            <Textarea required placeholder="Your Message" className="min-h-[150px] rounded-xl" />
            
            <Button type="submit" size="lg" className="w-full h-14 rounded-xl font-bold tracking-[0.2em]">
              {sent ? (
                <span className="flex items-center gap-2">
                  <Check className="h-5 w-5" /> SENT
                </span>
              ) : "SEND MESSAGE"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
