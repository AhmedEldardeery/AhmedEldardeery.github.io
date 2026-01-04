import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A full-stack e-commerce solution with seamless checkout experience and real-time inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Brand Identity System",
      category: "Design",
      description:
        "Complete visual identity redesign for a tech startup, including logo, typography, and brand guidelines.",
      tags: ["Branding", "UI/UX", "Figma"],
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "Analytics Dashboard",
      category: "Web Application",
      description:
        "Interactive data visualization dashboard with real-time updates and customizable widgets.",
      tags: ["TypeScript", "D3.js", "REST API"],
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      description:
        "User-centered mobile app design for a fitness tracking application with gamification elements.",
      tags: ["Mobile", "Prototyping", "User Research"],
      color: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="work" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Projects I'm <span className="text-gradient">proud</span> of
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-primary text-sm font-medium tracking-wide">
                    {project.category}
                  </span>
                  <div className="p-2 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
