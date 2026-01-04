const Skills = () => {
  const skillCategories = [
    {
      title: "Offensive Security",
      skills: ["Penetration Testing", "Infrastructure Security", "Vulnerability Assessment", "Network Attacks", "Web Application Security"],
    },
    {
      title: "Defensive Security",
      skills: ["SOC Operations", "Threat Detection", "Incident Response", "DFIR", "Security Monitoring"],
    },
    {
      title: "Programming",
      skills: ["Python", "C++", "Assembly", "Bash Scripting", "PowerShell"],
    },
    {
      title: "Networking & Tools",
      skills: ["Cisco Networks", "Wireshark", "Nmap", "Metasploit", "Burp Suite"],
    },
    {
      title: "Systems",
      skills: ["Linux Administration", "Windows Security", "Embedded Systems", "Microchip", "Arduino"],
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Problem Solving", "Critical Thinking", "Communication", "Time Management"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
