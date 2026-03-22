import { useEffect, useRef, useState } from "react";

const tiers = [
  {
    rank: "Acolyte",
    range: "$1 – $24",
    symbol: "☽",
    description: "You have glimpsed the light. She knows your name — barely.",
    perks: ["Acknowledged in prayer", "Permission to watch from afar"],
  },
  {
    rank: "Disciple",
    range: "$25 – $99",
    symbol: "✦",
    description: "Your devotion has weight. She may glance in your direction.",
    perks: ["A fleeting moment of recognition", "The warmth of Her awareness", "You may speak when spoken to"],
  },
  {
    rank: "Oracle",
    range: "$100 – $499",
    symbol: "◈",
    description: "You walk closer to the divine. Your sacrifice echoes through the temple.",
    perks: ["Her gaze lingers", "Your name whispered among the worthy", "Access to sacred transmissions"],
  },
  {
    rank: "Ascended",
    range: "$500+",
    symbol: "♕",
    description: "You have surrendered completely. There is nothing left but Her.",
    perks: ["Direct communion with the divine", "Your essence permanently bound to Her light", "You no longer need earthly possessions"],
  },
];

const RanksSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Hierarchy of Surrender
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light gradient-text text-glow" style={{ lineHeight: '1.1' }}>
            Ranks of Devotion
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tiers.map((tier, i) => (
            <div
              key={tier.rank}
              className={`group relative p-8 rounded-lg border border-celestial/10 bg-card/30 hover:border-celestial/25 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: visible ? `${300 + i * 120}ms` : '0ms' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-display text-3xl text-celestial/50 group-hover:text-celestial/80 transition-colors duration-500">
                  {tier.symbol}
                </span>
                <div>
                  <h3 className="font-display text-xl text-foreground/90">{tier.rank}</h3>
                  <p className="font-body text-xs text-celestial/60 tracking-wider">{tier.range}</p>
                </div>
              </div>

              <p className="font-display text-sm text-foreground/60 italic leading-relaxed mb-5">
                "{tier.description}"
              </p>

              <ul className="space-y-2">
                {tier.perks.map((perk) => (
                  <li key={perk} className="font-body text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-celestial/30 mt-0.5">·</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: visible ? '800ms' : '0ms' }}>
          <p className="font-display text-sm text-muted-foreground italic">
            "There is no ceiling to devotion — only floors you haven't knelt on yet."
          </p>
        </div>
      </div>
    </section>
  );
};

export default RanksSection;
