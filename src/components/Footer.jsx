import React from 'react';
import { Link } from 'react-router-dom';
import { BookButton, Headline } from './ui.jsx';

export default function Footer({ lines = ['Less manual work.', 'More of what works.'], cta }) {
  return <footer>
    <div className="shell footer-main">
      <Link className="brand" to="/" aria-label="Bookore Systems home"><img src="/bookore-systems-logo.png" alt="Bookore Systems" /></Link>
      <Headline lines={lines} />
      <BookButton label={cta} />
    </div>
    <div className="shell footer-grid">
      <div><span>PAGES</span><Link to="/audit">AI Operations Audit</Link><Link to="/systems">Systems</Link><Link to="/teardowns">Teardowns</Link><Link to="/about">About</Link></div>
      <div><span>INDUSTRIES</span><Link to="/construction">Construction</Link><Link to="/medspa">Medspa</Link></div>
      <div><span>CONTACT</span><a href="mailto:info@bookoresystems.com">info@bookoresystems.com</a><a href="https://www.linkedin.com/company/bookore-systems/" target="_blank" rel="noreferrer">LinkedIn</a></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Bookore Systems</span><span>People approve every message. That is a design rule, not a setting.</span></div>
  </footer>;
}
