import React from "react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-12 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Resume</h2>
      <p className="text-lg text-gray-700 mb-6">
        For more details about my background and skills, you can download my resume below.
      </p>
      <a
        href="/Rudrakshi_Moudgil.pdf"
        download
        className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 
                   rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300"
      >
        Download Resume
      </a>
    </section>
  );
}