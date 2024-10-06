"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations

const AboutHero = () => {
  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto text-center mt-8">
        <h1 className="text-5xl font-bold text-black mb-8 dark:text-white">About Our Blog</h1>
        <p className="text-xl text-gray-700 mb-8 mt-8 dark:text-gray-300">
          Welcome to our programming blog where we share insights, tutorials, and projects on various programming topics. Our mission is to educate and inspire developers of all levels.
        </p>
      </div>
      {/* Showcase Section */}
      <div className="container mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black dark:text-white">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { id: 1, name: "Project Alpha", description: "An innovative project that explores new technologies.", image: "https://picsum.photos/400/600?random=10" },
            { id: 2, name: "Project Beta", description: "A creative project focusing on user experience.", image: "https://picsum.photos/400/600?random=12" },
            { id: 3, name: "Project Gamma", description: "A collaborative project with open-source contributions.", image: "https://picsum.photos/400/600?random=15" }
          ].map((project) => (
            <motion.div
              key={project.id}
              className="w-96 h-72 bg-gray-200 shadow-lg rounded-lg overflow-hidden dark:bg-gray-800"
              whileHover={{ scale: 1.05 }} // Animation on hover
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center dark:bg-gray-700">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-black dark:text-white">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
