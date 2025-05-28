import React, { useState } from "react";
const accordions = [
  { title: "Size & Fit", content: "Details about size and fit go here." },
  { title: "Delivery & Returns", content: "Information about delivery and returns." },
  { title: "How This Was Made", content: "Description of the making process." },
];

/*Accordion Component: Renders a list of expandable/collapsible sections.*/
const Accordion: React.FC = () => {
  // State to track which accordion is open. Null means all are closed.
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  /*Toggles the open state of an accordion item.
   * If the same item is clicked again, it closes; otherwise, it opens the clicked item.
   * @param idx - Index of the clicked accordion item
   */
  const handleToggle = (idx: number) => {
    setOpenIdx(prevIdx => (prevIdx === idx ? null : idx));
  };

  return (
    <section className="mt-28 px-4 md:px-16">
      {accordions.map((item, idx) => (
        <div key={item.title} className="text-lg border-b border-gray-700">
          <button
            className="flex justify-between items-center w-full py-8 text-left focus:outline-none"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`accordion-content-${idx}`}
          >
            <span className="text-3xl">{item.title}</span>
            <span className="text-2xl transition-transform duration-200">
              {openIdx === idx ? "▲" : "▼"}
            </span>
          </button>
          {/* Accordion content, shown only if this item is open */}
          {openIdx === idx && (
            <div
              id={`accordion-content-${idx}`}
              className="pb-4 ml-4 md:ml-12 text-gray-300 transition-all duration-300"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;

