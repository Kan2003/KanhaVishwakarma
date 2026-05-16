import type { PortfolioData } from "../types";

export default function Footer({ data }: { data: PortfolioData }) {
  return (
    <footer className="kc-shell">
      <div className="kc-footer">
        <span>© 2026 {data.name} — Crafted in Ahmedabad</span>
        <span>v2.0 / Last updated May 2026</span>
      </div>
    </footer>
  );
}
