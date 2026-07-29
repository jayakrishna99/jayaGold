import { NextResponse } from "next/server";

/**
 * Lead / complaint handler. Receives form submissions server-side.
 * In production, persist to a DB / CRM or forward to email/WhatsApp Business API.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Minimal validation
    if (!data?.name || !data?.phone) {
      return NextResponse.json(
        { ok: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // TODO: replace with real persistence / notification.
    console.log("[LEAD]", {
      name: data.name,
      phone: data.phone,
      city: data.city ?? "",
      type: data.ctype ?? data.item ?? "enquiry",
      message: data.message ?? "",
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
