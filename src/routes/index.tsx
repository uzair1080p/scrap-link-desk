import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe2,
  Network,
  FileCheck2,
  ArrowRight,
  ClipboardList,
  Search,
  Handshake,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arqestrate | Metal Scrap Brokerage & Trade Support" },
      {
        name: "description",
        content:
          "Connecting metal scrap buyers and sellers across global markets. Buyer-seller introductions, lead qualification, and documentation guidance.",
      },
      {
        property: "og:title",
        content: "Arqestrate | Metal Scrap Brokerage & Trade Support",
      },
      {
        property: "og:description",
        content:
          "Connecting metal scrap buyers and sellers across global markets. Buyer-seller introductions, lead qualification, and documentation guidance.",
      },
    ],
  }),
  component: Home,
});

const trustCards = [
  {
    icon: Globe2,
    title: "Global buyer-seller sourcing",
    body: "We work across regions to surface relevant counterparties for your enquiry.",
  },
  {
    icon: Network,
    title: "Dubai-linked trade network",
    body: "Active connections across Gulf, South Asia, and international scrap markets.",
  },
  {
    icon: FileCheck2,
    title: "Documentation-led qualification",
    body: "Material details, terms, and documents are reviewed before introductions.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Share your requirement",
    body: "Tell us your buying requirement or available supply.",
  },
  {
    icon: Search,
    title: "We review the details",
    body: "Material, quantity, origin, destination, and commercial terms.",
  },
  {
    icon: Handshake,
    title: "We match the opportunity",
    body: "Relevant buyers or sellers are identified from our network.",
  },
  {
    icon: Users,
    title: "Direct introduction",
    body: "Serious parties are introduced for direct commercial discussion.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 10%, oklch(0.32 0.06 240 / 0.45), transparent 60%), radial-gradient(50% 40% at 90% 20%, oklch(0.78 0.12 85 / 0.10), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
              Metal Scrap Brokerage & Trade Support
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Connecting Metal Scrap Buyers and Sellers Across{" "}
              <span className="text-[var(--color-gold)]">Global Markets</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Arqestrate supports metal scrap traders, exporters, importers,
              and industrial buyers with buyer-seller introductions, lead
              qualification, and trade documentation guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[var(--color-gold)] text-[var(--color-gold-foreground)] hover:bg-[var(--color-gold)]/90"
                >
                  Send Enquiry <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/materials">
                <Button size="lg" variant="outline" className="border-border">
                  View Materials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust cards */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {trustCards.map(({ icon: Icon, title, body }) => (
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
      </section>

      {/* About */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
              About Arqestrate
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A focused trade support desk for metal scrap.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Arqestrate is a brokerage and trade support desk focused on metal
            scrap opportunities. We help market participants organize
            requirements, review supply details, and connect serious buyers
            and sellers for direct commercial discussion.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            A simple, structured path from enquiry to introduction.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-lg border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-[var(--color-gold)]/80">
                  0{i + 1}
                </span>
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-secondary p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                Have a buying requirement or available supply?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Share the details — we'll review and respond.
              </p>
            </div>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[var(--color-gold)] text-[var(--color-gold-foreground)] hover:bg-[var(--color-gold)]/90"
              >
                Send Enquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
