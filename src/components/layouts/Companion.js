import React, { useCallback, useEffect, useRef, useState } from "react";
import { PROPS } from "./Stickman";

const ORDER = [
  "about",
  "experience",
  "projects",
  "skills",
  "hobbies",
  "publications",
  "contact",
];

const EMOTES = [
  "flip",
  "backflip",
  "spin",
  "spinjump",
  "jump",
  "squat",
  "bounce",
  "shake",
  "bow",
  "moonwalk",
  "wave",
  "kick",
  "flex",
];

// randomized accessory-switch styles
const SWITCHES = ["sw-fly", "sw-juggle", "sw-toss", "sw-spin"];

const GAP = 32; // px between slabs
const MAX = 4; // most slabs a fast scroll reveals
const SPEED = 1.6; // scroll-velocity → offset gain (higher = reaches more slabs when fast)
const MAXOFF = GAP * MAX;

const Accessory = ({ v, className }) =>
  PROPS[v] ? (
    <span className={className} key={v}>
      <svg
        viewBox="28 27 22 19"
        width="26"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PROPS[v]}
      </svg>
    </span>
  ) : null;

const Companion = () => {
  const [variant, setVariant] = useState("about");
  const [leaving, setLeaving] = useState(null);
  const [emote, setEmote] = useState(null);
  const [active, setActive] = useState(false);
  const [switchAnim, setSwitchAnim] = useState("");
  const variantRef = useRef("about");
  const activeRef = useRef(false);
  const dropStart = useRef(-99999);
  const greeted = useRef(false);
  const emoteT = useRef(0);
  const prev = useRef("about");
  const leaveT = useRef(0);

  const figRef = useRef(null);
  const sceneRef = useRef(null);
  const upRefs = useRef([]);
  const downRefs = useRef([]);
  const bump = useRef(0);

  // drop old accessory on section change
  useEffect(() => {
    if (prev.current && prev.current !== variant && PROPS[prev.current]) {
      setLeaving(prev.current);
      clearTimeout(leaveT.current);
      leaveT.current = setTimeout(() => setLeaving(null), 620);
    }
    prev.current = variant;
    return () => clearTimeout(leaveT.current);
  }, [variant]);

  // trigger a drop-in the first frame the companion becomes active (past hero)
  useEffect(() => {
    if (active && !activeRef.current) {
      dropStart.current = performance.now();
      greeted.current = false;
    }
    activeRef.current = active;
  }, [active]);

  // velocity-driven climb loop + idle resting behaviours
  useEffect(() => {
    let raf = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let vel = 0;
    let off = 0;
    let lastActive = performance.now();
    let resting = false;
    let nextAct = 0;
    let actTimer = 0;
    let seenBump = bump.current;
    // discrete slab-stepping engine
    let level = 0; // current slab (signed: + up, - down)
    let targetLvl = 0; // slab we're heading to
    let hopping = false;
    let hopFrom = 0;
    let hopTo = 0;
    let hopT0 = 0;
    let lastScrollT = 0;
    const HOP_MS = 480; // per-slab hop
    const ARC = 15; // jump-arc height px
    const fig = figRef.current;
    const scene = sceneRef.current;
    const rand = (a, b) => a + Math.random() * (b - a);

    const heldAcc = () => fig && fig.querySelector(".acc");
    const clearAction = () => {
      if (!fig) return;
      fig.classList.remove("attn");
      const a = heldAcc();
      if (a) a.classList.remove("trick");
      clearTimeout(actTimer);
    };
    const doAction = (now) => {
      // a burst of a few attention jumps, or a trick with the held accessory
      const a = heldAcc();
      const hasAcc = a && a.childElementCount > 0;
      if (hasAcc && Math.random() < 0.45) {
        a.classList.add("trick");
        clearTimeout(actTimer);
        actTimer = setTimeout(() => a.classList.remove("trick"), 1100);
      } else {
        fig.classList.add("attn");
        clearTimeout(actTimer);
        actTimer = setTimeout(() => fig.classList.remove("attn"), 1750);
      }
      nextAct = now + rand(2600, 5200);
    };

    const bounce = (x) => {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (x < 1 / d1) return n1 * x * x;
      if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
      if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    };

    const frame = () => {
      const now = performance.now();
      const dt = Math.min(0.05, (now - lastT) / 1000);
      lastT = now;

      // hidden before the About section — nothing to draw
      if (!activeRef.current) {
        lastY = window.scrollY;
        raf = requestAnimationFrame(frame);
        return;
      }

      // drop-in from the top of the screen when it first appears
      const sinceDrop = now - dropStart.current;
      if (sinceDrop < 900) {
        const p = Math.min(1, sinceDrop / 900);
        const startY = -(window.innerHeight * 0.55 + 120);
        const dy = startY * (1 - bounce(p));
        if (fig) {
          fig.style.transform = `translateY(${dy.toFixed(1)}px)`;
          fig.classList.remove("up", "down", "tired", "attn");
        }
        off = 0;
        vel = 0;
        lastY = window.scrollY;
        for (let i = 0; i < MAX; i++) {
          if (upRefs.current[i]) upRefs.current[i].classList.remove("on");
          if (downRefs.current[i]) downRefs.current[i].classList.remove("on");
        }
        raf = requestAnimationFrame(frame);
        return;
      }

      // just landed — wave hello once
      if (!greeted.current) {
        greeted.current = true;
        if (fig) {
          fig.classList.add("greet");
          setTimeout(() => fig && fig.classList.remove("greet"), 1500);
        }
      }

      const y = window.scrollY;
      const inst = y - lastY;
      lastY = y;
      vel = vel * 0.7 + inst * 0.3;

      // scroll sets how many slabs (min 2) and which way; scroll down => climb up
      if (Math.abs(inst) > 1.2) {
        lastScrollT = now;
        const count = Math.max(2, Math.min(MAX, Math.round(Math.abs(vel) / 16)));
        targetLvl = (inst > 0 ? 1 : -1) * count;
      }
      // return home shortly after scrolling stops
      if (now - lastScrollT > 320) targetLvl = 0;

      // start next hop toward the target
      if (!hopping && level !== targetLvl) {
        hopping = true;
        hopT0 = now;
        hopFrom = level;
        hopTo = level + Math.sign(targetLvl - level);
      }

      if (hopping) {
        const p = Math.min(1, (now - hopT0) / HOP_MS);
        const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; // easeInOut
        const base = -(hopFrom + (hopTo - hopFrom) * e) * GAP;
        const arc = -Math.sin(Math.PI * p) * ARC; // up-and-over hop
        off = base + arc;
        const climbing = hopTo > hopFrom;
        fig && fig.classList.toggle("climb", climbing);
        fig && fig.classList.toggle("leap", !climbing);
        if (p >= 1) {
          hopping = false;
          level = hopTo;
          fig && fig.classList.remove("climb", "leap");
        }
      } else {
        off = -level * GAP;
      }

      if (fig) {
        fig.style.transform = `translateY(${off.toFixed(1)}px)`;
        fig.classList.toggle("tired", Math.abs(vel) > 34 && !resting);
      }
      // reveal transient slabs up to where the figure is heading
      const lv = hopping ? hopTo : level;
      const upN = lv > 0 ? Math.abs(lv) : 0;
      const dnN = lv < 0 ? Math.abs(lv) : 0;
      for (let i = 0; i < MAX; i++) {
        const up = upRefs.current[i];
        const dn = downRefs.current[i];
        if (up) up.classList.toggle("on", i < upN);
        if (dn) dn.classList.toggle("on", i < dnN);
      }

      // activity tracking (scroll or click) resets the idle timer
      const clicked = bump.current !== seenBump;
      if (clicked) seenBump = bump.current;
      if (Math.abs(inst) > 0.5 || clicked) {
        lastActive = now;
        if (resting) {
          resting = false;
          fig && fig.classList.remove("rest");
          clearAction();
        }
      }
      // enter resting after 5s settled at home
      if (!resting && now - lastActive > 5000 && !hopping && level === 0 && Math.abs(vel) < 2) {
        resting = true;
        fig && fig.classList.add("rest");
        nextAct = now + rand(1400, 3200);
      }
      if (resting && now > nextAct) doAction(now);

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(actTimer);
    };
  }, []);

  // section detection → accessory
  useEffect(() => {
    const secs = ORDER.map((id) => document.getElementById(id)).filter(Boolean);
    if (!secs.length) return;
    const ratios = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0)
        );
        let best = "about";
        let bestR = 0;
        ratios.forEach((r, id) => {
          if (r > bestR) {
            bestR = r;
            best = id;
          }
        });
        if (bestR > 0.05) {
          setActive(true);
          if (best !== variantRef.current) {
            variantRef.current = best;
            setVariant(best);
            setSwitchAnim(SWITCHES[Math.floor(Math.random() * SWITCHES.length)]);
          }
        } else {
          setActive(false);
        }
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.85] }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const onClick = useCallback(() => {
    bump.current += 1;
    const e = EMOTES[Math.floor(Math.random() * EMOTES.length)];
    setEmote(null);
    requestAnimationFrame(() => setEmote(e));
    clearTimeout(emoteT.current);
    emoteT.current = setTimeout(() => setEmote(null), 950);
  }, []);

  const slabTop = (i, sign) => `calc(50% + ${sign * (i + 1) * GAP}px)`;

  return (
    <div
      className={`mascot ${active ? "is-active" : ""} ${emote ? `emote-${emote}` : ""}`}
      aria-hidden="true"
    >
      <div className="mascot__scene" ref={sceneRef} onClick={onClick} title="poke me">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={`u${i}`}
            className="tslab"
            ref={(el) => (upRefs.current[i] = el)}
            style={{ top: slabTop(i, -1) }}
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <span
            key={`d${i}`}
            className="tslab"
            ref={(el) => (downRefs.current[i] = el)}
            style={{ top: slabTop(i, 1) }}
          />
        ))}
        <span className="slab slab--mid" />
        {/* old accessory left behind on the slab when the section changes */}
        {leaving && (
          <Accessory v={leaving} className={`acc-holder acc--leaving ${switchAnim}`} />
        )}
        <div className="mascot__fig" ref={figRef}>
          <svg
            className="mascot__svg"
            viewBox="0 0 52 66"
            width="52"
            height="66"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="26" cy="12" r="6" />
            <line x1="26" y1="18" x2="26" y2="40" />
            <line className="arm arm-l" x1="26" y1="23" x2="17" y2="33" />
            <line className="arm arm-r" x1="26" y1="23" x2="35" y2="33" />
            <line className="leg leg-l" x1="26" y1="40" x2="19" y2="58" />
            <line className="leg leg-r" x1="26" y1="40" x2="33" y2="58" />
            {/* accessory held in hand (picked up) */}
            <g className={`acc ${switchAnim}`} key={variant}>{PROPS[variant]}</g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Companion;
