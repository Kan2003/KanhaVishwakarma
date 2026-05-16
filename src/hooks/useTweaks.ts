import { useEffect, useState } from "react";

export type TweakValue = string | number | boolean | string[];

export function useTweaks<T extends Record<string, TweakValue>>(defaults: T) {
  const [state, setState] = useState<T>(() => ({ ...defaults }));

  const setTweak = <K extends keyof T>(key: K | Partial<T>, value?: T[K]) => {
    setState((prev) => {
      if (typeof key === "object") return { ...prev, ...key };
      return { ...prev, [key as keyof T]: value as T[K] };
    });
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("__tweaks");
      if (saved) setState((prev) => ({ ...prev, ...JSON.parse(saved) }));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("__tweaks", JSON.stringify(state)); } catch {}
  }, [state]);

  return [state, setTweak] as const;
}
