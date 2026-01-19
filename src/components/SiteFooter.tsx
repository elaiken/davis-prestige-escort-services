import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-slate">
            Davis Prestige Escort Services
          </p>
          <p className="mt-4 text-sm text-mist">
            Secure funeral escort services, professional security, and luxury
            transport delivered with dignity, discretion, and precision.
          </p>
        </div>
        <div className="text-sm text-mist">
          <p className="text-slate">Coverage</p>
          <p className="mt-3">Metro & regional routes, 24/7 availability.</p>
          <p className="mt-3">
            <span className="text-slate">Emergency:</span> 30-minute dispatch
            response.
          </p>
        </div>
        <div className="text-sm text-mist">
          <p className="text-slate">Connect</p>
          <div className="mt-3 flex flex-col gap-2">
            <a href="tel:+18005551234" className="hover:text-slate">
              24/7 Hotline: (800) 555-1234
            </a>
            <a href="sms:+18005551234" className="hover:text-slate">
              SMS Support
            </a>
            <Link href="/request" className="hover:text-slate">
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
