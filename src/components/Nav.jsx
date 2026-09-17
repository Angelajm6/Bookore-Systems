import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Arrow, calendlyUrl } from './ui.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      setHidden(y > 140 && y > last && !open);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);
  return <header className={'nav-wrap' + (hidden ? ' is-hidden' : '') + (solid ? ' is-solid' : '') + (open ? ' is-open' : '')}>
    <nav className="nav shell" aria-label="Primary">
      <Link className="brand" to="/" aria-label="Bookore Systems home"><img src="/bookore-systems-logo.png" alt="Bookore Systems" /></Link>
      <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}><span /><span /></button>
      <div className="nav-links">
        <NavLink to="/audit">Audit</NavLink>
        <NavLink to="/systems">Systems</NavLink>
        <div className="nav-group">
          <button type="button" className="nav-group-label" aria-haspopup="true">Industries <i aria-hidden="true" /></button>
          <div className="nav-menu">
            <NavLink to="/construction"><span>01</span>Construction<small>Leads, estimates, handoffs</small></NavLink>
            <NavLink to="/medspa"><span>02</span>Medspa<small>Consults, capacity, rebooking</small></NavLink>
          </div>
        </div>
        <NavLink to="/teardowns">Teardowns</NavLink>
        <NavLink to="/about">About</NavLink>
        <a className="nav-cta" href={calendlyUrl} target="_blank" rel="noreferrer">Book an audit call <Arrow /></a>
      </div>
    </nav>
  </header>;
}
