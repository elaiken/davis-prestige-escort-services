import Link from "next/link";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-ink/95 px-4 py-3 shadow-[0_-20px_40px_rgba(0,0,0,0.6)] backdrop-blur sm:hidden">
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-slate">
        <a
          href="tel:+18005551234"
          className="flex-1 rounded-full border border-white/15 px-3 py-2 text-center"
        >
          Call Now
        </a>
        <Link
          href="/request"
          className="flex-1 rounded-full border border-gold/70 px-3 py-2 text-center text-gold"
        >
          Request
        </Link>
      </div>
    </div>
  );
}
