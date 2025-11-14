"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tools: string;
  points: string[];
}

export default function ProjectCard({ title, tools, points }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">Tools: {tools}</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}