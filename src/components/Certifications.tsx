import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "SOC Level 1 Learning Path",
      issuer: "TryHackMe",
      date: "January 2026",
      duration: "65 hours",
      highlight: true,
    },
    {
      title: "eCIR Prep (Incident Response)",
      issuer: "NETRIDERS Academy",
      date: "November 2025",
      duration: "52 hours",
      highlight: false,
    },
    {
      title: "SOC Fundamental",
      issuer: "NETRIDERS Academy",
      date: "2025",
      duration: "",
      highlight: false,
    },
    {
      title: "Infrastructure Pentest Bootcamp",
      issuer: "WE Innovate Academy",
      date: "2024",
      duration: "150 hours",
      highlight: true,
    },
    {
      title: "ITI DFIR Bootcamp",
      issuer: "Information Technology Institute",
      date: "October - November 2024",
      duration: "",
      highlight: false,
    },
    {
      title: "Cisco CyberOps Associate",
      issuer: "Cisco Networking Academy / NTI",
      date: "October 2023",
      duration: "180 hours",
      highlight: true,
    },
    {
      title: "Ethical Hacker - Cybersecurity Track",
      issuer: "IBM SkillsBuild / Education For Employment",
      date: "2023",
      duration: "",
      highlight: false,
    },
    {
      title: "eJPTv1 Prep",
      issuer: "NETRIDERS Academy",
      date: "March 2024",
      duration: "55 hours",
      highlight: false,
    },
    {
      title: "Cisco Cybersecurity Training",
      issuer: "NTI - National Telecommunication Institute",
      date: "August 2023",
      duration: "120 hours",
      highlight: false,
    },
    {
      title: "Linux Achievement",
      issuer: "CCNA Helper",
      date: "October 2023",
      duration: "",
      highlight: false,
    },
  ];

  return (
    <section id="certifications" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Credentials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className={`group p-6 rounded-2xl border transition-all duration-500 hover-lift cursor-default ${
                cert.highlight
                  ? "bg-primary/5 border-primary/30 hover:border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    cert.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{cert.date}</span>
                    {cert.duration && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span>{cert.duration}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TryHackMe Profile Link */}
        <div className="mt-12 text-center">
          <a
            href="https://tryhackme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <span className="font-medium">View TryHackMe Profile</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
