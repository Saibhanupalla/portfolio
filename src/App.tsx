import { useCallback, useState } from "react";
import { MotionConfig } from "motion/react";
import Loader from "./components/Loader";
import TransitionOverlay from "./components/TransitionOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import { LinkTransitionProvider } from "./components/transition/LinkTransitionProvider";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

type Phase = "loading" | "covering" | "ready";

export default function App() {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>("loading");
  const [revealed, setRevealed] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  const handleLoaderDone = useCallback(() => {
    setPhase("covering");
  }, []);

  const handleCovered = useCallback(() => {
    setRevealed(true);
    setLoaderGone(true);
  }, []);

  const handleWipeDone = useCallback(() => {
    setPhase("ready");
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <LinkTransitionProvider>
        <a className="skip-link" href="#work">
          Skip to content
        </a>

        {!loaderGone && (
          <Loader reduced={reduced} onDone={handleLoaderDone} />
        )}

        <TransitionOverlay
          play={phase === "covering"}
          reduced={reduced}
          onCovered={handleCovered}
          onDone={handleWipeDone}
        />

        <div className="site" data-revealed={revealed} aria-hidden={!revealed}>
          <Nav />
          <main>
            <Hero />
            <Work />
            <About />
            <Contact />
          </main>
        </div>
      </LinkTransitionProvider>
    </MotionConfig>
  );
}
