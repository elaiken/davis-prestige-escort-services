import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCTA } from "@/components/StickyCTA";

const fleet = [
  {
    title: "Executive Hearse",
    detail: "Cathedral finish, discreet lighting, full-length capacity.",
    image: "/fleet-hearse.svg",
    alt: "Executive hearse profile illustration",
  },
  {
    title: "Prestige Limo",
    detail: "Family transport seating, privacy glass, calm interior lighting.",
    image: "/fleet-limo.svg",
    alt: "Prestige limo profile illustration",
  },
  {
    title: "Procession Support SUV",
    detail: "Escort command, radio suite, and safety equipment.",
    image: "/fleet-suv.svg",
    alt: "Procession support SUV profile illustration",
  },
];

export default function VehicleRentalsPage() {
  return (
    <div className="min-h-screen bg-ink text-slate">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pb-24">
        <section className="space-y-6 pb-12 pt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            Hearse & Luxury Limo Rentals
          </p>
          <h1 className="font-heading text-4xl uppercase tracking-[0.2em] md:text-5xl">
            Premium Fleet, Tastefully Presented
          </h1>
          <p className="text-lg text-mist">
            Immaculate vehicles with professional chauffeurs, designed for
            dignified family transport and procession support.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request"
              className="rounded-full border border-gold/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold"
            >
              Book Vehicle
            </Link>
            <a
              href="tel:+18005551234"
              className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate"
            >
              Call 24/7
            </a>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <h2 className="font-heading text-2xl uppercase tracking-[0.15em]">
            Fleet Catalog
          </h2>
          <p className="mt-4 text-sm text-mist">
            Interior and exterior documentation, capacity details, and use
            cases are supplied with every booking.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {fleet.map((vehicle) => (
              <div
                key={vehicle.title}
                className="rounded-3xl border border-white/10 bg-charcoal/80 p-6"
              >
                <Image
                  src={vehicle.image}
                  alt={vehicle.alt}
                  width={720}
                  height={480}
                  className="h-40 w-full rounded-2xl border border-white/10 object-cover"
                />
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-slate">
                  {vehicle.title}
                </p>
                <p className="mt-3 text-sm text-mist">{vehicle.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <h2 className="font-heading text-2xl uppercase tracking-[0.15em]">
            Usage Scenarios
          </h2>
          <div className="mt-6 grid gap-4 text-sm text-mist sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4">
              Family and clergy transport with private entry.
            </div>
            <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4">
              Procession support and coordinated staging.
            </div>
            <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4">
              Multi-vehicle escort and security coordination.
            </div>
            <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4">
              Long-distance transfer and overnight readiness.
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request"
              className="rounded-full border border-gold/70 px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-gold"
            >
              Book Vehicle
            </Link>
            <Link
              href="/services/funeral-escort"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-slate"
            >
              View Escort Services
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
