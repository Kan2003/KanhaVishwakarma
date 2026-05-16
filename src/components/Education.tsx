import Reveal from "./Reveal";
import type { PortfolioData } from "../types";

export default function Education({ data }: { data: PortfolioData }) {
  return (
    <section className="kc-section kc-shell" id="education">
      <Reveal className="kc-section-h">
        <div className="kc-section-num">05 / Education</div>
        <h2 className="kc-section-title">Where I <span className="italic">studied</span>.</h2>
      </Reveal>
      <Reveal>
        <div className="kc-edu">
          {data.education.map((e, i) => (
            <div key={i} className="kc-edu-item">
              <div className="kc-edu-when">{e.when}</div>
              <div>
                <div className="kc-edu-title">
                  {e.title}
                  <span className="where">{e.where}</span>
                </div>
              </div>
              <div className="kc-edu-score">{e.score}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
