import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCTA } from "@/components/StickyCTA";

const deliverables = [
  "Uniformed or plain-clothes options by request.",
  "Venue access control and perimeter oversight.",
  "Family escort and discreet transport monitoring.",
  "Incident prevention with calm, visible authority.",
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-ink text-slate">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pb-24">
        <section className="space-y-6 pb-12 pt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-slate">
            Professional Security Services
          </p>
          <h1 className="font-heading text-4xl uppercase tracking-[0.2em] md:text-5xl">
            Calm, Professional Presence
          </h1>
          <p className="text-lg text-mist">
            We provide respectful security coverage for services, venues, and
            private family gatherings with minimal disruption.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request"
              className="rounded-full border border-gold/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold"
            >
              Request Security
            </Link>
            <a
              href="tel:+18005551234"
              className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate"
            >
              Call 24/7
            </a>
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl uppercase tracking-[0.15em]">
              What We Deliver
            </h2>
            <p className="text-sm text-mist">
              Professional security professionals aligned with your service
              preferences, working in coordination with funeral directors.
            </p>
            <ul className="space-y-3 text-sm text-mist">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-charcoal/70 p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-charcoal/80 p-6 text-sm text-mist">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Staffing Window
            </p>
            <p className="mt-4 text-3xl text-slate">2-8 Hours</p>
            <p className="mt-3">
              Scaled coverage by venue, schedule, and expected attendance.
            </p>
            <p className="mt-6 text-slate">
              Urgent requests prioritized within 30 minutes.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <h2 className="font-heading text-2xl uppercase tracking-[0.15em]">
            Discretion & Privacy
          </h2>
          <p className="mt-4 text-sm text-mist">
            We respect confidentiality at every stage, with clear boundaries,
            minimal visibility, and strict privacy practices.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request"
              className="rounded-full border border-gold/70 px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-gold"
            >
              Request Security
            </Link>
            <Link
              href="/services/vehicle-rentals"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-slate"
            >
              View Vehicle Rentals
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
