"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="bg-purple-100 py-12 px-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-900">Experience</h2>
      {/* Timeline container with vertical line */}
      <div className="relative pl-10 
                      before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 
                      before:w-[2px] before:bg-purple-400">
        {/* Job 1 */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Timeline marker dot */}
          <div className="absolute -left-8 top-1 w-4 h-4 bg-purple-600 rounded-full"></div>
          {/* Job details */}
          <h3 className="text-xl font-semibold">
            Team Leader, Coforge <span className="text-sm font-normal text-gray-700">(Oct 2023 – Jul 2024)</span>
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-800">
            <li>Led an 8-member engineering team through the full SDLC for British Airways’ web pages, ensuring on-time delivery and high service quality.</li>
            <li>Designed SLA performance dashboards to highlight incident trends, cutting average resolution time by 15%, and strengthening leadership reporting.</li>
            <li>Elevated customer satisfaction from 8.0 to 9.3 in 4 months through bi-weekly client communications and technical team training that improved efficiency and turnaround time.</li>
          </ul>
        </motion.div>

        {/* Job 2 */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -left-8 top-1 w-4 h-4 bg-purple-600 rounded-full"></div>
          <h3 className="text-xl font-semibold">
            Software Engineer, Coforge <span className="text-sm font-normal text-gray-700">(Jun 2021 – Oct 2023)</span>
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-800">
            <li>Developed and maintained production-grade code across multiple projects following SDLC best practices, achieving a zero-defect release rate in production.</li>
            <li>Migrated 50+ BA.com pages from a legacy CMS to Adobe Experience Manager with no downtime, improving data integrity and reducing bounce rate by 30%.</li>
            <li>Implemented promotional site updates with zero UAT defects, enabling seamless rollout of revenue-generating campaigns on the platform.</li>
          </ul>
        </motion.div>

        {/* (Additional timeline entries can be added in similar structure) */}
      </div>
    </section>
  );
}