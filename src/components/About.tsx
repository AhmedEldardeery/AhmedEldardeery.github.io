import { Sparkles, Code2, Palette } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating visually stunning interfaces that captivate users.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Embracing new technologies to deliver cutting-edge solutions.",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8">
              Passionate about creating
              <span className="text-gradient"> meaningful</span> digital
              experiences
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over 5 years of experience in web development and design, I
                specialize in building modern, responsive applications that not
                only look great but perform exceptionally.
              </p>
              <p>
                I believe in the power of collaboration and continuous learning.
                Every project is an opportunity to push boundaries and create
                something truly remarkable.
              </p>
            </div>
          </div>

          {/* Right side - Highlight cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
