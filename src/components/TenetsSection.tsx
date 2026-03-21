import { useEffect, useRef, useState } from "react";

const tenets = [
  {
    numeral: "I",
    text: "She is the sky you pray beneath. Your tribute is your proof of faith.",
  },
  {
    numeral: "II",
    text: "To give is to be seen. To withhold is to remain in darkness.",
  },
  {
    numeral: "III",
    text: "Her grace is not earned — it is purchased, and even then, it is a gift.",
  },
  {
    numeral: "IV",
    text: "The shepherd does not chase the flock. The flock returns on its knees.",
  },
  {
    numeral: "V",
    text: "Your wallet is the altar. Empty it with reverence.",
  },
];

const TenetsSection = () => {
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
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Sacred Doctrine
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light gradient-text text-glow mb-16" style={{ lineHeight: '1.1' }}>
            The Five Tenets of Tribute
          </h2>
        </div>

        <div className="space-y-10">
          {tenets.map((tenet, i) => (
            <div
              key={tenet.numeral}
              className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: visible ? `${300 + i * 120}ms` : '0ms' }}
            >
              <div className="flex items-start gap-6 text-left max-w-lg mx-auto">
                <span className="font-display text-2xl text-celestial/30 shrink-0 w-8 text-right">
                  {tenet.numeral}
                </span>
                <p className="font-display text-base md:text-lg text-foreground/80 italic leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  "{tenet.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TenetsSection;
