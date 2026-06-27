import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { projects } from "../data/projects";
import { EASE_OUT } from "../lib/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import ExtLink from "./ExtLink";
import "./Work.css";

const N = projects.length;
const AUTOPLAY_MS = 6000;

export default function Work() {
  const reduced = usePrefersReducedMotion();
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const paginate = useCallback((d: number) => {
    setState(([i]) => [(i + d + N) % N, d]);
  }, []);
  const goTo = useCallback((i: number) => {
    setState(([cur]) => [i, i > cur ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const t = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [reduced, paused, paginate]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      paginate(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      paginate(1);
    }
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    setDragging(false);
    const power = Math.abs(info.offset.x) + Math.abs(info.velocity.x) * 0.1;
    if (power < 70) return;
    paginate(info.offset.x < 0 ? 1 : -1);
  };

  const p = projects[index];
  const slideStatus = `Slide ${index + 1} of ${N}: ${p.title}`;

  const variants = {
    enter: (d: number) => ({ x: reduced ? 0 : d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: reduced ? 0 : d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section
      className="work"
      id="work"
      aria-roledescription="carousel"
      aria-labelledby="work-heading"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="work__inner shell">
        <header className="work__head">
          <div>
            <h2 id="work-heading" className="work__heading">
              Projects
            </h2>
          </div>
          <span className="work__counter" aria-hidden="true">
            {String(index + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          </span>
        </header>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {slideStatus}
        </p>

        <div className="work__viewport">
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.article
              key={p.id}
              className={`case${dragging ? " case--dragging" : ""}`}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: reduced ? 0 : 0.45, ease: EASE_OUT },
                opacity: { duration: reduced ? 0 : 0.3 },
              }}
              drag={reduced ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragStart={() => setDragging(true)}
              onDragEnd={onDragEnd}
              role="group"
              aria-roledescription="slide"
              aria-label={slideStatus}
            >
              <figure className="case__media">
                <img
                  src={p.image}
                  alt={p.alt}
                  draggable={false}
                  loading="eager"
                  decoding="async"
                />
                <span className="case__kanji kanji-brush" aria-hidden="true">
                  {p.kanji}
                </span>
                <span className="case__index" aria-hidden="true">
                  {p.index}
                </span>
              </figure>

              <div className="case__copy">
                <h3 className="case__title">{p.title}</h3>
                <p className="case__subtitle">{p.subtitle}</p>
                <p className="case__blurb">{p.blurb}</p>

                <dl className="case__meta">
                  <div>
                    <dt>Role</dt>
                    <dd>{p.role}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{p.year}</dd>
                  </div>
                </dl>

                <ul className="case__tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                {p.href && (
                  <ExtLink className="case__link" href={p.href}>
                    View on GitHub
                    <span aria-hidden="true">→</span>
                  </ExtLink>
                )}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="work__controls">
          <button
            type="button"
            className="work__arrow"
            onClick={() => paginate(-1)}
            aria-label="Previous project"
          >
            ‹
          </button>

          <div className="work__dots" role="group" aria-label="Choose project">
            {projects.map((proj, i) => (
              <button
                key={proj.id}
                type="button"
                aria-label={`Go to ${proj.title}`}
                aria-current={i === index ? "true" : undefined}
                className="work__dot"
                data-on={i === index}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="work__pause"
            aria-pressed={paused}
            aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
            onClick={() => setPaused((v) => !v)}
          >
            {paused ? "Play" : "Pause"}
          </button>

          <button
            type="button"
            className="work__arrow"
            onClick={() => paginate(1)}
            aria-label="Next project"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
