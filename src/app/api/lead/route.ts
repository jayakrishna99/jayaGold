import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Lead / complaint handler. Receives form submissions server-side and emails them. */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.name || !data?.phone) {
      return NextResponse.json(
        { ok: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const lead = {
      name: data.name,
      phone: data.phone,
      email: data.email ?? "",
      grams: data.grams ?? "",
      city: data.city ?? "",
      type: data.ctype ?? data.item ?? "enquiry",
      message: data.message ?? "",
      at: new Date().toISOString(),
    };
    console.log("[LEAD]", lead);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const rows = Object.entries(lead)
      .filter(([, v]) => v !== "")
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#888;text-transform:capitalize">${k}</td><td style="padding:4px 0"><b>${v}</b></td></tr>`)
      .join("");

    await transporter.sendMail({
      from: `"Jaya Gold Buyers Website" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_TO_EMAIL,
      cc: process.env.LEAD_CC_EMAIL,
      replyTo: lead.email || undefined,
      subject: `New enquiry (${lead.type}) — ${lead.name}`,
      html: `<table cellspacing="0" cellpadding="0">${rows}</table>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[LEAD] failed to send", err);
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
