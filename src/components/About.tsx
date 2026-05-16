import { Fragment } from "react";
import Reveal from "./Reveal";
import type { PortfolioData } from "../types";

function renderAccents(txt: string) {
  const parts = txt.split(/(<accent>[^<]+<\/accent>)/g);
  return parts.map((p, i) => {
    const m = p.match(/<accent>([^<]+)<\/accent>/);
    if (m) return <span key={i} className="accent">{m[1]}</span>;
    return <Fragment key={i}>{p}</Fragment>;
  });
}

export default function About({ data }: { data: PortfolioData }) {
  return (
    <section className="kc-section kc-shell" id="about">
      <Reveal className="kc-section-h">
        <div className="kc-section-num">01 / About</div>
        <h2 className="kc-section-title">A short <span className="italic">introduction</span>.</h2>
      </Reveal>
      <div className="kc-about">
        <Reveal>
          <div>{data.about.map((p, i) => <p key={i}>{renderAccents(p)}</p>)}</div>
        </Reveal>
        <Reveal delay={2}>
          <div className="kc-photo-card" data-hover>
            <img className="kc-photo" src="/assets/profile.jpg" alt={data.name} loading="lazy" />
            <span className="tag-tr">[ {data.initials.toLowerCase()}.jpg ]</span>
            <div className="label">
              <span className="label-name">{data.name}</span>
              <span className="label-meta">{data.role} · {data.location.split(",")[0]}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
