import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCTA } from "@/components/StickyCTA";

const founder = {
  name: "Founder Name (Placeholder)",
  title: "Founder & Managing Director",
  summary:
    "Raised with a strong sense of duty and community service, our founder built Davis Prestige on the belief that funeral logistics should be handled with care, discretion, and precision. Their early years emphasized respect for families in transition, shaping a calm, disciplined approach to security and transportation. Today, that same commitment guides every escort route, every vehicle presentation, and every client relationship.",
};

const team = [
  {
    name: "Lead Escort Coordinator (Placeholder)",
    role: "Procession Operations",
    bio: "Oversees route planning, traffic coordination, and on-site staging for dignified processions.",
  },
  {
    name: "Security Supervisor (Placeholder)",
    role: "Venue Security",
    bio: "Ensures calm, professional coverage for services, venues, and private gatherings.",
  },
  {
    name: "Fleet Manager (Placeholder)",
    role: "Vehicle Operations",
    bio: "Maintains fleet presentation, driver scheduling, and readiness across all routes.",
  },
  {
    name: "Client Liaison (Placeholder)",
    role: "Family Coordination",
    bio: "Primary point of contact for families, clergy, and funeral directors.",
  },
  {
    name: "Dispatch Lead (Placeholder)",
    role: "24/7 Response",
    bio: "Manages urgent requests, response timing, and real-time communications.",
  },
  {
    name: "Compliance Officer (Placeholder)",
    role: "Licensing & Safety",
    bio: "Maintains certifications, insurance standards, and privacy protocols.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-ink text-slate">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pb-24">
        <section className="space-y-6 pb-12 pt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            Leadership & Team
          </p>
          <h1 className="font-heading text-4xl uppercase tracking-[0.2em] md:text-5xl">
            The People Behind the Work
          </h1>
          <p className="text-lg text-mist">
            A calm, disciplined team dedicated to respectful escort operations,
            security coverage, and luxury transport.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-charcoal/80 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">
            Founder
          </p>
          <h2 className="mt-4 font-heading text-3xl uppercase tracking-[0.15em] text-slate">
            {founder.name}
          </h2>
          <p className="mt-2 text-sm text-gold">{founder.title}</p>
          <p className="mt-5 text-sm text-mist">{founder.summary}</p>
        </section>

        <section className="border-t border-white/10 py-12">
          <h2 className="font-heading text-2xl uppercase tracking-[0.15em]">
            Core Team
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-white/10 bg-charcoal/80 p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-mist">
                  {member.role}
                </p>
                <p className="mt-4 text-lg text-slate">{member.name}</p>
                <p className="mt-3 text-sm text-mist">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
