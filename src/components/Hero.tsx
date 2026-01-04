import { ArrowDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-up opacity-0 stagger-1">
            <Shield size={20} className="text-primary" />
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Cybersecurity Professional
            </p>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-8 animate-fade-up opacity-0 stagger-2">
            Ahmed
            <span className="block text-gradient">Eldardeery</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-up opacity-0 stagger-3">
            Penetration Tester & SOC Analyst with expertise in infrastructure security, 
            incident response, and digital forensics. Electronics & Communication Engineering 
            student passionate about cybersecurity innovation.
          </p>

          <p className="text-muted-foreground/70 text-sm mb-12 animate-fade-up opacity-0 stagger-3">
            📍 Giza, Egypt
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#certifications">View Certifications</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 stagger-5">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
