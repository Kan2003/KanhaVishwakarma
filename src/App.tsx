import { useEffect } from "react";
import { PORTFOLIO_DATA } from "./data";
import { useTweaks } from "./hooks/useTweaks";
import { useLocomotiveScroll } from "./hooks/useLocomotiveScroll";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

type ThemeKey = "warm" | "cool" | "mono";
type Density = "compact" | "regular" | "comfy";
type Motion = "off" | "calm" | "rich" | "intense";
type FontPair = "fraunces-inter" | "instrument-dm" | "space-jet" | "satoshi-inter";

interface ColorSet {
  bg: string; bg2: string; fg: string; fg2: string; fg3: string;
  line: string; line2: string; card: string;
}
interface Theme { light: ColorSet; dark: ColorSet }

const THEMES: Record<ThemeKey, Theme> = {
  warm: {
    light: { bg: "#faf9f7", bg2: "#f1ede5", fg: "#18170f", fg2: "#5a574c", fg3: "#8a8678", line: "rgba(24,23,15,0.10)", line2: "rgba(24,23,15,0.05)", card: "#ffffff" },
    dark:  { bg: "#0d0c08", bg2: "#15140e", fg: "#f4f1e8", fg2: "#a8a39a", fg3: "#6e6a60", line: "rgba(244,241,232,0.10)", line2: "rgba(244,241,232,0.05)", card: "#18170f" },
  },
  cool: {
    light: { bg: "#f5f7fa", bg2: "#e9eef4", fg: "#0f1a2a", fg2: "#4b5a6e", fg3: "#7d8a9c", line: "rgba(15,26,42,0.10)", line2: "rgba(15,26,42,0.05)", card: "#ffffff" },
    dark:  { bg: "#080c14", bg2: "#0f1622", fg: "#e8eef7", fg2: "#9aa6b8", fg3: "#5e6878", line: "rgba(232,238,247,0.10)", line2: "rgba(232,238,247,0.05)", card: "#0f1622" },
  },
  mono: {
    light: { bg: "#ffffff", bg2: "#f3f3f3", fg: "#0a0a0a", fg2: "#4a4a4a", fg3: "#888888", line: "rgba(0,0,0,0.10)", line2: "rgba(0,0,0,0.05)", card: "#ffffff" },
    dark:  { bg: "#000000", bg2: "#0a0a0a", fg: "#ffffff", fg2: "#a0a0a0", fg3: "#666666", line: "rgba(255,255,255,0.12)", line2: "rgba(255,255,255,0.06)", card: "#0a0a0a" },
  },
};

const FONT_PAIRS: Record<FontPair, { display: string; body: string; label: string }> = {
  "fraunces-inter": { display: '"Fraunces", Georgia, serif', body: '"Inter", system-ui, sans-serif', label: "Fraunces × Inter" },
  "instrument-dm":  { display: '"Instrument Serif", Georgia, serif', body: '"DM Sans", system-ui, sans-serif', label: "Instrument × DM Sans" },
  "space-jet":      { display: '"Space Grotesk", system-ui, sans-serif', body: '"Space Grotesk", system-ui, sans-serif', label: "Space Grotesk" },
  "satoshi-inter":  { display: '"Satoshi", system-ui, sans-serif', body: '"Inter", system-ui, sans-serif', label: "Satoshi × Inter" },
};

const DENSITY_PAD: Record<Density, number> = { compact: 0.65, regular: 1, comfy: 1.35 };
const MOTION_MULT: Record<Motion, number> = { off: 0, calm: 0.6, rich: 1, intense: 1.5 };

const TWEAK_DEFAULTS = {
  theme: "warm" as ThemeKey,
  dark: false,
  fontPair: "fraunces-inter" as FontPair,
  density: "regular" as Density,
  motion: "rich" as Motion,
  accent: "#D4A23E",
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useLocomotiveScroll(t.motion !== "off");

  useEffect(() => {
    const root = document.documentElement;
    const mode = THEMES[t.theme as ThemeKey][t.dark ? "dark" : "light"];
    const setVar = (k: string, v: string) => root.style.setProperty(k, v);
    setVar("--bg", mode.bg);
    setVar("--bg-2", mode.bg2);
    setVar("--fg", mode.fg);
    setVar("--fg-2", mode.fg2);
    setVar("--fg-3", mode.fg3);
    setVar("--line", mode.line);
    setVar("--line-2", mode.line2);
    setVar("--card", mode.card);

    root.classList.toggle("dark", !!t.dark);
    setVar("--accent", t.accent as string);
    setVar("--accent-soft", (t.accent as string) + "20");

    const fp = FONT_PAIRS[t.fontPair as FontPair];
    setVar("--font-display", fp.display);
    setVar("--font-body", fp.body);

    setVar("--pad", String(DENSITY_PAD[t.density as Density]));
    setVar("--motion", String(MOTION_MULT[t.motion as Motion] || 0.0001));
    document.body.classList.toggle("kc-motion-off", t.motion === "off");
  }, [t]);

  return (
    <>
      <Cursor />
      <Nav data={PORTFOLIO_DATA} dark={!!t.dark} onToggleDark={() => setTweak("dark", !t.dark)} />
      <Hero data={PORTFOLIO_DATA} />
      <Marquee />
      <About data={PORTFOLIO_DATA} />
      <Stats data={PORTFOLIO_DATA} />
      <Experience data={PORTFOLIO_DATA} />
      <Projects data={PORTFOLIO_DATA} />
      <Skills data={PORTFOLIO_DATA} />
      <Education data={PORTFOLIO_DATA} />
      <Contact data={PORTFOLIO_DATA} />
      <Footer data={PORTFOLIO_DATA} />
    </>
  );
}
