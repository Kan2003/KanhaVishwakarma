import Reveal from "./Reveal";
import type { PortfolioData } from "../types";

export default function Contact({ data }: { data: PortfolioData }) {
  return (
    <section className="kc-contact kc-shell" id="contact">
      <Reveal>
        <h2 className="kc-contact-h">
          Let's build<br />
          <span className="italic">something</span> <span className="accent">together.</span>
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <div className="kc-contact-grid">
          <div className="kc-contact-block">
            <div className="label">Reach me at</div>
            <a href={`mailto:${data.email}`}>{data.email}</a>
            <a href={`tel:${data.phone.replace(/\s/g, "")}`}>{data.phone}</a>
          </div>
          <div className="kc-contact-block">
            <div className="label">Find me on</div>
            <a href={data.social.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={data.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={data.social.leetcode} target="_blank" rel="noreferrer">LeetCode ↗</a>
            <a href={data.resume} download>Download Résumé ↓</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
