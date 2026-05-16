import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import type { PortfolioData } from "../types";

export default function Hero({ data }: { data: PortfolioData }) {
  const [px, setPx] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const on = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPx({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy });
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);
  const tilt = { transform: `translate3d(${px.x * 6}px, ${px.y * 4}px, 0)` };

  return (
    <header className="kc-hero" id="top">
      <div className="kc-bg-dots" aria-hidden />
      <div className="kc-shell" style={{ position: "relative" }}>
        <Reveal>
          <span className="kc-eyebrow"><span className="dot" /> {data.hero.eyebrow}</span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="kc-display" style={tilt}>
            Kanha<br />
            <span className="italic">Vishwakarma</span><span className="accent">.</span>
          </h1>
        </Reveal>
        <div className="kc-hero-meta">
          <Reveal delay={2}>
            <div>
              <div className="kc-tag">// Who</div>
              <p className="kc-tagline"><strong>{data.hero.tagline}</strong></p>
            </div>
          </Reveal>
          <Reveal delay={3} className="kc-hero-side">
            <div className="kc-tag">// Now</div>
            <div className="kc-hero-stats">
              <div className="kc-mini-stat">
                <div className="n">{data.role}</div>
                <div className="l">at Vagaro Technology</div>
              </div>
              <div className="kc-mini-stat">
                <div className="n">{data.location.split(",")[0]}</div>
                <div className="l">{data.location.split(",")[1]?.trim()} — open to remote</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
