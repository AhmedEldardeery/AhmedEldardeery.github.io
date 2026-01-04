import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

import cert1 from "@/assets/certificates/cert-1.jpg";
import cert2 from "@/assets/certificates/cert-2.jpg";
import cert3 from "@/assets/certificates/cert-3.jpg";
import cert4 from "@/assets/certificates/cert-4.jpg";
import cert5 from "@/assets/certificates/cert-5.jpg";

const CertificateGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    { src: cert1, title: "Cisco CyberOps Associate & IBM SkillsBuild Ethical Hacker" },
    { src: cert2, title: "NTI Cisco Cybersecurity, eJPTv1 Prep & Linux Achievement" },
    { src: cert3, title: "WE Innovate Infrastructure Pentest & ITI DFIR Bootcamp" },
    { src: cert4, title: "NETRIDERS eCIR Prep & SOC Fundamental" },
    { src: cert5, title: "TryHackMe SOC Level 1 Learning Path" },
  ];

  return (
    <section id="certificate-gallery" className="py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Proof of Excellence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Certificate <span className="text-gradient">Gallery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer hover-lift"
              onClick={() => setSelectedImage(cert.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <p className="text-sm font-medium text-foreground">{cert.title}</p>
                <ZoomIn className="text-primary" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-card border border-border hover:border-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CertificateGallery;
