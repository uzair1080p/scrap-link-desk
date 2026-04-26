import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Submit a Buyer or Seller Enquiry — Arqestrate" },
      {
        name: "description",
        content:
          "Share your metal scrap buying requirement or available supply. Contact Arqestrate via enquiry form, email, or WhatsApp.",
      },
      {
        property: "og:title",
        content: "Submit a Buyer or Seller Enquiry — Arqestrate",
      },
      {
        property: "og:description",
        content:
          "Share your metal scrap buying requirement or available supply. Contact Arqestrate via enquiry form, email, or WhatsApp.",
      },
    ],
  }),
  component: Contact,
});

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  material: string;
  quantity: string;
  origin: string;
  destination: string;
  incoterm: string;
  payment: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  role: "",
  material: "",
  quantity: "",
  origin: "",
  destination: "",
  incoterm: "",
  payment: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState<FormState>(initial);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name || "Website Visitor"}${form.company ? " — " + form.company : ""}`;
    const lines = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `WhatsApp / Phone: ${form.phone}`,
      `Country: ${form.country}`,
      `I am a: ${form.role}`,
      ``,
      `Material Type: ${form.material}`,
      `Quantity: ${form.quantity}`,
      `Origin Country: ${form.origin}`,
      `Destination Country / Port: ${form.destination}`,
      `Preferred Incoterm: ${form.incoterm}`,
      `Payment Terms: ${form.payment}`,
      ``,
      `Message:`,
      form.message,
    ];
    const body = lines.join("\n");
    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Submit a Buyer or Seller Enquiry
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Share your requirement or available supply and our team will review
          the details before responding.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Form */}
        <Card className="border-border bg-card p-6 sm:p-8">
          <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" required>
              <Input value={form.name} onChange={(e) => update("name", e.target.value)} required />
            </Field>
            <Field label="Company">
              <Input value={form.company} onChange={(e) => update("company", e.target.value)} />
            </Field>
            <Field label="Email" required>
              <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required />
            </Field>
            <Field label="WhatsApp / Phone">
              <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </Field>
            <Field label="Country">
              <Input value={form.country} onChange={(e) => update("country", e.target.value)} />
            </Field>
            <Field label="I am a">
              <Select value={form.role} onValueChange={(v) => update("role", v)}>
                <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Buyer">Buyer</SelectItem>
                  <SelectItem value="Seller">Seller</SelectItem>
                  <SelectItem value="Trader">Trader</SelectItem>
                  <SelectItem value="Broker">Broker</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Material Type">
              <Input placeholder="e.g. HMS 1 & 2, Copper Wire" value={form.material} onChange={(e) => update("material", e.target.value)} />
            </Field>
            <Field label="Quantity">
              <Input placeholder="e.g. 500 MT / month" value={form.quantity} onChange={(e) => update("quantity", e.target.value)} />
            </Field>
            <Field label="Origin Country">
              <Input value={form.origin} onChange={(e) => update("origin", e.target.value)} />
            </Field>
            <Field label="Destination Country / Port">
              <Input value={form.destination} onChange={(e) => update("destination", e.target.value)} />
            </Field>
            <Field label="Preferred Incoterm">
              <Select value={form.incoterm} onValueChange={(v) => update("incoterm", v)}>
                <SelectTrigger><SelectValue placeholder="Select incoterm" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="FOB">FOB</SelectItem>
                  <SelectItem value="CFR">CFR</SelectItem>
                  <SelectItem value="CIF">CIF</SelectItem>
                  <SelectItem value="Ex-Works">Ex-Works</SelectItem>
                  <SelectItem value="Not sure">Not sure</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Payment Terms">
              <Input placeholder="e.g. LC at sight, TT advance" value={form.payment} onChange={(e) => update("payment", e.target.value)} />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Message">
                <Textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Any additional details..." />
              </Field>
            </div>
            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-muted-foreground">
                Submitting opens your email client with your enquiry pre-filled to {siteConfig.email}.
              </p>
              <Button
                type="submit"
                size="lg"
                className="bg-[var(--color-gold)] text-[var(--color-gold-foreground)] hover:bg-[var(--color-gold)]/90"
              >
                <Send className="mr-2 h-4 w-4" /> Send Enquiry
              </Button>
            </div>
          </form>
        </Card>

        {/* Sidebar */}
        <div className="space-y-5">
          <Card className="border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              Direct contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 hover:text-foreground">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground/70">Email</span>
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 hover:text-foreground"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground/70">WhatsApp</span>
                    {siteConfig.whatsappDisplay}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground/70">Locations</span>
                  {siteConfig.locations.join(" / ")}
                </span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[oklch(0.62_0.16_150)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[oklch(0.55_0.16_150)]"
            >
              <MessageCircle className="h-4 w-4" />
              Contact on WhatsApp
            </a>
          </Card>

          <Card className="border-border bg-card/60 p-6">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Arqestrate provides brokerage support and trade information only.
              All transactions, inspections, payments, shipping, customs, and
              compliance obligations remain the responsibility of the
              contracting parties.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm text-foreground">
        {label}
        {required && <span className="ml-1 text-[var(--color-gold)]">*</span>}
      </Label>
      {children}
    </div>
  );
}
