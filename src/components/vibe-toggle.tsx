"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "seljan-vibe";

export function VibeToggle() {
  const [studio, setStudio] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const next = stored === "studio";
    setStudio(next);
    document.documentElement.classList.toggle("vibe-studio", next);
  }, []);

  function toggle() {
    const next = !studio;
    setStudio(next);
    document.documentElement.classList.toggle("vibe-studio", next);
    window.localStorage.setItem(STORAGE_KEY, next ? "studio" : "chic");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="text-[0.65rem] font-medium tracking-[0.22em] text-primary uppercase transition-opacity hover:opacity-70"
    >
      {studio ? "Chic look" : "Studio look"}
    </button>
  );
}
