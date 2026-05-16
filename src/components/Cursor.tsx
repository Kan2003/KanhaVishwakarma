import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0, tx = 0, ty = 0, raf = 0;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const hov = target.closest("a, button, .kc-xp, .kc-proj, .kc-skill-grp, [data-hover]");
      document.body.classList.toggle("kc-hover", !!hov);
    };
    const tick = () => {
      dx += (tx - dx) * 0.7; dy += (ty - dy) * 0.7;
      rx += (tx - rx) * 0.18; ry += (ty - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="kc-cursor-ring" />
      <div ref={dot} className="kc-cursor" />
    </>
  );
}
