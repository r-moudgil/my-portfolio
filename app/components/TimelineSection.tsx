"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  title: string;
  organization: string;
  date: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    title: "B.Tech in Computer Science & Technology",
    organization: "SIET, Kurukshetra University (India)",
    date: "Aug 2017 - May 2021",
    description: "Completed undergraduate studies with a focus on computer science.",
  },
  {
    title: "Software Engineer",
    organization: "Coforge (Noida, India)",
    date: "Jun 2021 - Oct 2023",
    description: "Developed and maintained web pages for British Airways, migrating 50+ pages to a new CMS with zero downtime.",
  },
  {
    title: "Team Leader",
    organization: "Coforge (Noida, India)",
    date: "Oct 2023 - Jul 2024",
    description: "Led an 8-member engineering team for British Airways, improving service quality and customer satisfaction.",
  },
  {
    title: "M.S. Information Systems",
    organization: "University of Maryland (College Park, USA)",
    date: "Jan 2025 - May 2026",
    description: "Pursuing a master's degree in Information Systems – Terrapin Scholar and Student Ambassador.",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Experience &amp; Education</h2>
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical line indicator */}
        <div className="border-l-4 border-purple-500 absolute left-6 top-0 h-full"></div>
        {timelineEvents.map((item, idx) => (
          <motion.div
            key={idx}
            className="pl-12 pb-8 relative"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline marker dot */}
            <div className="absolute left-6 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <div className="text-sm text-gray-600 mb-2">
              {item.organization} &middot; {item.date}
            </div>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}