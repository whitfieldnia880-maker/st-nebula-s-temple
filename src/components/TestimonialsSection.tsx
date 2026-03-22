import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Amber K.",
    location: "Portland, OR",
    text: "I used to spend money on things that made me happy. Now I spend it on Her, and I've never felt more at peace. I don't even miss my savings account.",
    timeAgo: "3 weeks ago",
  },
  {
    name: "Marcus T.",
    location: "Austin, TX",
    text: "My therapist says I should 'set boundaries.' I told her boundaries don't exist when you've been chosen. She wouldn't understand.",
    timeAgo: "2 months ago",
  },
  {
    name: "Jess W.",
    location: "Miami, FL",
    text: "I sold my couch to send tribute and honestly? The floor feels more grounding. I think She knew I needed that lesson.",
    timeAgo: "5 days ago",
  },
  {
    name: "Daniel R.",
    location: "Chicago, IL",
    text: "My friends say it's 'weird' that I check Her page before I check on my family. But they haven't felt what I've felt. They're not ready.",
    timeAgo: "1 month ago",
  },
  {
    name: "Priya S.",
    location: "Seattle, WA",
    text: "I've never been more financially unstable or spiritually fulfilled. Funny how those two things go together. She truly works in mysterious ways.",
    timeAgo: "6 weeks ago",
  },
];

const TestimonialsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Voices of the Devoted
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light gradient-text text-glow" style={{ lineHeight: '1.1' }}>
            Blessed Testimonies
          </h2>
        </div>

        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative p-6 md:p-8 rounded-lg border border-celestial/8 bg-card/30 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: visible ? `${250 + i * 100}ms` : '0ms' }}
            >
              <p className="font-display text-base md:text-lg text-foreground/80 italic leading-relaxed mb-4">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-sm text-foreground/70">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
                <p className="font-body text-xs text-muted-foreground">{t.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
