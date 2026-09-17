import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/angela-bookoresystems/30min';

export function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }
export function Spark() { return <span className="spark" aria-hidden="true">✦</span>; }

export function Kicker({ children, spark }) {
  return <p className="kicker">{spark && <Spark />}{children}</p>;
}

export function Headline({ as: Tag = 'h2', lines, className = '' }) {
  return <Tag className={className}>{lines[0]}<br /><em>{lines[1]}</em></Tag>;
}

/* Magnetic button: the label drifts toward the cursor, then springs back. */
export function Magnetic({ children, className = '', as: Tag = 'a', ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const b = el.getBoundingClientRect();
    const x = (e.clientX - b.left - b.width / 2) / b.width;
    const y = (e.clientY - b.top - b.height / 2) / b.height;
    el.style.setProperty('--mx', (x * 10).toFixed(1) + 'px');
    el.style.setProperty('--my', (y * 8).toFixed(1) + 'px');
  };
  const onLeave = () => { const el = ref.current; if (!el) return; el.style.setProperty('--mx', '0px'); el.style.setProperty('--my', '0px'); };
  return <Tag ref={ref} className={'magnetic ' + className} onMouseMove={onMove} onMouseLeave={onLeave} {...rest}>{children}</Tag>;
}

export function BookButton({ label = 'Book a 30-minute audit call', light = false, className = '' }) {
  return <Magnetic className={'button ' + (light ? 'button-light ' : 'button-primary ') + className} href={calendlyUrl} target="_blank" rel="noreferrer">{label} <Arrow /></Magnetic>;
}

/* Scroll reveal for every [data-reveal] node, re-armed on each route change. */
export function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    const arm = () => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => reduce ? el.classList.add('is-visible') : observer.observe(el));
    arm();
    const mo = new MutationObserver(arm);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mo.disconnect(); };
  }, [pathname]);
}

/* Cards get a cursor-following spotlight through --sx / --sy. */
export function useSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.('[data-spot]'); if (!card) return;
      const b = card.getBoundingClientRect();
      card.style.setProperty('--sx', ((e.clientX - b.left) / b.width * 100).toFixed(1) + '%');
      card.style.setProperty('--sy', ((e.clientY - b.top) / b.height * 100).toFixed(1) + '%');
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

/* Counts up from 0 when it enters the viewport. */
export function CountUp({ to, suffix = '', duration = 1200 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return; io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix, duration]);
  return <span ref={ref}>0{suffix}</span>;
}
