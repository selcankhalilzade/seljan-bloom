"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          waitlist: true,
          message: "Tell me when the studio table opens.",
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="mt-8 max-w-sm text-sm leading-relaxed text-primary/75">
        You are on the list. Seljan will write when the table opens.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
    >
      <label className="sr-only" htmlFor="waitlist-email">
        Email
      </label>
      <Input
        id="waitlist-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Your email"
        className="h-11 rounded-[var(--btn-radius)] border-primary/25 bg-background px-4 text-sm text-primary"
      />
      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="h-11 rounded-[var(--btn-radius)] px-8 text-[0.7rem] tracking-[0.22em] uppercase"
      >
        {status === "sending" ? "Saving" : "Notify me"}
      </Button>
      {status === "error" ? (
        <p className="text-sm text-primary/70 sm:hidden">
          That did not send. Try again.
        </p>
      ) : null}
    </form>
  );
}
