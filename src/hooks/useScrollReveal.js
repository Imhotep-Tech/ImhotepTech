import { useEffect, useRef } from 'react';

/**
 * Adds the `.revealed` class to child elements matching `selector`
 * when they scroll into view. Uses IntersectionObserver — zero deps.
 *
 * @param {string}  selector    CSS selector to find revealable children (default: '[data-reveal]')
 * @param {number}  threshold   Visibility ratio to trigger (0–1, default 0.15)
 * @param {string}  rootMargin  Observer root margin (default '0px 0px -60px 0px')
 */
export default function useScrollReveal(
  selector = '[data-reveal]',
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px'
) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect user preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const targets = container.querySelectorAll(selector);

    if (prefersReducedMotion) {
      // Immediately show everything
      targets.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, rootMargin]);

  return containerRef;
}
