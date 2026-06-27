import "./About.css";

const STACK = [
  "LLMs",
  "RAG",
  "FastAPI",
  "Python",
  "React",
  "TypeScript",
  "Next.js",
  "Motion",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner shell">
        <h2 className="about__statement">
          I build immersive AI experiences where <mark>code meets story</mark>.
        </h2>

        <div className="about__cols">
          <p className="about__body">
            I&apos;m Sai - a creative AI developer who treats interfaces like
            things you hold, not screens you tolerate. I move between building
            LLM systems - gateways, RAG pipelines, full-stack AI products - and
            crafting the design and motion that give them personality.
          </p>

          <div className="about__aside">
            <p className="about__aside-label">Toolkit</p>
            <ul className="about__stack">
              {STACK.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="about__sign">
          AI Engineer. Developer. Designer.
          <span aria-hidden="true"> ↘</span>
        </p>
      </div>
    </section>
  );
}
