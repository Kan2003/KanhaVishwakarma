import { Fragment } from "react";

const TOKENS = ["React", "TypeScript", "Node.js", "Next.js", "Storybook", "Redux Toolkit", "MongoDB", "MySQL", "Tailwind", "REST APIs"];

export default function Marquee() {
  const row = (
    <span>
      {TOKENS.map((t, i) => (
        <Fragment key={i}>{t}<span className="star">✦</span></Fragment>
      ))}
    </span>
  );
  return (
    <section className="kc-marquee" aria-hidden>
      <div className="kc-marquee-track">{row}{row}</div>
    </section>
  );
}
