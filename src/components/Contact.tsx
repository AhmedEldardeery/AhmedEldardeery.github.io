import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Let's discuss
              <span className="text-gradient"> security</span> together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in collaboration or have a security challenge? 
              I'd love to hear about it. Let's connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:ahmedeldardeery12@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ahmedeldardeery12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+201140043331"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +20 114 004 3331
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Giza, Egypt
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://tryhackme.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm"
                  >
                    TryHackMe
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
