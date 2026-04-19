import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, CheckCircle2, Shield, Clock, Heart, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = (reducedMotion: boolean) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(20, "Please share more detail about your needs (at least 20 characters)"),
});

type ContactForm = z.infer<typeof contactSchema>;

const whyUs = [
  {
    icon: Shield,
    title: "Confidential & Safe",
    description: "Every session is held in complete confidentiality. Your healing journey is sacred and private.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Sessions available on weekdays and weekends, in-person in Bangalore and online worldwide.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Dr. Anushka approaches every client with deep compassion, non-judgment, and genuine care.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Distance healing sessions serve clients across India, the Gulf, US, UK, Australia, and beyond.",
  },
];

const faqs = [
  {
    q: "How do I book a session?",
    a: "Fill out the contact form above or email anushkaheals@gmail.com or WhatsApp +91 8151926422. We will respond within 24 hours to schedule your session.",
  },
  {
    q: "What information should I share when reaching out?",
    a: "Share a brief description of what you're seeking healing for. Dr. Anushka will review this and recommend the most appropriate service and approach for your needs.",
  },
  {
    q: "Is there a consultation fee?",
    a: "Initial consultations to understand your needs are complimentary. Session fees vary by service type and duration. Details will be shared when you reach out.",
  },
  {
    q: "How long does it take to get a response?",
    a: "We strive to respond to all enquiries within 24 hours on working days. For urgent matters, please WhatsApp directly at +91 8151926422.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors" onClick={() => setOpen(open === i ? null : i)} data-testid={`contact-faq-btn-${i}`}>
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

export default function Contact() {
  const reducedMotion = useReducedMotion() ?? false;
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Dr. Anushka will respond within 24 hours.",
    });
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["Sangeeta Apartment, Malleswaram", "Bangalore, Karnataka", "India - 560003"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["anushkaheals@gmail.com"],
      href: "mailto:anushkaheals@gmail.com",
    },
    {
      icon: Phone,
      title: "Call / WhatsApp",
      lines: ["+91 8151926422"],
      href: "https://api.whatsapp.com/send?phone=918151926422&text=Hello!%20I%20would%20like%20to%20book%20a%20healing%20session.",
    },
  ];

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-4">Reach Out</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight mb-4">
              Get In <em>Touch</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Begin your healing journey with a conversation. Dr. Anushka is here to guide you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* FORM */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <AnimatedItem>
                <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">Send a Message</p>
              </AnimatedItem>
              <AnimatedItem>
                <h2 className="font-serif text-3xl font-light text-foreground mb-8">
                  Share Your <em>Healing Needs</em>
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                {submitted ? (
                  <div className="bg-card border border-border rounded-2xl p-12 text-center">
                    <CheckCircle2 className="text-secondary mx-auto mb-4" size={48} />
                    <h3 className="font-serif text-2xl text-foreground mb-2">Message Received</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. Dr. Anushka will respond to your enquiry within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="contact-form">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          {...register("name")}
                          data-testid="input-name"
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        />
                        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          data-testid="input-email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        />
                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="phone">Phone Number *</label>
                        <input
                          id="phone"
                          {...register("phone")}
                          data-testid="input-phone"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        />
                        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="subject">Subject *</label>
                        <input
                          id="subject"
                          {...register("subject")}
                          data-testid="input-subject"
                          placeholder="e.g. Akashic Reading enquiry"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        />
                        {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2" htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        {...register("message")}
                        data-testid="input-message"
                        placeholder="Tell us what brings you here and what you're seeking healing for..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                      />
                      {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                      className="w-full bg-secondary text-white py-4 rounded-full font-medium hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                    >
                      {isSubmitting ? "Sending your message..." : "Send Message"}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                )}
              </AnimatedItem>
            </AnimatedSection>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-2">
            <AnimatedSection className="space-y-6">
              <AnimatedItem>
                <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">Contact Info</p>
                <h2 className="font-serif text-2xl font-light text-foreground mb-8">Find Us</h2>
              </AnimatedItem>

              {contactInfo.map((info, i) => (
                <AnimatedItem key={i}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-sm transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-secondary" size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{info.title}</p>
                        {info.href ? (
                          <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                            {info.lines.map((line, j) => <span key={j} className="block">{line}</span>)}
                          </a>
                        ) : (
                          info.lines.map((line, j) => <p key={j} className="text-muted-foreground text-sm">{line}</p>)
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}

              <AnimatedItem>
                <div className="bg-primary text-primary-foreground rounded-2xl p-6">
                  <p className="font-serif text-lg mb-3">WhatsApp Us Directly</p>
                  <p className="text-primary-foreground/70 text-sm mb-5">For quick responses, connect with us on WhatsApp.</p>
                  <a
                    href="https://api.whatsapp.com/send?phone=918151926422&text=Hello!%20I%20would%20like%20to%20book%20a%20healing%20session."
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-whatsapp"
                    className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.14.563 4.148 1.548 5.886L.057 23.5l5.793-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.97 0-3.81-.532-5.395-1.463l-.387-.23-4.013 1.052 1.072-3.906-.254-.4A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Start WhatsApp Chat
                  </a>
                </div>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">Why Choose Us</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Healing With <em>Integrity & Excellence</em>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedItem key={i}>
                <div className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="font-serif text-base text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <AnimatedItem>
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-4">FAQ</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Questions About <em>Booking</em>
              </h2>
            </AnimatedItem>
          </AnimatedSection>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
