import Link from "next/link";

const navItems = [
  { label: "Escort Services", href: "/services/funeral-escort" },
  { label: "Security Services", href: "/services/security" },
  { label: "Hearse & Limo", href: "/services/vehicle-rentals" },
  { label: "Leadership", href: "/team" },
  { label: "Request", href: "/request" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="font-heading text-lg uppercase tracking-[0.3em] text-slate"
        >
          Davis Prestige
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-mist md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 text-sm text-mist md:flex">
          <a href="tel:+18005551234" className="transition hover:text-slate">
            24/7 Hotline
          </a>
          <Link
            href="/request"
            className="rounded-full border border-gold/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold transition hover:border-gold hover:text-slate"
          >
            Request Service
          </Link>
        </div>
        <Link
          href="/request"
          className="rounded-full border border-gold/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold transition hover:border-gold hover:text-slate md:hidden"
        >
          Request
        </Link>
      </div>
    </header>
  );
}
