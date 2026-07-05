"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu (whole panel)
  const [openIndex, setOpenIndex] = useState<number | null>(null); // which top menu is open
  const hoverTimeout = useRef<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const isMobile = () =>
    typeof window !== 'undefined' && window.innerWidth <= 900;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        setOpenIndex(null);
      }
    }
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
        setOpenIndex(null);
      }
    }
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const openMenu = (index: number) => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setOpenIndex(index);
  };

  const closeMenu = () => {
    if (isMobile()) return; // on mobile, taps control open/close, not hover
    hoverTimeout.current = window.setTimeout(() => {
      setOpenIndex(null);
      hoverTimeout.current = null;
    }, 120);
  };

  const closeAll = () => {
    setOpen(false);
    setOpenIndex(null);
  };

  const menu = [
    { id: 'home', label: 'Home', items: ['Dashboard (Optional)', 'Latest News', 'Featured Companies', 'Contact'] },
    {
      id: 'insurance',
      label: 'Insurance',
      groups: [
        { title: 'Health Insurance', items: ['Individual', 'Family', 'Medicare', 'Medicaid', 'Dental', 'Vision', 'Short-Term', 'Critical Illness', 'Cancer Insurance', 'Supplemental Insurance', 'HSA Plans'] },
        { title: 'Life Insurance', items: ['Term Life', 'Whole Life', 'Universal Life', 'Variable Life', 'Final Expense', 'Senior Life', 'Child Life', 'No Medical Exam'] },
        { title: 'Auto Insurance', items: ['Liability', 'Full Coverage', 'SR-22', 'Commercial Auto', 'Classic Car', 'Motorcycle', 'Electric Vehicle', 'Rideshare Insurance', 'Gap Insurance'] },
        { title: 'Home Insurance', items: ['Homeowners', 'Renters', 'Condo', 'Landlord', 'Flood', 'Earthquake', 'Mobile Home', 'Vacation Home'] },
        { title: 'Business & Other', items: ['General Liability', 'Workers Compensation', 'Cyber Insurance', 'Commercial Property', 'Professional Liability', 'Travel Insurance', 'Pet Insurance', 'Disability Insurance'] },
      ],
    },
    { id: 'companies', label: 'Companies', items: ['Health Companies', 'Auto Companies', 'Life Companies', 'Home Companies', 'Business Companies', 'Top Rated Companies', 'Cheapest Companies', 'Company Reviews'] },
    { id: 'compare', label: 'Compare', items: ['Compare Quotes', 'Compare Companies', 'Compare Plans', 'Compare Premiums', 'Quote Calculator'] },
    { id: 'tools', label: 'Tools', items: ['Insurance Calculator', 'Premium Calculator', 'Coverage Calculator', 'ZIP Code Search', 'Agent Finder'] },
    { id: 'resources', label: 'Resources', items: ['Blog', 'Guides', 'Learning Center', 'FAQ', 'News', 'Videos'] },
    { id: 'bystate', label: 'By State', items: ['California', 'Texas', 'Florida', 'New York', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'Michigan', 'Arizona'] },
    { id: 'claims', label: 'Claims', items: ['File a Claim', 'Track Claim', 'Claim Status', 'Claim Documents', 'Claims Help'] },
    { id: 'support', label: 'Support', items: ['Help Center', 'Live Chat', 'Email Support', 'Find an Agent', 'Request Callback'] },
    { id: 'about', label: 'About', items: ['About Us', 'Our Team', 'Editorial Policy', 'Careers', 'Privacy Policy'] },
  ];

  const toggleTop = (i: number) => {
    setOpenIndex((cur) => (cur === i ? null : i));
  };

  return (
    <nav className="site-nav" ref={navRef}>
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" onClick={closeAll}>
          <span className="nav-logo">BH</span>
          <span>Insurance</span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => {
            setOpen((s) => !s);
            setOpenIndex(null);
          }}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <div className={`nav-menu ${open ? 'open' : ''}`}>
          {menu.map((m, i) => (
            <div
              className={`nav-item ${m.groups ? 'has-dropdown' : ''} ${openIndex === i ? 'open-mobile' : ''}`}
              key={m.id}
              onMouseEnter={() => openMenu(i)}
              onMouseLeave={closeMenu}
            >
              <button
                className="nav-link"
                onClick={() => toggleTop(i)}
                aria-expanded={openIndex === i}
              >
                {m.label}
              </button>

              {/* submenu: either grouped mega or simple list */}
              {m.groups ? (
                <div
                  className={`mega-menu ${openIndex === i ? 'open' : ''}`}
                  onMouseEnter={() => openMenu(i)}
                  onMouseLeave={closeMenu}
                >
                  <div className="mega-grid">
                    {m.groups.map((g) => (
                      <div className="mega-column" key={g.title}>
                        <div className="dropdown-heading">{g.title}</div>
                        {g.items.map((it) => (
                          <Link href="#" className="dropdown-item" key={it} onClick={closeAll}>
                            {it}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ) : m.items ? (
                <div
                  className={`dropdown-menu ${openIndex === i ? 'open' : ''}`}
                  onMouseEnter={() => openMenu(i)}
                  onMouseLeave={closeMenu}
                >
                  {m.items.map((it) => (
                    <Link href="#" className="dropdown-item" key={it} onClick={closeAll}>
                      {it}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <div className="nav-item">
            <Link href="/contact" className="btn-primary" onClick={closeAll}>
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}