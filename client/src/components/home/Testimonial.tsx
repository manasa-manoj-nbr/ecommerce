import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const testimonials = [
  {
    id: 1,
    name: "Random Woman",
    location: "NY, USA",
    quote: "Understated, but unforgettable. It feels like it was made for me",
    image: "/images/customer1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    location: "CA, USA",
    quote: "Absolutely loved it. Elegance in every detail.",
    image: "/images/customer2.jpg",
  },
  {
    id: 3,
    name: "Anime Girl",
    location: "Tokyo, Japan",
    quote: "Stylish and simple. I feel confident wearing it.",
    image: "/images/customer3.jpg",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const setTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const active = testimonials[activeIndex];

  return (
    <section className="bg-black text-white">
      <div className="py-12 px-6 md:px-16 my-8">
        <h2 className="uppercase text-gray-300 text-lg font-medium tracking-widest my-8 mb-12">
          Our Customers
        </h2>
        <div className="flex flex-row items-start justify-around">
          <div className="flex-1 max-w-3xl">
            <p className="text-3xl text-gray-200 md:text-5xl font-normal leading-snug mb-6">
              <span className="mr-2">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
              {active.quote}
            </p>
            <p className="text-lg font-medium">{active.name}</p>
            <p className="text-sm text-gray-500">{active.location}</p>
          </div>
          <div className="flex flex-col items-center gap-4 relative">
            <button
              onClick={nextTestimonial}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center shadow"
              aria-label="Next"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {testimonials.map((item, idx) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                onClick={() => setTestimonial(idx)}
                className={`w-16 h-16 rounded-full object-cover  cursor-pointer transition ${
                  idx === activeIndex
                    ? " grayscale-0 w-36 h-36"
                    : " opacity-50 grayscale"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="mx-0" />
    </section>
  );
};

export default Testimonial;
