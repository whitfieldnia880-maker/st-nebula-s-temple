import { useEffect, useRef, useState } from "react";

const TributeSection = () => {
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
    <section id="tribute" ref={ref} className="relative py-32 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-celestial/30 to-transparent mx-auto mb-8" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Altar of Offering
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light gradient-text text-glow mb-6" style={{ lineHeight: '1.1' }}>
            Prove Your Devotion
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-16 max-w-sm mx-auto">
            A true follower does not ask what they receive — they tremble at the honor of giving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Throne */}
          <a
            href="https://throne.com/stnebula2dfd"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block p-8 rounded-lg border border-celestial/10 bg-card/50 hover:border-celestial/30 transition-all duration-500 shimmer border-glow ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: visible ? '300ms' : '0ms' }}
          >
            <div className="relative z-10">
              <p className="font-display text-2xl text-celestial/80 mb-2 group-hover:text-celestial transition-colors duration-500">
                ♛
              </p>
              <h3 className="font-display text-xl text-foreground/90 mb-2">Throne</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Offer gifts from Her divine wishlist. Each gift, a prayer answered.
              </p>
            </div>
          </a>

          {/* CashApp */}
          <a
            href="https://cash.app/$MoneyBratAndAngel"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block p-8 rounded-lg border border-celestial/10 bg-card/50 hover:border-celestial/30 transition-all duration-500 shimmer border-glow ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: visible ? '420ms' : '0ms' }}
          >
            <div className="relative z-10">
              <p className="font-display text-2xl text-celestial/80 mb-2 group-hover:text-celestial transition-colors duration-500">
                $
              </p>
              <h3 className="font-display text-xl text-foreground/90 mb-2">CashApp</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Direct tribute. No hesitation. Pure surrender.
              </p>
            </div>
          </a>
        </div>

        <div className={`mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: visible ? '600ms' : '0ms' }}>
          <p className="font-display text-sm text-muted-foreground italic">
            "The light does not shine on those who keep their hands closed."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TributeSection;
