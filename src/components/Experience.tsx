import { Briefcase, Clock, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SOC Level 1",
      organization: "TryHackMe",
      type: "Course",
      period: "Dec 2025 - Jan 2026",
      duration: "65 hrs",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "SANS 450",
      organization: "NETRIDERS",
      type: "Course",
      period: "Nov 2025 - Dec 2025",
      duration: "17 hrs",
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "eCIR Prep (Incident Response)",
      organization: "NETRIDERS",
      type: "Course",
      period: "Oct 2025 - Nov 2025",
      duration: "52 hrs",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Infrastructure Penetration Tester",
      organization: "WE INNOVATE",
      type: "Internship",
      period: "Aug 2024 - Sep 2024",
      duration: "150 hrs",
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "DFIR Bootcamp",
      organization: "ITI (Information Technology Institute)",
      type: "Bootcamp",
      period: "Oct 2024 - Nov 2024",
      duration: "3 weeks",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Cybersecurity For Beginners",
      organization: "ITI",
      type: "Internship",
      period: "May 2024",
      duration: "35 hrs",
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "eJPTv1 Prep",
      organization: "NETRIDERS ACADEMY",
      type: "Training",
      period: "Feb 2024 - Mar 2024",
      duration: "55 hrs",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Cisco CyberOps Associate",
      organization: "NTI (National Telecommunication Institute)",
      type: "Internship",
      period: "Jul 2023 - Aug 2023",
      duration: "180 hrs",
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "Cisco CEH",
      organization: "Cisco",
      type: "Internship",
      period: "Aug 2023 - Sep 2023",
      duration: "80 hrs",
      color: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <section id="experience" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Professional Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Training & <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <article
              key={`${exp.title}-${index}`}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                    {exp.type}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Building2 size={16} />
                  <span className="text-sm">{exp.organization}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
