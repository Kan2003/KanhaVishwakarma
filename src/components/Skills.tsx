import Reveal from "./Reveal";
import type { PortfolioData } from "../types";

export default function Skills({ data }: { data: PortfolioData }) {
  return (
    <section className="kc-section kc-shell" id="stack">
      <Reveal className="kc-section-h">
        <div className="kc-section-num">04 / Stack</div>
        <h2 className="kc-section-title">What I <span className="italic">work with</span>.</h2>
      </Reveal>
      <Reveal>
        <div className="kc-skills">
          {data.skills.map((g, i) => (
            <div key={i} className="kc-skill-grp" data-hover>
              <h4>{g.h}</h4>
              <ul>{g.items.map((s, j) => <li key={j}>{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
