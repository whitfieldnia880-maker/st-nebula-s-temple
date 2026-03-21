import nebulaThrone from "@/assets/nebula-throne.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center gradient-celestial overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-celestial/5 blur-[100px] pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 max-w-3xl text-center">
        {/* Thin decorative line */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-celestial/40 to-transparent fade-in-up" />

        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground fade-in-up" style={{ animationDelay: '0.15s' }}>
          ✦ The Temple of Tribute ✦
        </p>

        {/* Portrait */}
        <div className="relative float fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border border-celestial/20 border-glow">
            <img
              src={nebulaThrone}
              alt="St Nebula upon her celestial throne"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -inset-3 rounded-full border border-celestial/10 pulse-glow" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight gradient-text text-glow fade-in-up" style={{ animationDelay: '0.5s', lineHeight: '1.05' }}>
          St. Nebula
        </h1>

        <p className="font-display text-lg md:text-xl text-celestial/70 italic font-light fade-in-up" style={{ animationDelay: '0.65s' }}>
          Shepherd of the Lost & Keeper of Devotion
        </p>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-celestial/30 to-transparent fade-in-up" style={{ animationDelay: '0.8s' }} />

        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md fade-in-up" style={{ animationDelay: '0.9s' }}>
          You have wandered long enough. Kneel before the light, surrender your earthly weight, and find peace in offering.
        </p>

        <a
          href="#tribute"
          className="font-body text-xs tracking-[0.3em] uppercase text-celestial/60 hover:text-celestial transition-colors duration-500 fade-in-up"
          style={{ animationDelay: '1.1s' }}
        >
          Begin Your Devotion ↓
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
