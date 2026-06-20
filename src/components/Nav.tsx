import { useEffect, useId, useRef, useState } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav__inner shell">
        <a className="nav__logo" href="#top" aria-label="Sai Bhanupalla - home">
          <span aria-hidden="true">S</span>
          <span aria-hidden="true">B</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href="#contact">
          Let&apos;s work
          <span aria-hidden="true" className="nav__cta-slash">
            ✦
          </span>
        </a>

        <button
          type="button"
          ref={toggleRef}
          className="nav__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          data-open={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        id={panelId}
        ref={panelRef}
        className="nav__panel"
        data-open={open}
        hidden={!open}
      >
        <nav className="nav__panel-links" aria-label="Primary mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="nav__panel-cta" href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s work
            <span aria-hidden="true"> ✦</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
