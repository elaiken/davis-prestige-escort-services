import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCTA } from "@/components/StickyCTA";

const deliverables = [
  "Route planning with local traffic coordination.",
  "Escort commanders and certified drivers.",
  "Real-time communication with funeral directors.",
  "Discreet traffic control for a respectful flow.",
];

export default function FuneralEscortPage() {
  return (
    <div className="min-h-screen bg-ink text-slate">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pb-24">
        <section className="space-y-6 pb-12 pt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            Funeral Escort Services
          </p>
          <h1 className="font-heading text-4xl uppercase tracking-[0.2em] md:text-5xl">
            Dignified Procession Support
          </h1>
          <p className="text-lg text-mist">
            We provide calm, coordinated processions with expert traffic
            management and a respectful, low-profile presence.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request"
              className="rounded-full border border-gold/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold"
            >
              Request Escort
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
              A precise plan with a dedicated escort commander, clear routing,
              and coordination with venues and family representatives.
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
              Escort Timeline
            </p>
            <p className="mt-4 text-3xl text-slate">60-90 Minutes</p>
            <p className="mt-3">
              Estimated for standard metro processions. Longer routes are
              planned in advance with direct communication.
            </p>
            <p className="mt-6 text-slate">
              Same-day availability offered on priority request.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <h2 className="font-heading text-2xl uppercase tracking-[0.15em]">
            Coverage & Coordination
          </h2>
          <p className="mt-4 text-sm text-mist">
            We operate across metro and regional corridors with location-based
            routing and on-site staging. All escorts are fully licensed and
            insured with privacy-first protocols.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request"
              className="rounded-full border border-gold/70 px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-gold"
            >
              Request Escort
            </Link>
            <Link
              href="/services/security"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-slate"
            >
              View Security Services
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
