'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`nav-link py-3 ${
                activeSection === id ? 'nav-link-active' : ''
              }`}
            >
              <span
                className={`nav-link-indicator ${
                  activeSection === id ? 'w-16 bg-slate-200' : ''
                }`}
              ></span>
              <span className="text-xs">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

