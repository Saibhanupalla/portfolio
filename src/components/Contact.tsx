import ExtLink from "./ExtLink";
import "./Contact.css";

const LINKS = [
  { label: "Email", href: "mailto:saibhanupalla564@gmail.com", handle: "saibhanupalla564@gmail.com" },
  { label: "GitHub", href: "https://github.com/Saibhanupalla", handle: "@Saibhanupalla" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saibhanu-palla/", handle: "/in/saibhanu-palla" },
  { label: "X", href: "https://x.com/saibhanupalla", handle: "@saibhanupalla" },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__slash" aria-hidden="true" />
      <div className="contact__inner shell">
        <p className="contact__pre kanji" aria-hidden="true">
          連絡
        </p>
        <h2 className="contact__title">Let&apos;s talk</h2>
        <p className="contact__lede">
          Got a project with teeth? I&apos;m open for AI product, LLM, and
          full-stack work.
          <span className="contact__arrow" aria-hidden="true"> ↘</span>
        </p>

        <ul className="contact__links">
          {LINKS.map((l) => (
            <li key={l.label}>
              <ExtLink href={l.href}>
                <span className="contact__link-label">{l.label}</span>
                <span className="contact__link-handle">{l.handle}</span>
              </ExtLink>
            </li>
          ))}
        </ul>

        <footer className="contact__foot">
          <span className="eyebrow">Sai Bhanupalla / Creative AI Developer</span>
          <span className="eyebrow">India - Available 2026</span>
        </footer>
      </div>
    </section>
  );
}
