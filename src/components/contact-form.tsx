"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const searchParams = useSearchParams();
  const piece = searchParams.get("piece") ?? "";
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
          name: data.get("name"),
          email: data.get("email"),
          piece: data.get("piece"),
          message: data.get("message"),
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
      <div className="border border-primary/15 bg-card px-6 py-10 text-center">
        <p className="font-display text-4xl text-primary italic">Thank you</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-primary/75">
          Your note is with the studio. Seljan will write back about the piece,
          timing, and how to claim it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required autoComplete="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="piece">Piece</Label>
        <Input
          id="piece"
          name="piece"
          defaultValue={piece}
          placeholder="Harbor Beanie, or a custom idea"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Color, size, or when you need it"
        />
      </div>
      {status === "error" ? (
        <p className="text-sm text-destructive">
          The note did not send. Please try again in a moment.
        </p>
      ) : null}
      <Button type="submit" size="lg" className="h-11 w-full rounded-[var(--btn-radius)] px-6" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send to the studio"}
      </Button>
    </form>
  );
}
