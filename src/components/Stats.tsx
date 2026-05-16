import Reveal from "./Reveal";
import type { PortfolioData } from "../types";

export default function Stats({ data }: { data: PortfolioData }) {
  return (
    <section className="kc-section kc-shell" style={{ paddingTop: 40 }}>
      <Reveal>
        <div className="kc-stats">
          {data.stats.map((s, i) => (
            <div key={i} className="kc-stat">
              <div className="tag">{s.tag}</div>
              <div className="v">{s.v}<span className="unit">{s.unit}</span></div>
              <div className="k">{s.k}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
