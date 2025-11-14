"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-gradient-to-r from-pink-500 to-purple-600 py-12 px-8 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <motion.div
          className="bg-white text-gray-800 rounded-xl p-6 shadow hover:shadow-2xl hover:-translate-y-2 
                     transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2">PhoThom Restaurant Data Analysis</h3>
          <p>
            Analyzed customer reviews across multiple platforms for a restaurant using SQL and an LLM-driven sentiment analysis. 
            Managed a team of 4 to streamline data collection, reducing data prep time by 20%. 
            Delivered recommendations to increase sales and improve customer satisfaction.
          </p>
        </motion.div>
        {/* Project 2 */}
        <motion.div
          className="bg-white text-gray-800 rounded-xl p-6 shadow hover:shadow-2xl hover:-translate-y-2 
                     transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-2">YouTube Video Success Predictor</h3>
          <p>
            Developed a classification model to predict the success of YouTube videos using machine learning. 
            Performed feature engineering and data preprocessing in R, and trained models (Decision Tree, Random Forest, XGBoost) 
            to achieve 85% prediction accuracy.
          </p>
        </motion.div>

        {/* You can add more <motion.div> items for additional projects as needed */}
      </div>
    </section>
  );
}