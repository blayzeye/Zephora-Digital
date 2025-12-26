import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl animate-float-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full filter blur-3xl animate-float-2"></div>
        <div className="absolute bottom-1/2 right-1/2 w-24 h-24 bg-primary/10 rounded-lg filter blur-2xl animate-float-3"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
          Drive Growth Through Digital Excellence
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
          We build high-converting websites and apps that fuel your success. Let's turn your vision into a reality.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">
              Start Your Project <MoveRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link href="#services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
