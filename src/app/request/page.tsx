"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCTA } from "@/components/StickyCTA";

export default function RequestPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit request.");
      }

      setStatus("success");
      setMessage(
        data?.message || "Request received. A coordinator will reach out soon."
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit request."
      );
    }
  };

  return (
    <div className="min-h-screen bg-ink text-slate">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pb-24">
        <section className="space-y-6 pb-10 pt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            Smart Request Intake
          </p>
          <h1 className="font-heading text-4xl uppercase tracking-[0.2em] md:text-5xl">
            Request Service
          </h1>
          <p className="text-lg text-mist">
            Tell us what you need and we will translate it into a precise plan.
            You will receive a confirmation call within 30 minutes.
          </p>
        </section>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-white/10 bg-charcoal/80 p-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-mist">
              Service type
              <select
                name="service"
                required
                className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-slate"
              >
                <option value="">Select service</option>
                <option value="escort">Funeral Escort</option>
                <option value="security">Security Services</option>
                <option value="vehicle">Hearse & Limo Rental</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-mist">
              Urgency
              <select
                name="urgency"
                required
                className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-slate"
              >
                <option value="scheduled">Scheduled</option>
                <option value="same-day">Same-day</option>
                <option value="urgent">Urgent</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-mist">
              Date
              <input
                name="date"
                type="date"
                required
                className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-slate"
              />
            </label>
            <label className="space-y-2 text-sm text-mist">
              Time
              <input
                name="time"
                type="time"
                required
                className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-slate"
              />
            </label>
            <label className="space-y-2 text-sm text-mist md:col-span-2">
              Location / Route
              <input
                name="location"
                type="text"
                placeholder="Starting point, destination, and key stops"
                required
                className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-slate"
              />
            </label>
            <label className="space-y-2 text-sm text-mist">
              Estimated duration
              <input
                name="duration"
                type="text"
                placeholder="Example: 2 hours"
                className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-slate"
              />
            </label>
            <label className="space-y-2 text-sm text-mist">
              Family contact
              <input
                name="contact"
                type="text"
                placeholder="Name + phone"
                required
                className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-slate"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm text-mist">
            Tell us what you need
            <textarea
              name="details"
              rows={5}
              placeholder="Share the timeline, venue, number of vehicles, or any special requests."
              className="w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-slate"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full border border-gold/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Submit Request"}
            </button>
            <a
              href="tel:+18005551234"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-slate"
            >
              Call Hotline
            </a>
          </div>
        </form>

        {status !== "idle" ? (
          <div
            className="mt-6 rounded-2xl border border-white/10 bg-charcoal/80 p-4 text-sm text-mist"
            aria-live="polite"
          >
            <p className="text-slate">
              {status === "success" ? "Request received" : "Request status"}
            </p>
            <p className="mt-2">{message}</p>
          </div>
        ) : null}

        <p className="mt-6 text-sm text-mist">
          Prefer a direct conversation? Call{" "}
          <a className="text-slate" href="tel:+18005551234">
            (800) 555-1234
          </a>{" "}
          for immediate coordination.
        </p>
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
