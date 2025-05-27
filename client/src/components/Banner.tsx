import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
interface BannerProps {
  darkMode: boolean;
}

const Banner: React.FC<BannerProps> = () => {
  const [darkMode] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
  }, []);

  return (
    <section
      className={`relative w-full pt-32 ${darkMode ? "bg-black" : "bg-white"}`}
    >
      <div className=" z-10  mb-12 px-6 flex justify-between items-end">
        <div>
          <h1 className="md:text-9xl text-8xl font-normal text-white">
            Eclypse
            <sup className="md:text-5xl text-4xl pb-8">®</sup>
          </h1>
        </div>
        <div className="text-xl font-normal text-white">&copy; 2025</div>
      </div>

      <div className=" h-[400px] md:h-[600px]">
        <video
          ref={videoRef}
          className="w-full h-full  object-cover z-0 brightness-75"
          src="/images/banner1.mp4"
          autoPlay
          muted
          playsInline
        />
        <span className="absolute bottom-1/2 left-1/2 transform translate-x-1/4 translate-y-1/2 z-10 text-3xl md:text-4xl font-normal text-white bg-black bg-opacity-40 px-4 py-2 rounded">
          A silhouette worth remembering
        </span>
      </div>
      <section className="mt-44 px-8 max-w-[1000px]">
        <p className="text-5xl font-normal mb-6 leading-snug">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </p>
        <button className="group text-white py-2 mt-24 text-3xl font-normal hover:text-black hover:bg-slate-50 transition duration-500">
          <span className="inline-block border-b pb-2 border-white  transform transition-transform duration-500 group-hover:translate-x-3">
            Learn more about Eclypse
          </span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="ml-2 text-base transition-opacity duration-500 group-hover:opacity-0"
          />
        </button>
      </section>
    </section>
  );
};
export default Banner;
