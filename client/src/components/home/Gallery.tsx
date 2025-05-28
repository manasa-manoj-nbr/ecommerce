import React from "react";

const galleryItems1 = [
  {
    type: "video",
    src: "/videos/prop0.mp4",
    hoverImage: "/images/prop0hover.png",
  },
  {
    type: "image",
    src: "/images/prop1.jpg",
    hoverImage: "/images/prop1hover.png",
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
  // For mobile/tablet, move galleryItems1[1] to the start of galleryItems2 and hide the last image
  const mobileGallery = [
    galleryItems1[0], // video
    galleryItems1[1], // tall image
    ...galleryItems2.slice(0, 2), // first two images only
  ];

  return (
    <div className="bg-black flex justify-center py-12 px-2">
      <div className="w-full max-w-7xl">
        {/* Desktop/Large screens */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-8 px-2" style={{ height: 450 }}>
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-md h-full">
            <video
              className="w-full h-full object-cover transition-all duration-600"
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
          <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-md h-full">
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
        {/* Second row on large screens */}
        <div className="hidden md:grid grid-cols-3 gap-8 px-2">
          {galleryItems2.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-md h-[400px] w-full"
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover transition-all duration-500"
              />
              <img
                src={item.hoverImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-0 rotate-3 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet screens */}
        <div className="md:hidden flex flex-col gap-6 px-2">
          {mobileGallery.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-md w-full aspect-[4/3] max-h-[400px] justify-center items-center flex"
            >
              {item.type === "video" ? (
                <video
                  className="w-full h-full object-cover transition-all duration-600"
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full rounded-md object-cover transition-all duration-500"
                />
              )}
              <img
                src={item.hoverImage}
                alt=""
                className="absolute  w-full rounded-md h-full object-bottom opacity-0 rotate-3 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
