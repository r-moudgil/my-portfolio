import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-purple-200 py-12 px-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-purple-900">Contact</h2>
      <p className="text-lg text-center text-gray-800 mb-8">Feel free to get in touch with me!</p>
      {/* Contact Form */}
      <form className="max-w-md mx-auto space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 border-2 border-purple-300 rounded 
                     focus:outline-none focus:border-purple-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 border-2 border-purple-300 rounded 
                     focus:outline-none focus:border-purple-500"
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-3 border-2 border-purple-300 rounded 
                     focus:outline-none focus:border-purple-500 h-32"
        />
        <button 
          type="submit" 
          className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded 
                     hover:bg-purple-700 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
      {/* Additional contact info */}
      <div className="mt-8 text-center text-gray-800">
        Or email me at{" "}
        <a href="mailto:rmoudgil@umd.edu" className="text-purple-700 font-medium hover:underline">
          rmoudgil@umd.edu
        </a>
        <br/>
        Connect with me on{" "}
        <a 
          href="https://www.linkedin.com/in/rudrakshi-moudgil" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-700 font-medium hover:underline"
        >
          LinkedIn
        </a>.
      </div>
    </section>
  );
}