import { createFileRoute } from "@tanstack/react-router";
import { Layers, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Materials We Cover — Arqestrate" },
      {
        name: "description",
        content:
          "Common ferrous and non-ferrous metal scrap categories: HMS 1 & 2, Cast Iron, Shredded Steel, Aluminium, Copper, Stainless Steel, Brass, and more.",
      },
      { property: "og:title", content: "Materials We Cover — Arqestrate" },
      {
        property: "og:description",
        content:
          "Common ferrous and non-ferrous metal scrap categories supported by Arqestrate's brokerage desk.",
      },
    ],
  }),
  component: Materials,
});

const materials = [
  "HMS 1 & 2",
  "Cast Iron Scrap",
  "Shredded Steel Scrap",
  "Aluminium Scrap",
  "Copper Wire Scrap",
  "Stainless Steel Scrap",
  "Brass Scrap",
  "Used Rails",
  "Mixed Ferrous Scrap",
  "Mixed Non-Ferrous Scrap",
];

function Materials() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
          Materials
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Materials We Cover
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          We focus on common ferrous and non-ferrous metal scrap categories.
          All opportunities are subject to verification, documentation,
          inspection, and applicable trade regulations.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((m) => (
          <Card
            key={m}
            className="border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Layers className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{m}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Subject to quantity, origin, specification, and inspection.
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-destructive/40 bg-destructive/10 p-6">
        <div className="flex gap-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Materials we do not handle
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We do not handle restricted, hazardous, radioactive, or
              non-compliant materials. Sellers must provide accurate material
              details, origin, photos/videos, loading port, and available
              documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
