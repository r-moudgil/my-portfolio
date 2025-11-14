"use client";  /* Contains interactive scroll logic */
import React, { useEffect, useState } from "react";

const sections = ["home", "experience", "projects", "resume", "contact"];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // IntersectionObserver callback to update active section
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    // Observe each section element by ID
    sections.forEach(id => {
      const sectionEl = document.getElementById(id);
      if (sectionEl) observer.observe(sectionEl);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-20 h-screen w-48 bg-gray-800 
                    flex flex-col items-center justify-center space-y-8 md:block hidden">
      {sections.map(id => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-lg tracking-wide capitalize transition-colors duration-300 ${
            activeSection === id 
              ? "text-white font-bold"            // active section link style
              : "text-gray-400 hover:text-gray-200" // inactive link (with hover state)
          }`}
        >
          {id}
        </a>
      ))}
    </nav>
  );
}