import { useEffect, useRef, useState } from "react";
import "./Loader.css";

type Props = {
  reduced: boolean;
  onDone: () => void;
};

const THREAD_D =
  "M 40 210 C 200 120, 320 250, 470 170 S 720 90, 860 200 S 980 250, 1160 150";

// Doodles positioned along the thread, revealed as progress passes their mark.
const DOODLES = [
  { at: 8, x: 70, y: 150, label: "start" },
  { at: 40, x: 470, y: 95, label: "keep going" },
  { at: 70, x: 845, y: 120, label: "keep burning" },
  { at: 95, x: 1120, y: 95, label: "ship" },
];

export default function Loader({ reduced, onDone }: Props) {
  const [progress, setProgress] = useState(reduced ? 100 : 0);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [len, setLen] = useState(1);
  const doneFired = useRef(false);

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(() => finish(), 650);
      return () => clearTimeout(t);
    }
    let raf = 0;
    const start = performance.now();
    const duration = 2200;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out so it feels responsive early, settles at the end
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  function finish() {
    if (doneFired.current) return;
    doneFired.current = true;
    // small hold on 100% before the wipe
    setProgress(100);
    setTimeout(onDone, reduced ? 0 : 360);
  }

  const dashOffset = len - (len * progress) / 100;

  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="sr-only">Loading, {progress} percent</span>

      <div className="loader__head">
        <span className="loader__wordmark">SAI / BHANUPALLA</span>
        <span className="loader__sub kanji">作品集</span>
      </div>

      <svg
        className="loader__art"
        viewBox="0 0 1200 300"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={pathRef}
          d={THREAD_D}
          className="loader__thread"
          style={
            len
              ? { strokeDasharray: len, strokeDashoffset: reduced ? 0 : dashOffset }
              : undefined
          }
        />
        {DOODLES.map((d, i) => (
          <g
            key={d.label}
            className="loader__doodle"
            data-on={progress >= d.at}
            transform={`translate(${d.x} ${d.y})`}
          >
            <Doodle kind={i} />
          </g>
        ))}
      </svg>

      <div className="loader__foot">
        <span className="loader__pct">{progress}%</span>
        <button
          className="loader__skip"
          type="button"
          onClick={finish}
        >
          Skip intro
        </button>
      </div>
    </div>
  );
}

function Doodle({ kind }: { kind: number }) {
  switch (kind) {
    case 0: // flag
      return (
        <>
          <path d="M0 0 V-46" />
          <path d="M0 -44 C 16 -52, 30 -34, 46 -44 L 46 -24 C 30 -16, 16 -32, 0 -26 Z" />
        </>
      );
    case 1: // safety pin
      return (
        <>
          <path d="M-22 8 C -30 -10, -8 -22, 6 -10 L 22 6" />
          <path d="M22 6 C 30 14, 14 26, 4 16" />
          <circle cx="-24" cy="10" r="4" />
        </>
      );
    case 2: // flame
      return (
        <>
          <path d="M0 12 C -16 0, -10 -16, 0 -30 C 6 -16, 18 -14, 10 2 C 8 10, 4 14, 0 12 Z" />
          <path d="M0 6 C -6 0, -4 -8, 0 -16 C 3 -8, 8 -6, 4 2 Z" />
        </>
      );
    default: // sneaker
      return (
        <>
          <path d="M-36 14 L -30 -6 C -26 -14, -16 -12, -14 -4 L -8 -6 L 8 8 L 34 12 C 40 13, 40 20, 34 20 L -32 20 C -38 20, -40 16, -36 14 Z" />
          <path d="M-26 -4 L -20 6 M -16 -2 L -10 8" />
        </>
      );
  }
}
