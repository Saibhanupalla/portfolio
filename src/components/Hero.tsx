import { motion, type Variants } from "motion/react";
import { EASE_OUT } from "../lib/motion";
import "./Hero.css";

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.06, duration: 0.5, ease: EASE_OUT },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__slash" aria-hidden="true" />

      <div className="hero__inner shell">
        <motion.p
          className="hero__eyebrow eyebrow"
          custom={0}
          initial="hidden"
          animate="show"
          variants={rise}
        >
          India / Available 2026
        </motion.p>

        <h1 className="hero__title">
          <motion.span
            className="hero__word"
            custom={1}
            initial="hidden"
            animate="show"
            variants={rise}
          >
            Sai
          </motion.span>
          <motion.span
            className="hero__word"
            custom={2}
            initial="hidden"
            animate="show"
            variants={rise}
          >
            Bhanupalla
          </motion.span>
        </h1>

        <motion.p
          className="hero__brush"
          custom={3}
          initial="hidden"
          animate="show"
          variants={rise}
        >
          Creative AI Developer
        </motion.p>

        <motion.p
          className="hero__lede"
          custom={4}
          initial="hidden"
          animate="show"
          variants={rise}
        >
          I build AI products with the energy of a poster and the rigor of
          production code - LLM systems, RAG, and full-stack apps that hit hard
          and ship fast.
        </motion.p>
      </div>

      <div className="hero__kanji kanji" aria-hidden="true">
        <span>改善</span>
        <span className="hero__kanji-sm">力</span>
      </div>
    </section>
  );
}
