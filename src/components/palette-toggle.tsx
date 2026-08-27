"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "seljan-palette";

export function PaletteToggle() {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const next = stored === "clay";
    setInverted(next);
    document.documentElement.classList.toggle("palette-invert", next);
  }, []);

  function toggle() {
    const next = !inverted;
    setInverted(next);
    document.documentElement.classList.toggle("palette-invert", next);
    window.localStorage.setItem(STORAGE_KEY, next ? "clay" : "cream");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="text-[0.65rem] font-medium tracking-[0.22em] text-primary uppercase transition-opacity hover:opacity-70"
    >
      {inverted ? "Cream palette" : "Clay palette"}
    </button>
  );
}
