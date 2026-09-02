import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/content/site";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "EV ChargeNow Website <noreply@fasterevchargenow.com>";

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const data = await request.json().catch(() => null);
  if (!data || data.botcheck) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const inquiryType = String(data.inquiryType || "General Question");
  const subject = String(data.subject || "").trim();
  const message = String(data.message || "").trim();
  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const phone = String(data.phone || "").trim();
  const company = String(data.company || "").trim();

  if (!subject || !message || !name || !email) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const rows: [string, string][] = [
    ["Inquiry Type", inquiryType],
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Property / Company", company || "—"],
  ];

  const html = `
    <h2>New ${esc(inquiryType)} inquiry</h2>
    <p><strong>Subject:</strong> ${esc(subject)}</p>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="color:#666">${esc(k)}</td><td>${esc(v)}</td></tr>`
        )
        .join("")}
    </table>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${esc(message)}</p>
  `;

  const { error } = await resend.emails.send({
    from: FROM,
    to: contact.email,
    replyTo: email,
    subject: `New ${inquiryType} inquiry — ${subject}`,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
