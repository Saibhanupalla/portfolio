import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { useLinkTransition } from "./transition/LinkTransitionProvider";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function ExtLink({ href, children, onClick, ...rest }: Props) {
  const runLink = useLinkTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    // Respect new-tab / new-window intents and non-primary clicks.
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }
    e.preventDefault();
    runLink(href);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
