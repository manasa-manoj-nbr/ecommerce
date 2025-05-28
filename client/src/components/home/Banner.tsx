import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Banner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section className="relative w-full pt-32 bg-black">
      <div className="z-10 mb-12 px-6 flex justify-between items-end">
        <div>
          <h1 className="md:text-9xl text-8xl font-normal text-white">
            Eclypse
            <sup className="md:text-5xl text-4xl pb-8">®</sup>
          </h1>
        </div>
        <div className="text-xl font-normal text-white">&copy; 2025</div>
      </div>

      <div className="h-[400px] md:h-[600px] relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover z-0 brightness-75"
                  src="/images/banner1.mp4"
                  loop
          autoPlay
          muted
          playsInline
        />
        <span className="absolute bottom-8 right-8 z-10 text-3xl md:text-4xl font-normal text-white bg-black bg-opacity-40 px-4 py-2 rounded">
          A silhouette worth remembering
        </span>
      </div>

      <section className="md:mt-44 mt-32 px-8 md:max-w-[1000px] max-w-[500px]">
        <p className="md:text-5xl text-2xl font-normal mb-6 leading-snug text-white">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </p>
        <button className="group text-white py-2 md:mt-24 mt-8 md:text-3xl text-2xl font-normal hover:text-black hover:bg-slate-50 transition duration-500">
          <span className="inline-block border-b pb-2 border-white transform transition-transform duration-500 group-hover:translate-x-3">
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
