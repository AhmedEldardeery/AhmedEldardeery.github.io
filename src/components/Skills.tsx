const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "Prototyping", "UI/UX", "Brand Design"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <h3 className="font-serif text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    style={{
                      transitionDelay: `${skillIndex * 50}ms`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
