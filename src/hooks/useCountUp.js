import { useEffect, useRef, useState } from "react";

// Counts a numeric value up when the element scrolls into view.
// Preserves prefix/suffix around the number (e.g. "9+", "173K+").
export default function useCountUp(raw, duration = 1400) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(raw);
  const done = useRef(false);

  useEffect(() => {
    const match = String(raw).match(/^(\D*)([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(raw);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = (numStr.split(".")[1] || "").length;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(raw);
      return;
    }

    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setDisplay(raw);
      return;
    }

    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = (target * eased).toFixed(decimals);
        setDisplay(`${prefix}${val}${suffix}`);
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(raw);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [raw, duration]);

  return [ref, display];
}
