import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const REQUIRED = ["inquiryType", "subject", "message", "name", "email"] as const;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  for (const field of REQUIRED) {
    if (!body[field] || String(body[field]).trim() === "") {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return NextResponse.json(
      { error: "Messaging isn't configured yet. Please try again later." },
      { status: 503 }
    );
  }

  const supabase = createClient(url, key);
  const { error } = await supabase.from("inquiries").insert({
    inquiry_type: body.inquiryType,
    subject: body.subject,
    message: body.message,
    name: body.name,
    email: body.email,
    phone: body.phone || null,
    company: body.company || null,
  });

  if (error) {
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
