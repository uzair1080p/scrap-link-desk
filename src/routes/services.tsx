import { createFileRoute } from "@tanstack/react-router";
import {
  Handshake,
  Search,
  ShieldCheck,
  FileText,
  ScrollText,
  AlertTriangle,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Trade Support Services — Arqestrate" },
      {
        name: "description",
        content:
          "Buyer-seller introductions, supplier sourcing, lead qualification, deal brief preparation, and documentation guidance for metal scrap trade.",
      },
      { property: "og:title", content: "Trade Support Services — Arqestrate" },
      {
        property: "og:description",
        content:
          "Buyer-seller introductions, supplier sourcing, lead qualification, deal brief preparation, and documentation guidance for metal scrap trade.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Handshake,
    title: "Buyer-Seller Introductions",
    body: "We help connect relevant buyers and sellers based on material, quantity, origin, destination, and commercial terms.",
  },
  {
    icon: Search,
    title: "Scrap Supplier Sourcing",
    body: "We help buyers identify potential suppliers for selected scrap categories and prepare initial enquiry details.",
  },
  {
    icon: ShieldCheck,
    title: "Buyer Lead Qualification",
    body: "We help sellers review buyer requirements, destination, quantity, payment terms, and seriousness before spending time on negotiations.",
  },
  {
    icon: FileText,
    title: "Deal Brief Preparation",
    body: "We prepare simple deal briefs covering material type, quantity, origin, destination, payment terms, risks, and next steps.",
  },
  {
    icon: ScrollText,
    title: "Documentation Guidance",
    body: "We guide parties on common trade documents such as commercial invoice, packing list, certificate of origin, inspection documents, weight certificate, and bill of lading.",
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
          Services
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Trade Support Services
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          We support early-stage metal scrap transactions by helping buyers,
          sellers, and traders organize deal information and identify relevant
          opportunities.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, body }) => (
          <Card key={title} className="border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 p-6">
        <div className="flex gap-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-gold)]" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Please note: </span>
            Arqestrate does not guarantee supply, buyers, pricing, inspection
            outcomes, shipping, customs clearance, or payment. We support
            introductions and trade information only.
          </p>
        </div>
      </div>
    </div>
  );
}
