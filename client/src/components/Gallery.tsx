import React from "react";

const galleryItems1 = [
  {
    type: "video",
    src: "/videos/prop0.mp4",
    hoverImage: "/images/prop0hover.png",
    rowSpan: 2, // This image spans two rows
  },
  {
    type: "image",
    src: "/images/prop1.jpg",
    hoverImage: "/images/prop1hover.png",
    rowSpan: 2,
  },
];

const galleryItems2 = [
  {
    type: "image",
    src: "/images/prop2.jpg",
    hoverImage: "/images/prop2hover.png",
  },
  {
    type: "image",
    src: "/images/prop3.jpg",
    hoverImage: "/images/prop3hover.png",
  },
  {
    type: "image",
    src: "/images/prop4.jpg",
    hoverImage: "/images/prop4hover.png",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-black flex justify-center py-16 px-4">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-12 mb-8 px-8" style={{ height: 550 }}>
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-md h-full">
            <video
              className=" w-full h-full object-cover transition-all duration-600"
              src={galleryItems1[0].src}
              autoPlay
              loop
              muted
              playsInline
            />
            <img
              src={galleryItems1[0].hoverImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-600"
            />
          </div>
          <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-md  h-full">
            <img
              src={galleryItems1[1].src}
              alt=""
              className="w-full h-full object-cover transition-all duration-700"
            />
            <img
              src={galleryItems1[1].hoverImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-0 rotate-3 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
        {/* Second row: 3 columns */}
        <div className="grid grid-cols-3 gap-12 px-8" style={{ height: 450 }}>
          {galleryItems2.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-md h-full"
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover transition-all duration-500"
              />
              <img
                src={item.hoverImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-0  rotate-3 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
          </div>
    </div>
  );
};
export default Gallery;
