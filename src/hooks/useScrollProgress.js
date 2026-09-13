import { useEffect, useRef, useState } from "react";

// Returns 0→1 as the referenced element travels up through the viewport.
// 0 = element's top just entered the bottom of the viewport,
// 1 = element's bottom has left the top. Drives the stickman's walk.
export default function useScrollProgress() {
  const ref = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const measure = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const total = vh + r.height;
      const seen = vh - r.top;
      setP(Math.min(1, Math.max(0, seen / total)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, p];
}
