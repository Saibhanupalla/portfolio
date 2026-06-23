import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { useAnimate } from "motion/react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { EASE_OUT, EASE_IN_OUT } from "../../lib/motion";
import "../TransitionOverlay.css";

type RunLink = (href: string) => void;

const LinkTransitionContext = createContext<RunLink>(() => {});

export function useLinkTransition(): RunLink {
  return useContext(LinkTransitionContext);
}

function openTab(href: string) {
  // Note: passing "noopener" in the features string makes window.open return
  // null even on success, which previously tripped the fallback and opened a
  // second tab. Open normally, then sever the opener for security.
  const win = window.open(href, "_blank");
  if (win) {
    win.opener = null;
    return;
  }
  // Popup blocked - fall back to a synthetic anchor click.
  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function LinkTransitionProvider({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const busy = useRef(false);

  const runLink = useCallback<RunLink>(
    (href) => {
      if (busy.current) return;
      const el = scope.current;

      if (!el || reduced) {
        openTab(href);
        return;
      }

      busy.current = true;
      void (async () => {
        await animate(el, { y: ["100%", "0%"] }, { duration: 0.5, ease: EASE_IN_OUT });
        openTab(href);
        await animate(el, { y: ["0%", "-100%"] }, {
          duration: 0.55,
          ease: EASE_OUT,
          delay: 0.14,
        });
        // park offscreen at the bottom, ready for the next trip
        await animate(el, { y: "100%" }, { duration: 0 });
        busy.current = false;
      })();
    },
    [animate, scope, reduced]
  );

  return (
    <LinkTransitionContext.Provider value={runLink}>
      {children}
      <div
        ref={scope}
        className="transition transition--link"
        data-reduced={reduced}
        aria-hidden="true"
      >
        <div className="transition__paper">
          <span className="transition__stamp kanji-brush">接続</span>
        </div>
      </div>
    </LinkTransitionContext.Provider>
  );
}
