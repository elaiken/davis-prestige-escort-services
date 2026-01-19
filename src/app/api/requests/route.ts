import { supabaseServer } from "@/lib/supabase/server";

function normalizeValue(value: FormDataEntryValue) {
  if (typeof value === "string") {
    return value.trim();
  }
  return value;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  let payload: Record<string, FormDataEntryValue> = {};

  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const formData = await request.formData();
    payload = Object.fromEntries(formData.entries());
  } else {
    return Response.json(
      { ok: false, error: "Unsupported content type." },
      { status: 415 }
    );
  }

  const cleaned = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, normalizeValue(value)])
  );

  if (!cleaned.service || !cleaned.date || !cleaned.time || !cleaned.contact) {
    return Response.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  const { data, error } = await supabaseServer
    .from("service_requests")
    .insert({
      service_type: cleaned.service,
      urgency: cleaned.urgency ?? "scheduled",
      requested_date: cleaned.date,
      requested_time: cleaned.time,
      location: cleaned.location ?? "",
      estimated_duration: cleaned.duration ?? "",
      contact: cleaned.contact,
      details: cleaned.details ?? "",
    })
    .select("id")
    .single();

  if (error) {
    return Response.json(
      { ok: false, error: "Unable to save request." },
      { status: 500 }
    );
  }

  return Response.json(
    {
      ok: true,
      message: "Request received. A coordinator will reach out shortly.",
      requestId: data.id,
    },
    { status: 202 }
  );
}
