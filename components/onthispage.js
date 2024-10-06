"use client"
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Create a temporary DOM element to parse the HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // Select all h1 elements
    const h1Elements = tempDiv.querySelectorAll('h2');

    // Extract text content and id from each h1 element
    const h2Data = Array.from(h1Elements).map(h2 => ({
      text: h2.textContent,
      id: h2.id || h2.textContent.replace(/\s+/g, '-').toLowerCase() // Generate an id if not present
    }));

    // Update the state with the extracted headings
    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="on-this-page absolute top-20 right-72">
      <h2 className="text-lg font-bold">On This Page</h2>
      <ul className="text-sm space-y-1">
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`} className="hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
