"use client";

import { useEffect, useState } from "react";

type LocationState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; label: string }
  | { status: "error"; message: string };

export function CoverageMap() {
  const [locationState, setLocationState] = useState<LocationState>({
    status: "idle",
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocationState({
        status: "error",
        message: "Location services are not supported in this browser.",
      });
      return;
    }

    setLocationState({ status: "loading" });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude.toFixed(3);
        const longitude = position.coords.longitude.toFixed(3);
        setLocationState({
          status: "ready",
          label: `Detected location: ${latitude}, ${longitude}`,
        });
      },
      (error) => {
        const message =
          error.code === error.PERMISSION_DENIED
            ? "Location access was denied."
            : "Unable to confirm location right now.";
        setLocationState({ status: "error", message });
      },
      { timeout: 8000 }
    );
  }, []);

  return (
    <div className="rounded-3xl border border-white/10 bg-charcoal/80 p-6 text-sm text-mist">
      <p className="text-xs uppercase tracking-[0.3em] text-slate">
        Coverage Map
      </p>
      <div className="mt-4 h-52 rounded-2xl border border-white/10 bg-[linear-gradient(140deg,rgba(13,22,36,0.9),rgba(11,12,16,0.85)),linear-gradient(transparent_60%,rgba(185,164,106,0.15)_100%)]">
        <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-mist/70">
          Regional Coverage Grid
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-ink/60 p-4">
        {locationState.status === "loading" && (
          <p>Detecting your location for availability...</p>
        )}
        {locationState.status === "ready" && <p>{locationState.label}</p>}
        {locationState.status === "error" && <p>{locationState.message}</p>}
        {locationState.status === "idle" && (
          <p>Location detection will begin automatically.</p>
        )}
      </div>
    </div>
  );
}
