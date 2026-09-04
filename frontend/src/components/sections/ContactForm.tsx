"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { inquiry } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const TYPES = inquiry.types as readonly string[];

function placeholdersFor(type: string) {
  return type === inquiry.propertyOwnerType
    ? inquiry.placeholders.propertyOwner
    : inquiry.placeholders.default;
}

export default function ContactForm() {
  const params = useSearchParams();
  const initialType = (() => {
    const t = params.get("type");
    return t && TYPES.includes(t) ? t : TYPES[0];
  })();

  const [type, setType] = useState<string>(initialType);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const ph = placeholdersFor(type);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.success) {
        throw new Error(
          body.error || "We couldn't send your message right now. Please try again."
        );
      }
      setStatus("success");
      form.reset();
      setType(TYPES[0]);
    } catch {
      setError("We couldn't send your message right now. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="intake-success">
        <span className="eyebrow">Message sent</span>
        <h2>Thanks — we&apos;ll be in touch.</h2>
        <p>
          Your message has reached the Faster EV ChargeNow team. We typically respond
          within one to two business days.
        </p>
        <button
          type="button"
          className="cta-magnetic small"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="intake-form" onSubmit={handleSubmit}>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <label className="intake-field">
        <span className="intake-label">Inquiry Type *</span>
        <select
          name="inquiryType"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="intake-field">
        <span className="intake-label">Subject *</span>
        <input name="subject" type="text" required placeholder={ph.subject} />
      </label>

      <label className="intake-field">
        <span className="intake-label">Message *</span>
        <textarea name="message" required rows={5} placeholder={ph.message} />
      </label>

      <div className="intake-row">
        <label className="intake-field">
          <span className="intake-label">Name *</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="intake-field">
          <span className="intake-label">Email *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <div className="intake-row">
        <label className="intake-field">
          <span className="intake-label">Phone Number (Optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="intake-field">
          <span className="intake-label">Property / Company Name (Optional)</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
      </div>

      {status === "error" && (
        <p className="intake-error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="cta-magnetic"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
