import { useEffect, useRef, useState } from "react";
import type { PortfolioData } from "../types";

interface Props {
  data: PortfolioData;
  dark: boolean;
  onToggleDark: () => void;
}

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ data, dark, onToggleDark }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <>
      <div ref={ref} className={`kc-menucard ${open ? "open" : ""}`} data-hover>
        <div className="kc-mc-head" onClick={() => setOpen((o) => !o)}>
          <div className="kc-mc-mark">
            <span className="glyph">K.</span>
            <div className="kc-mc-mark-stack">
              <span>{data.name.toUpperCase()}</span>
              <span className="sub">{data.role} · '26</span>
            </div>
          </div>
          <div className="kc-mc-actions">
            <button
              className="kc-mc-burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span /><span />
            </button>
            <button
              type="button"
              className="kc-mc-theme"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={dark}
              data-hover
              onClick={(e) => { e.stopPropagation(); onToggleDark(); }}
            >
              <span className="kc-mc-theme-icon sun" aria-hidden>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <circle cx="10" cy="10" r="3.6" />
                  <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" />
                </svg>
              </span>
              <span className="kc-mc-theme-icon moon" aria-hidden>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16.5 11.8A6.5 6.5 0 0 1 8.2 3.5a6.5 6.5 0 1 0 8.3 8.3Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="kc-mc-body">
          <div className="kc-mc-divider" />
          <nav className="kc-mc-links">
            {LINKS.map((l, i) => (
              <a key={l.href} href={l.href} className="kc-mc-link" onClick={() => setOpen(false)}>
                <span>{l.label}</span>
                <span className="arr">— 0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="kc-mc-divider" />
          <p className="kc-mc-greet">
            Happy to <span className="accent">see you</span> here.
          </p>
          <div className="kc-mc-portrait">
            <img src="/assets/profile.jpg" alt={data.name} loading="lazy" />
            <div className="tr">[ {data.initials.toLowerCase()}.jpg ]</div>
            <div className="pl">{data.name}</div>
          </div>
        </div>
      </div>

      <a href={data.resume} download className="kc-rcta" data-hover>
        Résumé <span className="arrow">↓</span>
      </a>
    </>
  );
}
