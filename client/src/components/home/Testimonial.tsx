import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

/*Type definition for a testimonial.*/
interface TestimonialType {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
}

/*Testimonial Component: Fetches testimonials from the backend and displays them in a carousel format.*/
const Testimonial: React.FC = () => {
  // State for testimonials array
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  // State for currently active testimonial index
  const [activeIndex, setActiveIndex] = useState(0);
  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*Fetch testimonials from the backend API on component mount.*/
  useEffect(() => {
    fetch("https://eclypsee.up.railway.app/api/testimonials")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        return res.json();
      })
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  /*Move to the next testimonial in the list.*/
  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      testimonials.length > 0 ? (prev + 1) % testimonials.length : 0
    );
  };

  /*Set the active testimonial by index. @param index - Index of the testimonial to set as active */
  const setTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Loading state
  if (loading) {
    return (
      <section className="bg-black text-white py-12 px-6 md:px-16 my-8">
        <p>Loading testimonials...</p>
      </section>
    );
  }

  // Error or empty state
  if (error || testimonials.length === 0) {
    return (
      <section className="bg-black text-white py-12 px-6 md:px-16 my-8">
        <p>{error || "No testimonials found."}</p>
      </section>
    );
  }

  // Currently active testimonial
  const active = testimonials[activeIndex];

  return (
    <section className="bg-black text-white">
      <div className="py-12 px-6 md:px-16 my-8">
        <h2 className="uppercase text-gray-300 text-lg font-medium tracking-widest my-8 mb-12">
          Our Customers
        </h2>
        <div className="flex flex-row items-start justify-around">
          {/* Testimonial Text */}
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
          {/* Testimonial Avatars */}
          <div className="flex flex-col items-center gap-4 relative">
            <button
              onClick={nextTestimonial}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center shadow"
              aria-label="Next testimonial"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {testimonials.map((item, idx) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                onClick={() => setTestimonial(idx)}
                className={`w-16 h-16 rounded-full object-cover cursor-pointer transition ${
                  idx === activeIndex
                    ? "grayscale-0 w-36 h-36"
                    : "opacity-50 grayscale"
                }`}
                aria-current={idx === activeIndex}
                tabIndex={0}
                role="button"
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") setTestimonial(idx);
                }}
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
