/** app/components/Navbar.tsx */
"use client";
import React, { useEffect, useState } from "react";

const sections = ["home", "experience", "projects", "resume", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Highlight active section when it enters viewport (50% visible)
    const handler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(handler, { threshold: 0.5 });
    // Observe all section elements by ID
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav 
      className="sticky top-0 z-20 w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm 
                 flex items-center justify-center space-x-8 py-3 px-4 shadow-md"
    >
      {sections.map(id => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-lg capitalize tracking-wide transition-colors duration-300 
            ${activeSection === id 
                ? "text-white font-bold" 
                : "text-gray-300 hover:text-gray-100"}`}
        >
          {id}
        </a>
      ))}
    </nav>
  );
}