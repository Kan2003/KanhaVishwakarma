import { useState } from "react";
import Reveal from "./Reveal";
import type { PortfolioData, Experience as XP } from "../types";

function XPItem({ x, open, onToggle }: { x: XP; open: boolean; onToggle: () => void }) {
  return (
    <article className={`kc-xp ${open ? "open" : ""}`} onClick={onToggle}>
      <div className="kc-xp-row">
        <div className="kc-xp-when">{x.when}</div>
        <div>
          <h3 className="kc-xp-title">
            {x.role} <span className="at">@ {x.company}</span>
          </h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="kc-xp-place">{x.where}</span>
          <button className="kc-xp-toggle" aria-label="Toggle">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="kc-xp-body">
        <div><div className="kc-xp-meta">{x.tag}</div></div>
        <div>
          <ul className="kc-xp-pts">{x.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
          <div className="kc-xp-stack">{x.stack.map((s, j) => <span key={j}>{s}</span>)}</div>
        </div>
      </div>
    </article>
  );
}

export default function Experience({ data }: { data: PortfolioData }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="kc-section kc-shell" id="work">
      <Reveal className="kc-section-h">
        <div className="kc-section-num">02 / Experience</div>
        <h2 className="kc-section-title">Where I've <span className="italic">shipped</span>.</h2>
      </Reveal>
      <Reveal>
        <div className="kc-xp-list">
          {data.experience.map((x, i) => (
            <XPItem key={i} x={x} open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
