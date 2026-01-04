import { Shield, Network, Bug, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Infrastructure security assessments and vulnerability analysis.",
    },
    {
      icon: Network,
      title: "SOC Operations",
      description: "Security monitoring, threat detection, and incident response.",
    },
    {
      icon: Bug,
      title: "Malware Analysis",
      description: "Digital forensics and incident response (DFIR) expertise.",
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Committed to staying ahead with latest security techniques.",
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
              Passionate about
              <span className="text-gradient"> cybersecurity</span> and
              innovation
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm an Electronics & Communication Engineering student at Helwan University (2021-2025) 
                with practical experience through internships at Cisco Networking Academy, WE Innovate, 
                and cybersecurity workshops at Information Technology Institute.
              </p>
              <p>
                My technical expertise spans Python, C++, Assembly, and Embedded Systems with hands-on 
                experience on Microchip and Arduino platforms. Through effective collaboration with 
                teams from different organizations, I've developed strong communication, leadership, 
                and problem-solving skills.
              </p>
              <p>
                Managing multiple projects and tackling technical challenges has honed my critical 
                thinking, decision-making, and stress management abilities in fast-paced environments.
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
