import React from 'react';
import fs from "fs";
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8")
const blogs = dirContent.map(file=>{
    const fileContent =  fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})

const blog = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{blog.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">By {blog.author} on {blog.date}</p>
              <a
                href={`/blogpost/${blog.slug}`}
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600 font-semibold"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blog;