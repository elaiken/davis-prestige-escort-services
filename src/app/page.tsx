import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCTA } from "@/components/StickyCTA";

const services = [
  {
    title: "Funeral Escort Services",
    detail:
      "Dignified procession coordination with route control, safety planning, and discreet traffic management.",
    cta: "Request Escort",
    href: "/services/funeral-escort",
    accent: "border-gold/50 text-gold",
  },
  {
    title: "Professional Security Services",
    detail:
      "Calm, professional presence for services, venues, and family transport without disruption.",
    cta: "Request Security",
    href: "/services/security",
    accent: "border-white/20 text-slate",
  },
  {
    title: "Hearse & Luxury Limo Rentals",
    detail:
      "Premium vehicles with chauffeurs, immaculate presentation, and precision scheduling.",
    cta: "Book Vehicle",
    href: "/services/vehicle-rentals",
    accent: "border-navy/60 text-slate",
  },
];

const trustSignals = [
  "Licensed, bonded, and insured operations",
  "Discretion and privacy guarantees",
  "Established professional affiliations",
  "Dedicated escort commanders on every route",
  "Coverage across metro and regional corridors",
];

const fleetHighlights = [
  {
    title: "Executive Hearse",
    detail: "Full-length capacity, cathedral finish interior, discreet lighting.",
  },
  {
    title: "Prestige Limo",
    detail: "Seating for family transport, private entry, climate control.",
  },
  {
    title: "Procession Support SUV",
    detail: "Escort command, safety equipment, and communications suite.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-slate">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pb-24">
        <section className="flex flex-col gap-8 pb-16 pt-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-mist">
              Luxury, Authority, Respect
            </p>
            <h1 className="font-heading text-4xl uppercase tracking-[0.2em] md:text-6xl">
              Davis Prestige Escort Services
            </h1>
            <p className="text-lg text-mist">
              We ensure safe, dignified procession support during life&apos;s
              most serious moments. Professional presence without disruption.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request"
                className="rounded-full border border-gold/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:border-gold hover:text-slate"
              >
                Request Service
              </Link>
              <a
                href="tel:+18005551234"
                className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate transition hover:border-white/40"
              >
                Call 24/7
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-charcoal/80 p-6 text-sm text-mist md:w-[320px]">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-slate">
              Response Window
            </p>
            <p className="mt-4 text-3xl text-slate">30 Minutes</p>
            <p className="mt-2">
              Same-day escort or security dispatch available for urgent
              requests.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="font-heading text-3xl uppercase tracking-[0.15em]">
                Services, Clearly Segmented
              </h2>
              <p className="text-mist">
                Select the exact support you need without scrolling or
                ambiguity. Each service is delivered by specialized teams and
                dedicated equipment.
              </p>
            </div>
            <Link
              href="/request"
              className="text-xs uppercase tracking-[0.3em] text-gold hover:text-slate"
            >
              Unified Request Intake
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-charcoal/80 p-6"
              >
                <p
                  className={`text-xs uppercase tracking-[0.3em] ${service.accent}`}
                >
                  {service.title}
                </p>
                <p className="mt-4 text-sm text-mist">{service.detail}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate transition hover:border-gold/70 hover:text-gold"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl uppercase tracking-[0.15em]">
                Smart Request System
              </h2>
              <p className="text-mist">
                Built for 2027+ expectations with structured intake, AI-assisted
                summaries, and automated routing. Tell us what you need and we
                will translate it into a precise operations plan.
              </p>
              <div className="grid gap-4 text-sm text-mist sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4">
                  Service selection, urgency, and on-scene contacts.
                </div>
                <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4">
                  Date/time picker with estimated duration.
                </div>
                <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4">
                  Location-aware routing and coverage confirmation.
                </div>
                <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4">
                  AI-assisted request intake for clarity and speed.
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-charcoal/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-mist">
                Quick Request
              </p>
              <p className="mt-4 text-sm text-mist">
                Submit a structured request in under 60 seconds.
              </p>
              <Link
                href="/request"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-gold/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:border-gold hover:text-slate"
              >
                Start Request
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <h2 className="font-heading text-3xl uppercase tracking-[0.15em]">
            Trust Signals That Matter
          </h2>
          <div className="mt-8 grid gap-4 text-sm text-mist sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-2xl border border-white/10 bg-charcoal/70 p-4"
              >
                {signal}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="font-heading text-3xl uppercase tracking-[0.15em]">
                Fleet Showcase
              </h2>
              <p className="text-mist">
                Tasteful presentation with interior and exterior documentation.
                Capacity details and use cases are provided with every vehicle.
              </p>
            </div>
            <Link
              href="/services/vehicle-rentals"
              className="text-xs uppercase tracking-[0.3em] text-gold hover:text-slate"
            >
              View Fleet Details
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {fleetHighlights.map((vehicle) => (
              <div
                key={vehicle.title}
                className="rounded-3xl border border-white/10 bg-charcoal/80 p-6"
              >
                <div className="h-40 rounded-2xl border border-white/10 bg-navy/70"></div>
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-slate">
                  {vehicle.title}
                </p>
                <p className="mt-3 text-sm text-mist">{vehicle.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl uppercase tracking-[0.15em]">
                Coverage Intelligence
              </h2>
              <p className="text-mist">
                We auto-detect location to confirm availability and optimize the
                route in real time.
              </p>
              <div className="rounded-3xl border border-white/10 bg-charcoal/80 p-6 text-sm text-mist">
                <p className="text-xs uppercase tracking-[0.3em] text-slate">
                  Coverage Map
                </p>
                <div className="mt-4 h-52 rounded-2xl border border-white/10 bg-navy/70"></div>
                <p className="mt-4">
                  Primary service corridors include metro, suburban, and
                  regional routes.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-charcoal/80 p-6 text-sm text-mist">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                Where We Operate
              </p>
              <ul className="mt-4 space-y-3">
                <li>Greater Metro Region</li>
                <li>Regional Cathedral Districts</li>
                <li>Interstate Transfer Corridors</li>
                <li>Private estate venues</li>
              </ul>
              <p className="mt-6 text-slate">
                Requesting outside coverage? We coordinate extended routing on
                demand.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl uppercase tracking-[0.15em]">
                Accessibility & Compliance
              </h2>
              <p className="text-mist">
                Designed for screen readers, high-contrast viewing, and large
                text options. Simple-language alternatives are available upon
                request.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                <button className="rounded-full border border-white/15 px-4 py-2 text-mist">
                  High Contrast
                </button>
                <button className="rounded-full border border-white/15 px-4 py-2 text-mist">
                  Large Text
                </button>
                <button className="rounded-full border border-white/15 px-4 py-2 text-mist">
                  Simple Language
                </button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-charcoal/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-mist">
                Emergency Contact
              </p>
              <p className="mt-4 text-3xl text-slate">(800) 555-1234</p>
              <p className="mt-3 text-sm text-mist">
                24/7 hotline with SMS and WhatsApp routing. Typical response
                time: under 30 minutes.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+18005551234"
                  className="rounded-full border border-gold/70 px-5 py-3 text-center text-xs uppercase tracking-[0.3em] text-gold"
                >
                  Call Hotline
                </a>
                <a
                  href="sms:+18005551234"
                  className="rounded-full border border-white/15 px-5 py-3 text-center text-xs uppercase tracking-[0.3em] text-slate"
                >
                  Text Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
