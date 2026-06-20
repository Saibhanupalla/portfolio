import { useEffect, useRef } from "react";
import { useAnimate } from "motion/react";
import { EASE_OUT, EASE_IN_OUT } from "../lib/motion";
import "./TransitionOverlay.css";

type Props = {
  play: boolean;
  reduced: boolean;
  onCovered: () => void;
  onDone: () => void;
};

export default function TransitionOverlay({
  play,
  reduced,
  onCovered,
  onDone,
}: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const started = useRef(false);

  useEffect(() => {
    if (!play || started.current) return;
    started.current = true;

    const run = async () => {
      const el = scope.current;
      if (!el) return;

      if (reduced) {
        await animate(el, { opacity: 1 }, { duration: 0.16 });
        onCovered();
        await animate(el, { opacity: 0 }, { duration: 0.18 });
        onDone();
        return;
      }

      await animate(el, { y: ["100%", "0%"] }, { duration: 0.52, ease: EASE_IN_OUT });
      onCovered();
      await animate(el, { y: ["0%", "-100%"] }, {
        duration: 0.56,
        ease: EASE_OUT,
        delay: 0.1,
      });
      onDone();
    };

    void run();
  }, [play, reduced, animate, scope, onCovered, onDone]);

  return (
    <div ref={scope} className="transition" data-reduced={reduced} aria-hidden="true">
      <div className="transition__paper">
        <span className="transition__stamp kanji-brush">反逆</span>
      </div>
    </div>
  );
}
