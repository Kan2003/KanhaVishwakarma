import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";
import type { PortfolioData } from "../types";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ data }: { data: PortfolioData }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);
  const visualsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeIdx = useRef(-1);

  useEffect(() => {
    const items = itemsRef.current.filter((x): x is HTMLElement => !!x);
    const visuals = visualsRef.current.filter((x): x is HTMLDivElement => !!x);
    if (!items.length) return;

    gsap.set(visuals, { opacity: 0, scale: 0.96 });
    if (visuals[0]) gsap.set(visuals[0], { opacity: 1, scale: 1 });
    items.forEach((it, i) => it.classList.toggle("is-active", i === 0));
    activeIdx.current = 0;

    const setActive = (i: number) => {
      if (activeIdx.current === i) return;
      activeIdx.current = i;
      visuals.forEach((v, j) => {
        gsap.to(v, {
          opacity: i === j ? 1 : 0,
          scale: i === j ? 1 : 0.96,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
      items.forEach((it, j) => it.classList.toggle("is-active", i === j));
    };

    const triggers = items.map((item, i) =>
      ScrollTrigger.create({
        trigger: item,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      })
    );

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="kc-section kc-shell kc-pwork" id="projects">
      <Reveal className="kc-section-h">
        <div className="kc-section-num">03 / Projects</div>
        <h2 className="kc-section-title">Things I've <span className="italic">built</span>.</h2>
      </Reveal>

      <div className="kc-pwork-track" ref={trackRef}>
        <div className="kc-pwork-list">
          {data.projects.map((p, i) => (
            <article
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="kc-pwork-item"
            >
              <div className="kc-pwork-num">{p.num} / Project</div>
              <h3 className="kc-pwork-title">{p.title}</h3>
              <div className="kc-pwork-italic">{p.italic}</div>
              <div className="kc-pwork-underline" aria-hidden />
              <div className="kc-pwork-meta">{p.meta}</div>
              <p className="kc-pwork-desc">{p.desc}</p>
              <div className="kc-pwork-stack">
                {p.stack.map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <a
                href={p.live ?? p.link}
                target="_blank"
                rel="noreferrer"
                className="kc-pwork-cta"
                data-hover
              >
                {p.live ? "Visit site" : "View on GitHub"} <span className="arrow">↗</span>
              </a>
              <div className="kc-pwork-mobvis" aria-hidden>
                <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
              </div>
            </article>
          ))}
        </div>

        <div className="kc-pwork-visual-wrap" aria-hidden>
          <div className="kc-pwork-visual-stack">
            {data.projects.map((p, i) => (
              <div
                key={i}
                ref={(el) => { visualsRef.current[i] = el; }}
                className="kc-pwork-visual"
              >
                <img src={p.image} alt="" loading={i === 0 ? "eager" : "lazy"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
