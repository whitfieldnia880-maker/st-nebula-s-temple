import { useEffect, useRef, useState } from "react";
import nebulaShepherd from "@/assets/nebula-shepherd.jpeg";

const GallerySection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="relative shimmer rounded-lg overflow-hidden border border-celestial/10 border-glow">
          <img
            src={nebulaShepherd}
            alt="St Nebula tending to her flock under celestial skies"
            className="w-full h-[400px] md:h-[520px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-xl md:text-2xl text-foreground/90 italic">
              "Even the shepherd kneels before the divine."
            </p>
            <p className="font-body text-xs text-muted-foreground mt-2 tracking-widest uppercase">
              — Gospel of Nebula, Verse III
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
