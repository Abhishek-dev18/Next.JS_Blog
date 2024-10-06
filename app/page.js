"use client"

import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';

// import Navbar from "@/components/ui/Navbar";
// import Image from "next/image";

export default function Home() {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <main>
     <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
  <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
    <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
      A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
    </h1>
    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
      Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
    </p>
    <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
      <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
       
      </form>
    </div>
  </div>
  <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
    <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
  </div>
</section> 

<section className="container mx-auto px-4 py-12">
  <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
    {/* Basic Plan */}
    <div className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500  dark:hover:border-blue-500">
      <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Basic</h3>
      <p className="text-5xl font-bold text-gray-900 dark:text-white">$19<span className="text-lg font-medium">/mo</span></p>
      <ul className="mt-6 space-y-4">
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">Access to all blog posts</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">Weekly newsletter</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">Basic support</span>
        </li>
      </ul>
      <button className="w-full mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">Choose Plan</button>
    </div>

    {/* Standard Plan */}
    <div className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500  dark:hover:border-blue-500">
      <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Standard</h3>
      <p className="text-5xl font-bold text-gray-900 dark:text-white">$49<span className="text-lg font-medium">/mo</span></p>
      <ul className="mt-6 space-y-4">
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">Access to all blog posts</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">Weekly newsletter</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">Priority support</span>
        </li>
      </ul>
      <button className="w-full mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">Choose Plan</button>
    </div>

    {/* Premium Plan */}
    <div className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500">
      <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Premium</h3>
      <p className="text-5xl font-bold text-gray-900 dark:text-white">$99<span className="text-lg font-medium">/mo</span></p>
      <ul className="mt-6 space-y-4">
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">Access to all blog posts</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">Weekly newsletter</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400">24/7 premium support</span>
        </li>
      </ul>
      <button className="w-full mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">Choose Plan</button>
    </div>
  </div>
</section>



    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Testimonials</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Testimonial 1 */}
        <div className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-light-blue-500 dark:hover:border-light-blue-500">
          <p className="text-lg italic text-gray-600 dark:text-gray-400">"This product has changed my life for the better! Highly recommend to everyone."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">- Alex Johnson</h3>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-light-blue-500 dark:hover:border-light-blue-500">
          <p className="text-lg italic text-gray-600 dark:text-gray-400">"Excellent customer service and a fantastic product. Five stars!"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">- Emily Davis</h3>
        </div>

        {/* Testimonial 3 */}
        <div className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-light-blue-500 dark:hover:border-light-blue-500">
          <p className="text-lg italic text-gray-600 dark:text-gray-400">"I can't imagine my daily routine without this product. It's simply amazing!"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">- Michael Brown</h3>
        </div>
      </div>
    </section>


<section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Top Blogs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img src={`https://picsum.photos/seed/${Math.random()}/400/300`} alt="React Hooks" className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Understanding React Hooks</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">A comprehensive guide to understanding and using React Hooks in your projects.</p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">By Jane Doe</p>
      <button className="text-blue-500">Read More</button>
    </div>
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img src={`https://picsum.photos/seed/${Math.random()}/400/300`} alt="Tailwind CSS" className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Mastering Tailwind CSS</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Learn how to effectively use Tailwind CSS to style your web applications.</p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">By John Smith</p>
      <button className="text-blue-500">Read More</button>
    </div>
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img src={`https://picsum.photos/seed/${Math.random()}/400/300`} alt="JavaScript ES6" className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">JavaScript ES6 Features</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Explore the new features introduced in JavaScript ES6 and how to use them.</p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">By Alice Johnson</p>
      <button className="text-blue-500">Read More</button>
    </div>
  </div>
</section>


<footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h5 className="text-lg font-bold">About Us</h5>
        <p className="text-gray-400">We provide the best content for web development enthusiasts.</p>
      </div>
      <div className="mb-4 md:mb-0">
        <h5 className="text-lg font-bold">Contact</h5>
        <p className="text-gray-400">Email: abhishekkumar200218@gmail.com.com</p>
        <p className="text-gray-400">Phone: +91 830448875</p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
        <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
      </div>
    </div>
    <div className="text-center mt-8 text-gray-500">
      &copy; 2024 Abhishek. All rights reserved.
    </div>
  </div>
</footer>

    


</main>
  );
}