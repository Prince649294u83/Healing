import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Sparkles, Heart, BookOpen, ChevronRight } from "lucide-react";

import imgAkashic from "../assets/services/akashic_reading_1776618231728.png";
import imgPastLife from "../assets/services/past_life_1776618287281.png";
import imgVastu from "../assets/services/vastu_reading_1776618306406.png";
import imgBlackMagic from "../assets/services/black_magic_removal_1776618321162.png";
import imgReiki from "../assets/services/reiki_healing_1776618336255.png";
import imgTibetan from "../assets/services/tibetan_healing_1776618352968.png";
import imgKarmic from "../assets/services/karmic_healing.jpg";
import imgRelCounselling from "../assets/services/relationship_counselling.png";
import imgChildCounselling from "../assets/services/children_counselling.jpg";
import imgStressCounselling from "../assets/services/stress_counselling.jpg";
import imgTherapy from "../assets/services/therapy_sessions.jpg";
import imgSrividya from "../assets/services/srividya_class.jpg";
import imgAdvance from "../assets/services/advance_healing.jpg";
import imgKriya from "../assets/services/kriya_babaji.jpg";
import imgServicesHero from "../assets/services/services_hero.jpg";

const fadeUp = (reducedMotion: boolean) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}
function AnimatedItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion() ?? false;
  return <motion.div variants={fadeUp(reducedMotion)} className={className}>{children}</motion.div>;
}

const healingServices = [
  {
    title: "Akashic Reading",
    description: "Access the Akashic Records — the cosmic library of your soul's journey — to gain profound clarity on your life's purpose, recurring patterns, and karmic lessons.",
    image: imgAkashic,
  },
  {
    title: "Past Life Therapy",
    description: "Explore previous lifetimes to understand deep-seated fears, relationships, and patterns that shape your current existence. Experience liberation through understanding.",
    image: imgPastLife,
  },
  {
    title: "Vastu Reading",
    description: "Harmonize your living and working spaces with ancient Vastu Shastra principles. Transform your environment to support health, prosperity, and relationships.",
    image: imgVastu,
  },
  {
    title: "Black Magic Removal",
    description: "Identify, cleanse, and remove negative energies, curses, or psychic attacks with powerful ancient protection rituals. Restore your aura and life force.",
    image: imgBlackMagic,
  },
  {
    title: "Reiki Healing",
    description: "Channel universal life force energy to promote deep relaxation, accelerate natural healing, and restore balance across your physical and energetic bodies.",
    image: imgReiki,
  },
  {
    title: "Tibetan Healing",
    description: "Ancient Tibetan healing techniques using singing bowls, mantras, and energy work to bring harmony to mind, body, and spirit through resonance and vibration.",
    image: imgTibetan,
  },
  {
    title: "Karmic Healing",
    description: "Identify and resolve karmic debts, ancestral patterns, and soul contracts that may be limiting your current life. Create a lighter, freer path forward.",
    image: imgKarmic,
  },
];

const counsellingServices = [
  {
    title: "Relationship Counselling",
    description: "Navigate relationship challenges with compassionate, energy-aware guidance that addresses both the emotional and spiritual dimensions of your connections.",
    image: imgRelCounselling,
  },
  {
    title: "Children Counselling",
    description: "Gentle, effective support for children facing stress, anxiety, behavioral challenges, or learning difficulties — using holistic, child-friendly approaches.",
    image: imgChildCounselling,
  },
  {
    title: "Stress & Anxiety Counselling",
    description: "Holistic strategies combining energy healing, mindfulness, and counselling to address the root causes of stress and anxiety for lasting relief.",
    image: imgStressCounselling,
  },
  {
    title: "Therapy Sessions",
    description: "Personalized therapeutic sessions integrating multiple healing modalities to support your unique healing journey — body, mind, and spirit.",
    image: imgTherapy,
  },
];

const srividyaServices = [
  {
    title: "Srividya Healing Class",
    description: "Learn the profound ancient science of Srividya — a sacred path of healing and spiritual awakening that empowers you to become a channel of divine healing energy.",
    image: imgSrividya,
  },
  {
    title: "Advance Healing Classes",
    description: "For established practitioners ready to deepen their mastery. Advanced techniques, deeper dimensions of energy work, and specialized healing applications.",
    image: imgAdvance,
  },
  {
    title: "Kriya Babaji Class",
    description: "Learn the sacred Kriya yoga techniques as taught in the lineage of Mahavatar Babaji — powerful practices for spiritual evolution and healing others.",
    image: imgKriya,
  },
];

const faqs = [
  {
    q: "How do I know which service is right for me?",
    a: "Dr. Anushka offers a brief initial consultation to understand your situation and recommend the most appropriate service. You can reach out via our contact form or call/WhatsApp to discuss your needs.",
  },
  {
    q: "Can I combine multiple healing services?",
    a: "Yes, many clients benefit from a combination of services tailored to their specific needs. Dr. Anushka creates personalized healing plans that may integrate multiple modalities for the best outcomes.",
  },
  {
    q: "Are the Srividya and healing classes open to beginners?",
    a: "The foundational Srividya Healing Class is open to sincere beginners with no prior experience. Advanced classes are available for those who have completed the foundational course.",
  },
  {
    q: "Do you offer online counselling and healing sessions?",
    a: "Yes, all services including healing sessions, counselling, and consultations are available online for clients across India and worldwide. Energy healing is equally effective in-person and remotely.",
  },
  {
    q: "What should I expect after a healing session?",
    a: "Many clients experience a sense of deep peace, clarity, and lightness after their first session. Some experiences shift gradually over days or weeks as the healing integrates. Each journey is unique.",
  },
];

function ServiceCard({ title, description, image, index }: { title: string; description: string; image: string; index: number }) {
  return (
    <AnimatedItem>
      <div
        className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group h-full flex flex-col"
        data-testid={`service-card-${index}`}
      >
        <div className="overflow-hidden aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="w-8 h-0.5 bg-secondary mb-4" />
          <h3 className="font-serif text-lg text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{description}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:gap-4 transition-all border-b border-secondary/30 pb-0.5 w-fit"
            data-testid={`enquire-btn-${index}`}
          >
            Enquire Now <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </AnimatedItem>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors" onClick={() => setOpen(open === i ? null : i)} data-testid={`services-faq-btn-${i}`}>
            <span className="font-serif text-base font-medium text-foreground pr-4">{faq.q}</span>
            <span className={`text-secondary transition-transform flex-shrink-0 ${open === i ? "rotate-45" : ""}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const reducedMotion = useReducedMotion() ?? false;

  const sections = [
    {
      id: "healing",
      icon: Sparkles,
      label: "Healing Services",
      tagline: "Ancient therapeutic arts for deep transformation",
      description: "Therapeutic solutions promoting physical, emotional, and spiritual well-being through holistic methods, natural remedies, and personalized care.",
      services: healingServices,
      bgClass: "bg-background",
    },
    {
      id: "counselling",
      icon: Heart,
      label: "Counselling",
      tagline: "Compassionate guidance for life's challenges",
      description: "Holistic and energy-based therapies offering mental, emotional, and spiritual healing through personalized guidance, ancient sciences, and conscious practices.",
      services: counsellingServices,
      bgClass: "bg-card",
    },
    {
      id: "classes",
      icon: BookOpen,
      label: "Srividya Healing Classes",
      tagline: "Ancient wisdom for the modern healer",
      description: "Sacred healing traditions passed down through lineage — learn to become a vessel of healing energy and carry this wisdom forward.",
      services: srividyaServices,
      bgClass: "bg-background",
    },
  ];

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgServicesHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-4">Healing Pathways</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight mb-4">
              Our <em>Services</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              A comprehensive range of healing modalities for your complete well-being — body, mind, and spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NAVIGATION TABS */}
      <div className="sticky top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 flex gap-0 overflow-x-auto">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-2 px-5 py-4 text-sm font-medium text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-secondary transition-all whitespace-nowrap"
            >
              <section.icon size={16} />
              {section.label}
            </a>
          ))}
        </div>
      </div>

      {/* SERVICE SECTIONS */}
      {sections.map((section, si) => (
        <section key={section.id} id={section.id} className={`py-24 md:py-32 px-6 ${section.bgClass}`}>
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="mb-16">
              <AnimatedItem>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <section.icon className="text-secondary" size={20} />
                  </div>
                  <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">{section.label}</p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4 max-w-lg">
                  {section.tagline}
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-muted-foreground max-w-2xl">{section.description}</p>
              </AnimatedItem>
            </AnimatedSection>

            <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.services.map((service, i) => (
                <ServiceCard
                  key={i}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  index={si * 10 + i}
                />
              ))}
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">FAQ</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Questions About Our <em>Services</em>
              </h2>
            </AnimatedItem>
          </AnimatedSection>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${imgTherapy})` }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
                Not Sure Where to <em>Start?</em>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-muted-foreground mb-10 text-lg">
                Reach out and Dr. Anushka will guide you to the perfect healing path for your unique needs.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <Link href="/contact" data-testid="services-cta-btn" className="inline-block bg-secondary text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-secondary/90 transition-all hover:shadow-xl hover:-translate-y-0.5">
                Connect With Us
              </Link>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
