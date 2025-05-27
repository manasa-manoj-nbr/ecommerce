import React, { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL"];
const ProductCard: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <section>
      <div className="my-28 mx-12">
        <h2 className="text-5xl font-normal mb-4">
          Silhouette No. 1-Vermilion
        </h2>
      </div>
      <div className="flex flex-col bg-slate-50 text-black lg:flex-row w-full gap-6">
        <div className="w-full h-[1000px] lg:flex-1/2 lg:w-1/2">
          <video
            className="w-full h-full object-cover"
            src="/videos/product0.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="w-full lg:w-1/2  flex flex-col gap-4">
          <p className="text-black font-semibold text-base my-12 mx-4 w-[600px]">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </p>

          <div className="flex gap-3 mx-4 ">
            {[
              "/images/product1.jpg",
              "/images/product2.jpg",
              "/images/product3.jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`thumb-${index}`}
                className="w-[250px] h-60 object-cover"
              />
            ))}
          </div>

          <hr className="my-8 mx-4 h-0.5 bg-slate-300" />

          {/* Price */}
          <div className="text-4xl mx-4 font-bold">
            ₹ 7,999{" "}
            <span className="text-lg font-normal text-gray-500">
              MRP incl. of all taxes
            </span>
          </div>
          <div>
            <div className="mx-4 my-8 flex items-center gap-6">
              <p className="text-2xl font-semibold text-gray-500">
                Please select a size
              </p>
              <a
                href="/chart"
                className="text-lg font-medium underline text-gray-500 hover:text-black"
              >
                Size chart
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-8 py-4 mx-4 border rounded-md ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 text-gray-600 font-semibold"
                  } hover:bg-black hover:text-white transition`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <hr className="my-8 mx-4 h-0.5 bg-slate-300" />
          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 mx-4 text-2xl font-medium">
            <button className="flex-1/4 w-1/4 py-5 border border-black text-black hover:bg-black hover:text-white transition rounded-md">
              Add to Cart
            </button>
            <button className="flex-3/4 w-3/4 py-5 mr-8  bg-black text-white hover:bg-red-600 transition rounded-md">
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
