import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion, useInView } from "framer-motion";
import drAnushkaPhoto from "@assets/image_1776614460712.png";
import imgHeroAbout from "../assets/home/hero_about.jpg";
import { Award, Heart, Globe, Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = (reducedMotion: boolean) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
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

const awards = [
  {
    year: "2016",
    title: "Abdul Kalam Award",
    org: "National Recognition",
    description: "Awarded for exceptional healing work with elderly patients at the Mother Teresa NGO, Chennai — treating conditions including diabetes, arthritis, and breathing ailments.",
    icon: Award,
  },
  {
    year: "2019",
    title: "Global Healing Excellence Award",
    org: "International Holistic Health Council",
    description: "Recognized for outstanding contributions to alternative medicine and holistic healing practices with a global impact on patient well-being.",
    icon: Globe,
  },
  {
    year: "2021",
    title: "Best Spiritual Healer — South India",
    org: "Wellness & Spirituality Awards",
    description: "Honored as the leading spiritual healer in South India, recognized by peers and thousands of transformed clients across the region.",
    icon: Star,
  },
  {
    year: "2023",
    title: "Women in Healing Leadership Award",
    org: "Indian Alternative Medicine Foundation",
    description: "Celebrating Dr. Anushka's pioneering leadership in bringing ancient healing wisdom to modern seekers across generations and geographies.",
    icon: Heart,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    text: "Dr. Anushka's Akashic Reading completely transformed my understanding of my life's path. I came in with severe anxiety and left with clarity I'd never experienced before. Her intuitive gifts are extraordinary.",
    stars: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "After years of financial struggles, I tried Vastu Reading with Dr. Anushka. Within 3 months of implementing her guidance, my business turned around completely. I'm a believer now.",
    stars: 5,
  },
  {
    name: "Meenakshi Iyer",
    location: "Chennai",
    text: "My daughter was going through extreme stress during board exams. Dr. Anushka's Children Counselling sessions were a godsend. She has a rare gift of connecting with young minds.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "What is Dr. Anushka's healing philosophy?",
    a: "Dr. Anushka believes in addressing the root cause of any imbalance — physical, emotional, or spiritual — rather than just the symptoms. Her approach integrates ancient Vedic wisdom with modern healing modalities for lasting transformation.",
  },
  {
    q: "How did Dr. Anushka come to specialize in holistic healing?",
    a: "Dr. Anushka's calling emerged through years of dedicated study in ancient healing sciences, combined with a deep personal spiritual journey. Over 15 years, she has refined her practice to serve thousands across India and globally.",
  },
  {
    q: "What awards and recognitions has Dr. Anushka received?",
    a: "She received the prestigious Abdul Kalam Award 2016 for her healing work with elderly patients at Mother Teresa NGO, Chennai. She has since received multiple national and international recognitions for excellence in holistic and spiritual healing.",
  },
  {
    q: "Does Dr. Anushka conduct workshops or healing classes?",
    a: "Yes! Dr. Anushka conducts Srividya Healing Classes, Advanced Healing Classes, and Kriya Babaji Classes for those who wish to learn and carry forward the healing tradition.",
  },
];

function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-[0_0_100%] md:flex-[0_0_70%] px-4">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <Quote className="text-secondary mb-6" size={32} />
                <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8">
        <button onClick={scrollPrev} data-testid="about-testimonial-prev" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)} data-testid={`about-testimonial-dot-${i}`} className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? "bg-secondary w-6" : "bg-border"}`} />
          ))}
        </div>
        <button onClick={scrollNext} data-testid="about-testimonial-next" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors" onClick={() => setOpen(open === i ? null : i)} data-testid={`about-faq-btn-${i}`}>
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

export default function About() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgHeroAbout})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Story</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight mb-4">
              About Dr. Anushka
              <br />
              <em>Manoharlal</em>
            </h1>
            <p className="text-white/70 text-lg">A lifetime dedicated to healing, transformation, and awakening</p>
          </motion.div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <AnimatedItem>
              <div className="relative">
                <img
                  src={drAnushkaPhoto}
                  alt="Dr. Anushka Manoharlal"
                  className="rounded-2xl w-full object-cover aspect-[3/4] shadow-lg object-top"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
                <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl p-5 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Award className="text-secondary flex-shrink-0" size={28} />
                    <div>
                      <p className="font-serif text-sm font-medium text-foreground">Abdul Kalam Award</p>
                      <p className="text-xs text-muted-foreground">National Recognition 2016</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection>
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">Biography</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight mb-6">
                A Healer Chosen by <em>Purpose</em>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 15 years of expertise, Dr. Anushka Manoharlal leads a renowned global healing center that specializes in transformative holistic services. Her center, founded in 2005 in Bangalore, has grown into a beacon of healing for thousands across India and the world.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. M Anushka Manoharlal has been presented with the "Abdul Kalam Award 2016" for her extraordinary work in healing elderly patients at the Mother Teresa NGO in Chennai, addressing ailments such as diabetes, arthritis, and breathing problems.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-muted-foreground leading-relaxed mb-8">
                She has been healing people across all age groups suffering from Stress, Anxiety, Fear and Depression. Many have undergone treatments for Crystal ailments, PCOS, AHA and Childbirth. Healing services are also provided for financial and property related matters.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Established", value: "2005" },
                  { label: "Reach", value: "Pan India" },
                  { label: "Specialization", value: "Holistic Healing" },
                  { label: "Mode", value: "In-person & Online" },
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-serif font-medium text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">Purpose</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">Our Mission & Vision</h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-2 gap-8">
            <AnimatedItem>
              <div className="bg-background border border-border rounded-2xl p-8 md:p-10 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-primary" size={22} />
                </div>
                <div className="w-8 h-0.5 bg-secondary mb-6" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Mission</p>
                <h3 className="font-serif text-xl text-foreground mb-4">Empowering Transformative Healing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide top-notch holistic and spiritual healing services that empower individuals to find balance, harmony, and inner peace. Every person who walks through our doors deserves to experience the profound transformation that comes from genuine, expert healing.
                </p>
              </div>
            </AnimatedItem>
            <AnimatedItem>
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 h-full">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6">
                  <Globe className="text-secondary" size={22} />
                </div>
                <div className="w-8 h-0.5 bg-secondary mb-6" />
                <p className="text-xs text-primary-foreground/60 uppercase tracking-widest mb-2">Vision</p>
                <h3 className="font-serif text-xl text-white mb-4">Inspiring Well-being and Growth</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To be a leading global center for holistic healing, fostering emotional and spiritual growth for individuals seeking transformative change. We envision a world where ancient healing wisdom is accessible to all who seek it.
                </p>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">Recognition</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Awards & <em>Achievements</em>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4">
                A testament to decades of authentic healing work, compassionate service, and transformative impact.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <AnimatedItem key={i}>
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-all hover:-translate-y-0.5 group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <award.icon className="text-secondary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{award.year}</span>
                        <span className="text-xs text-muted-foreground">{award.org}</span>
                      </div>
                      <h3 className="font-serif text-lg text-foreground mb-2">{award.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">What They Say</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">Voices of Healing</h2>
            </AnimatedItem>
          </AnimatedSection>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">About Dr. Anushka — FAQ</h2>
            </AnimatedItem>
          </AnimatedSection>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Begin Your <em>Healing Journey?</em>
          </h2>
          <p className="text-primary-foreground/70 mb-10">Connect with Dr. Anushka and take the first step toward transformation.</p>
          <Link href="/contact" data-testid="about-cta-btn" className="inline-block bg-secondary text-white px-10 py-4 rounded-full font-medium hover:bg-secondary/90 transition-colors">
            Book a Session
          </Link>
        </div>
      </section>
    </div>
  );
}
