import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book-trial")({
  component: BookTrial,
});

function BookTrial() {
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link 
            to="/" 
            className="group mb-12 inline-flex items-center text-sm font-semibold tracking-widest text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            BACK TO HOME
          </Link>

          <div className="text-center mb-16">
            <p className="mb-4 text-xs tracking-[0.3em] text-primary uppercase">— BOOKING</p>
            <h1 className="font-display text-5xl md:text-6xl mb-6">CLAIM YOUR <span className="text-primary">FREE TRIAL</span></h1>
            <p className="text-subtext max-w-xl mx-auto italic text-lg">
              Take the first step towards your fitness goals. Fill out the form below to book your complimentary session.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-border bg-surface p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-display mb-4">BOOKING RECEIVED!</h2>
                <p className="text-subtext mb-8 max-w-md mx-auto">
                  We've received your request for a free trial. One of our coaches will contact you shortly to confirm your session.
                </p>
                <Link to="/">
                  <Button size="lg" className="rounded-xl px-12">RETURN HOME</Button>
                </Link>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-foreground/70 ml-1">FULL NAME</label>
                    <Input required placeholder="John Doe" className="h-14 rounded-xl bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-foreground/70 ml-1">EMAIL ADDRESS</label>
                    <Input type="email" required placeholder="john@example.com" className="h-14 rounded-xl bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-foreground/70 ml-1">PHONE NUMBER</label>
                    <Input type="tel" required placeholder="+1 (555) 000-0000" className="h-14 rounded-xl bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-foreground/70 ml-1">SELECT PROGRAM</label>
                    <Select required>
                      <SelectTrigger className="h-14 rounded-xl bg-background">
                        <SelectValue placeholder="Choose a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bodybuilding">Bodybuilding</SelectItem>
                        <SelectItem value="crossfit">Crossfit</SelectItem>
                        <SelectItem value="powerlifting">Powerlifting</SelectItem>
                        <SelectItem value="yoga">Yoga & Mobility</SelectItem>
                        <SelectItem value="boxing">Combat Sports</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-foreground/70 ml-1">PREFERRED DATE</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full h-14 justify-start text-left font-normal rounded-xl bg-background border-input",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-foreground/70 ml-1">PREFERRED TIME</label>
                    <Select required>
                      <SelectTrigger className="h-14 rounded-xl bg-background">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (6AM - 11AM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM - 9PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-foreground/70 ml-1">ANY SPECIFIC GOALS? (OPTIONAL)</label>
                  <Textarea placeholder="Tell us what you want to achieve..." className="min-h-[120px] rounded-xl bg-background" />
                </div>

                <Button type="submit" size="lg" className="w-full h-16 rounded-xl font-bold tracking-[0.2em] text-lg">
                  CONFIRM BOOKING
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
