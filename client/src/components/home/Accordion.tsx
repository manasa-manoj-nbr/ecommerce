import React, { useState, useEffect } from "react";

const accordions = [
  { title: "Size & Fit", content: "Details about size and fit go here." },
  { title: "Delivery & Returns", content: "Information about delivery and returns." },
  { title: "How This Was Made", content: "Description of the making process." },
];

const Accordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
useEffect(() => {
  fetch('http://localhost:5000/api/ping')
    .then(res => res.json())
    .then(data => console.log(data));
}, []);

  return (
    <section className="mt-28 px-16">
      {accordions.map((item, idx) => (
        <div key={item.title} className="text-lg border-b  border-gray-700">
          <button
            className="flex justify-between  items-center w-full py-8 text-left"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span className="text-3xl">{item.title}</span>
            <span>{openIdx === idx ? "▲" : "▼"}</span>
          </button>
          {openIdx === idx && (
            <div className="pb-4 ml-12 text-gray-300">{item.content}</div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;
