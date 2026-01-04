import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Academic Background
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Bachelor's Degree
                </h3>
                <p className="text-xl text-muted-foreground mb-2">
                  Electronics & Communication Engineering
                </p>
                <p className="text-primary font-medium mb-4">
                  Helwan University
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>2021 - 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
