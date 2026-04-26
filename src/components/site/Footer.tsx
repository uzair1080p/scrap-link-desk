import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[var(--color-gold)]" />
              <span className="text-base font-semibold text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp:{" "}
                {siteConfig.whatsappDisplay}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {siteConfig.locations.join(" / ")}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/materials" className="hover:text-foreground">Materials</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Submit a buyer or seller enquiry and our team will review the
              details before responding.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block text-sm font-medium text-[var(--color-gold)] hover:underline"
            >
              Send Enquiry →
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground/80">Disclaimer:</span>{" "}
            {siteConfig.disclaimer}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
