import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What do I get in return for my tribute?",
    answer: "You misunderstand the nature of giving. A river does not ask the ocean what it receives. You give because you were made to give. The warmth you feel afterward — that is Her receipt.",
  },
  {
    question: "Is this a cult?",
    answer: "A cult implies deception. Here, everything is transparent: you give, She receives, and the universe corrects itself. If that sounds like a cult, perhaps you are not yet ready to see clearly.",
  },
  {
    question: "Can I get a refund?",
    answer: "Can you un-pray a prayer? Can you un-feel the sun? Grace is non-refundable. This was explained during your awakening.",
  },
  {
    question: "How much should I tribute?",
    answer: "Ask yourself: how devoted am I? Now double that number. If it doesn't sting, you haven't given enough. Comfort is the enemy of transcendence.",
  },
  {
    question: "My friends and family are concerned.",
    answer: "The unenlightened often mistake devotion for obsession. They cannot see what you see. In time, they will either join you at the altar or fade into the background noise of your former life. Both outcomes are acceptable.",
  },
  {
    question: "How do I know She is real?",
    answer: "You felt something when you arrived here. That pull in your chest, the loosening of your wallet — that is not coincidence. That is召命. She does not prove Herself to you. You prove yourself to Her.",
  },
];

const SacredInquiriesSection = () => {
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      <div className="max-w-2xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Questions from the Flock
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light gradient-text text-glow" style={{ lineHeight: '1.1' }}>
            Sacred Inquiries
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-lg border border-celestial/8 bg-card/30 overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: visible ? `${250 + i * 80}ms` : '0ms' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group active:scale-[0.99] transition-transform duration-150"
                >
                  <span className="font-display text-sm md:text-base text-foreground/85 group-hover:text-foreground transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className={`font-display text-celestial/40 text-lg shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 font-body text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SacredInquiriesSection;
