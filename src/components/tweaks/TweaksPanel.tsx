import { ReactNode, useEffect, useRef, useState } from "react";
import "./tweaks.css";

interface PanelProps {
  title?: string;
  children: ReactNode;
}

export function TweaksPanel({ title = "Tweaks", children }: PanelProps) {
  const [open, setOpen] = useState(true);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);

  // dragging
  useEffect(() => {
    const head = headRef.current;
    if (!head) return;
    let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0;
    const down = (e: MouseEvent) => {
      dragging = true;
      sx = e.clientX; sy = e.clientY;
      const r = (head.parentElement as HTMLElement).getBoundingClientRect();
      ox = r.left; oy = r.top;
      e.preventDefault();
    };
    const move = (e: MouseEvent) => {
      if (!dragging) return;
      setPos({ x: ox + (e.clientX - sx), y: oy + (e.clientY - sy) });
    };
    const up = () => { dragging = false; };
    head.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      head.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  if (!open) {
    return (
      <button className="twk-fab" onClick={() => setOpen(true)} aria-label="Open tweaks">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        Tweaks
      </button>
    );
  }

  const style = pos ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" } : undefined;

  return (
    <aside className="twk-panel" style={style}>
      <div ref={headRef} className="twk-hd">
        <b>{title}</b>
        <button className="twk-x" onClick={() => setOpen(false)} aria-label="Close">×</button>
      </div>
      <div className="twk-body">{children}</div>
    </aside>
  );
}

export function TweakSection({ label }: { label: string }) {
  return <div className="twk-sect">{label}</div>;
}

interface RowProps { label: string; value?: string | number; children: ReactNode }
function TweakRow({ label, value, children }: RowProps) {
  return (
    <div className="twk-row">
      <div className="twk-lbl">
        <span>{label}</span>
        {value !== undefined && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

export function TweakToggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button
        className={`twk-toggle ${value ? "on" : ""}`}
        onClick={() => onChange(!value)}
        aria-pressed={value}
      ><span /></button>
    </div>
  );
}

export function TweakRadio<T extends string>({ label, value, options, onChange }: {
  label: string; value: T; options: readonly T[]; onChange: (v: T) => void;
}) {
  return (
    <TweakRow label={label}>
      <div className="twk-radio">
        {options.map((o) => (
          <button key={o}
            className={`twk-radio-opt ${o === value ? "on" : ""}`}
            onClick={() => onChange(o)}
          >{o}</button>
        ))}
      </div>
    </TweakRow>
  );
}

export function TweakColor({ label, value, options, onChange }: {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
}) {
  return (
    <TweakRow label={label}>
      <div className="twk-swatch-row">
        {options.map((c) => (
          <button key={c}
            className={`twk-swatch ${c === value ? "on" : ""}`}
            style={{ background: c }}
            onClick={() => onChange(c)}
            aria-label={c}
          />
        ))}
      </div>
    </TweakRow>
  );
}

export function TweakSelect({ label, value, options, onChange }: {
  label: string; value: string; options: { value: string; label: string }[]; onChange: (v: string) => void;
}) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
      </select>
    </TweakRow>
  );
}
