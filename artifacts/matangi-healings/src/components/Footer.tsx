import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24 border-t-4 border-secondary">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-secondary"
            >
              <path d="M12 2C8 6 4 9 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9 16 6 12 2Z" />
              <path d="M12 22C12 18 10 15 8 14" />
              <path d="M12 22C12 18 14 15 16 14" />
            </svg>
            <span className="font-serif text-xl font-medium tracking-wide">
              Matangi Healings
            </span>
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            A globally recognized center for transformative spiritual and holistic
            healing by Dr. Anushka Manoharlal, established in 2005.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                About Dr. Anushka
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-white">Services</h4>
          <ul className="space-y-4">
            <li className="text-primary-foreground/70 text-sm">Akashic Reading</li>
            <li className="text-primary-foreground/70 text-sm">Past Life Therapy</li>
            <li className="text-primary-foreground/70 text-sm">Relationship Counselling</li>
            <li className="text-primary-foreground/70 text-sm">Srividya Healing Classes</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-white">Contact</h4>
          <address className="not-italic text-sm text-primary-foreground/70 space-y-4">
            <p>Sangeeta Apartment, Malleswaram<br />Bangalore, Karnataka<br />India - 560003</p>
            <p>
              <a href="mailto:anushkaheals@gmail.com" className="hover:text-secondary transition-colors">
                anushkaheals@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+918151926422" className="hover:text-secondary transition-colors">
                WhatsApp: +91 8151926422
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
        <p>&copy; {new Date().getFullYear()} Matangi Healings. All rights reserved.</p>
      </div>
    </footer>
  );
}
