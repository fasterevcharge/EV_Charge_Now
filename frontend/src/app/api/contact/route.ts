import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/content/site";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Faster EV ChargeNow Website <noreply@fasterevchargenow.com>";

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

  await resend.emails
    .send({
      from: FROM,
      to: email,
      replyTo: contact.email,
      subject: "Thanks for contacting Faster EV ChargeNow",
      html: autoReplyHtml(name),
    })
    .catch(() => null);

  return NextResponse.json({ success: true });
}

function autoReplyHtml(name: string) {
  const firstName = name.split(/\s+/)[0] || "there";
  return `
  <div style="margin:0;padding:0;background:#f4f4f5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e5e7;">
            <tr>
              <td style="background:#ffffff;padding:32px 40px 24px;border-bottom:1px solid #efeff1;" align="center">
                <img src="https://fasterevchargenow.com/email-logo.png" alt="Faster EV ChargeNow" width="360" style="display:block;width:100%;max-width:360px;height:auto;" />
              </td>
            </tr>
            <tr><td style="height:4px;background:#f5c518;"></td></tr>
            <tr>
              <td style="padding:36px 40px 8px;font-family:Helvetica,Arial,sans-serif;">
                <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:#0b0c0e;">Thanks for reaching out, ${esc(firstName)}.</h1>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#3f3f46;">
                  We've received your message and a member of the Faster EV ChargeNow team will get back to you within one to two business days.
                </p>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#3f3f46;">
                  If your request is time-sensitive, you can reply directly to this email and it will reach our team.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 36px;font-family:Helvetica,Arial,sans-serif;">
                <p style="margin:0;font-size:15px;line-height:1.6;color:#3f3f46;">
                  Warm regards,<br />
                  <strong style="color:#0b0c0e;">The Faster EV ChargeNow Team</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 40px;background:#0b0c0e;font-family:Helvetica,Arial,sans-serif;" align="center">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#a1a1aa;">
                  <a href="mailto:${contact.email}" style="color:#f5c518;text-decoration:none;">${contact.email}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="https://fasterevchargenow.com" style="color:#f5c518;text-decoration:none;">fasterevchargenow.com</a>
                </p>
                <p style="margin:8px 0 0;font-size:11px;color:#71717a;">This is an automated confirmation — please don't share sensitive information by email.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}
