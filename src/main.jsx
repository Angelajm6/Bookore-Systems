import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './styles.css';
import Nav from './components/Nav.jsx';
import { ScrollToTop, useReveal, useSpotlight } from './components/ui.jsx';
import Home from './pages/Home.jsx';
import Audit from './pages/Audit.jsx';
import Systems from './pages/Systems.jsx';
import Vertical from './pages/Vertical.jsx';
import About from './pages/About.jsx';
import { TeardownIndex, TeardownPage } from './pages/Teardowns.jsx';
import construction from './data/construction.js';
import medspa from './data/medspa.js';

const titles = { '/': 'Bookore Systems — Automation & AI systems for owner-led businesses', '/audit': 'AI Operations Audit — Bookore Systems', '/systems': 'Systems — Bookore Systems', '/construction': 'Construction — Bookore Systems', '/medspa': 'Medspa — Bookore Systems', '/teardowns': 'Teardowns — Bookore Systems', '/about': 'About — Bookore Systems' };

function App() {
  const { pathname } = useLocation();
  useReveal();
  useSpotlight();
  React.useEffect(() => { document.title = titles[pathname] || 'Bookore Systems'; }, [pathname]);
  return <>
    <div className="reading-progress" aria-hidden="true" />
    <Nav />
    <main key={pathname} className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/construction" element={<Vertical data={construction} />} />
        <Route path="/medspa" element={<Vertical data={medspa} />} />
        <Route path="/teardowns" element={<TeardownIndex />} />
        <Route path="/teardowns/:slug" element={<TeardownPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  </>;
}

createRoot(document.getElementById('root')).render(<BrowserRouter><ScrollToTop /><App /></BrowserRouter>);
