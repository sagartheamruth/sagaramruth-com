"use client";

import { useId } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const maskId = useId();

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const toDark = !root.classList.contains("dark");

    const apply = () => {
      root.classList.toggle("dark", toDark);
      localStorage.setItem("sa-theme", toDark ? "dark" : "light");
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      apply();
      return;
    }
    if (!document.startViewTransition) {
      // no View Transitions API — soft cross-fade instead
      root.classList.add("theme-fade");
      apply();
      setTimeout(() => root.classList.remove("theme-fade"), 500);
      return;
    }

    // going dark: dark circle expands from the button over the page.
    // going light: the dark page collapses into the button, revealing light.
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.classList.toggle("vt-reverse", !toDark);
    const transition = document.startViewTransition(apply);
    transition.ready.then(() => {
      const expand = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${radius}px at ${x}px ${y}px)`,
      ];
      root.animate(
        { clipPath: toDark ? expand : [...expand].reverse() },
        {
          duration: 800,
          easing: toDark
            ? "cubic-bezier(0.2, 0.8, 0.3, 1)"
            : "cubic-bezier(0.6, 0, 0.65, 0.55)",
          pseudoElement: toDark
            ? "::view-transition-new(root)"
            : "::view-transition-old(root)",
        }
      );
    });
    transition.finished.finally(() => root.classList.remove("vt-reverse"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`rounded-lg p-1.5 transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.08] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="theme-icon h-5 w-5 fill-current">
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <circle className="moon-cutout" cx="12" cy="12" r="5" fill="black" />
        </mask>
        <circle
          className="sun-core"
          cx="12"
          cy="12"
          r="5"
          mask={`url(#${maskId})`}
        />
        <g className="sun-rays" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="1.5" x2="12" y2="3.5" className="stroke-current" />
          <line x1="12" y1="20.5" x2="12" y2="22.5" className="stroke-current" />
          <line x1="1.5" y1="12" x2="3.5" y2="12" className="stroke-current" />
          <line x1="20.5" y1="12" x2="22.5" y2="12" className="stroke-current" />
          <line x1="4.6" y1="4.6" x2="6" y2="6" className="stroke-current" />
          <line x1="18" y1="18" x2="19.4" y2="19.4" className="stroke-current" />
          <line x1="18" y1="6" x2="19.4" y2="4.6" className="stroke-current" />
          <line x1="4.6" y1="19.4" x2="6" y2="18" className="stroke-current" />
        </g>
      </svg>
    </button>
  );
}
