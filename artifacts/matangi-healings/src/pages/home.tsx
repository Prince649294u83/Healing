import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Award, Globe, Clock, Leaf } from "lucide-react";

const fadeUp = (reducedMotion: boolean) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
});

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reducedMotion = useReducedMotion() ?? false;
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion() ?? false;
  return (
    <motion.div variants={fadeUp(reducedMotion)} className={className}>
      {children}
    </motion.div>
  );
}

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
  {
    name: "Suresh Patel",
    location: "Bangalore",
    text: "Past Life Therapy with Dr. Anushka helped me understand a deep-seated fear I'd carried my whole life. The healing was profound and lasting. Highly recommended.",
    stars: 5,
  },
  {
    name: "Asha Nair",
    location: "Hyderabad",
    text: "I attended the Srividya Healing Class and it completely changed my spiritual practice. Dr. Anushka is a masterful teacher — deeply knowledgeable and compassionate.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "What types of healing services does Dr. Anushka offer?",
    a: "Dr. Anushka offers a comprehensive range of holistic services including Akashic Reading, Past Life Therapy, Reiki Healing, Tibetan Healing, Karmic Healing, Vastu Reading, and more. She also provides counselling for relationships, children, and stress management, along with Srividya Healing Classes.",
  },
  {
    q: "Are online healing sessions available?",
    a: "Yes, Dr. Anushka offers both in-person sessions at our Bangalore center and remote/online healing sessions for clients across India and worldwide. Energy healing transcends physical boundaries.",
  },
  {
    q: "How long does a typical healing session last?",
    a: "Session duration varies by service. Most healing sessions are 60–90 minutes. Counselling sessions are typically 45–60 minutes. Class schedules are provided upon enrollment.",
  },
  {
    q: "Is prior spiritual experience required to benefit from healing?",
    a: "Absolutely not. Dr. Anushka works with clients at all stages of their spiritual journey — from complete beginners to advanced practitioners. An open mind and willingness to heal are all that's needed.",
  },
  {
    q: "How do I book a session?",
    a: "You can book a session by contacting us through our contact form, emailing anushkaheals@gmail.com, or calling/WhatsApping +91 8151926422. We'll schedule at your convenience.",
  },
];

const stats = [
  { icon: Clock, value: "15+", label: "Years of Expertise" },
  { icon: Award, value: "2016", label: "Abdul Kalam Award" },
  { icon: Globe, value: "Pan India", label: "Reach & Beyond" },
  { icon: Leaf, value: "2005", label: "Established Since" },
];

const featuredServices = [
  {
    title: "Healing Services",
    description: "Akashic Reading, Past Life Therapy, Reiki, Tibetan & Karmic Healing for deep transformation.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    href: "/services",
  },
  {
    title: "Counselling",
    description: "Relationship, Children, Stress & Anxiety counselling with compassionate personalized guidance.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    href: "/services",
  },
  {
    title: "Srividya Classes",
    description: "Ancient healing wisdom — Srividya, Advanced Healing & Kriya Babaji classes for practitioners.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    href: "/services",
  },
];

function TestimonialsCarousel() {
  const reducedMotion = useReducedMotion() ?? false;
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
            <div key={i} className="flex-[0_0_100%] md:flex-[0_0_60%] px-4">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <Quote className="text-secondary mb-6" size={36} />
                <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={16} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={scrollPrev}
          data-testid="testimonial-prev"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              data-testid={`testimonial-dot-${i}`}
              className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? "bg-secondary w-6" : "bg-border"}`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          data-testid="testimonial-next"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
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
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            data-testid={`faq-btn-${i}`}
          >
            <span className="font-serif text-base font-medium text-foreground pr-4">{faq.q}</span>
            <span className={`text-secondary transition-transform flex-shrink-0 ${open === i ? "rotate-45" : ""}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Holistic Healing Center
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Where Ancient Wisdom
              <br />
              <em>Meets Modern Healing</em>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Dr. Anushka Manoharlal — Award-winning healer with 15+ years of transformative holistic healing expertise. Serving clients across India and the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-testid="hero-book-btn"
                className="bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-secondary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book a Healing Session
              </Link>
              <Link
                href="/services"
                data-testid="hero-services-btn"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: reducedMotion ? 0 : [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="1" width="14" height="22" rx="7" />
              <circle cx="8" cy="7" r="2" fill="currentColor" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <AnimatedItem>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?w=700&q=80"
                  alt="Healing session"
                  className="rounded-2xl w-full object-cover aspect-[4/5] shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-white rounded-2xl p-6 shadow-xl max-w-[180px]">
                  <p className="font-serif text-4xl font-bold">15+</p>
                  <p className="text-sm mt-1 text-white/90">Years of Healing Excellence</p>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/10 border border-primary/20" />
              </div>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection>
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">Welcome</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight mb-6">
                Healing That Transforms, <em>Lives That Flourish</em>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 15 years of expertise, Dr. Anushka Manoharlal leads a renowned global healing center specializing in transformative holistic services. Her unique approach bridges ancient wisdom traditions with modern healing techniques.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-muted-foreground leading-relaxed mb-8">
                She has been healing people across all age groups — from stress, anxiety, fear and depression to PCOS, financial challenges, and spiritual growth. The prestigious Abdul Kalam Award 2016 recognized her extraordinary work with elderly patients at Mother Teresa NGO, Chennai.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <Link
                href="/about"
                data-testid="welcome-about-btn"
                className="inline-flex items-center gap-2 text-primary font-medium border-b-2 border-secondary pb-0.5 hover:gap-4 transition-all"
              >
                Learn More About Dr. Anushka
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="text-secondary mx-auto mb-3" size={28} />
              <p className="font-serif text-2xl md:text-3xl font-medium text-white">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">What We Offer</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Pathways to <em>Complete Wellness</em>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <AnimatedItem key={i}>
                <Link href={service.href} data-testid={`service-card-${i}`}>
                  <div className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                    <div className="overflow-hidden aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="w-8 h-0.5 bg-secondary mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                      <span className="text-secondary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-3 transition-all">
                        Explore
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedSection>

          <div className="text-center mt-12">
            <Link
              href="/services"
              data-testid="all-services-btn"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center justify-center py-4 px-6 overflow-hidden">
        <div className="h-px bg-border flex-1 max-w-xs" />
        <svg className="mx-6 text-secondary/40" width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 2C15 10 6 13 6 20C6 27 12 34 20 38C28 34 34 27 34 20C34 13 25 10 20 2Z" opacity="0.5" />
          <circle cx="20" cy="20" r="4" />
        </svg>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">Testimonials</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Lives Transformed, <em>Stories Shared</em>
              </h2>
            </AnimatedItem>
          </AnimatedSection>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">FAQ</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Frequently Asked Questions
              </h2>
            </AnimatedItem>
          </AnimatedSection>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80')" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6">
                Begin Your Healing <em>Journey Today</em>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Take the first step toward balance, harmony, and inner peace. Sessions available in-person in Bangalore and online worldwide.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <Link
                href="/contact"
                data-testid="cta-contact-btn"
                className="inline-block bg-secondary text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-secondary/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Connect With Us
              </Link>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
