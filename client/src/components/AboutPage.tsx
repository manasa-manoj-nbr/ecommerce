import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-start">
      <main className="w-full max-w-3xl px-2 pt-32">
        <div className="mt-12 mb-8 flex items-center space-x-6 animate-fadeIn">
          <a href="/">
            <span className="text-4xl mx-2 p-2 rounded-full bg-white/10 hover:bg-red-600/80 hover:text-white transition duration-300 shadow-lg hover:scale-110 inline-block">
              &larr;
            </span>
          </a>
          <span className="text-3xl font-semibold text-white relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-500 after:rounded-full after:mt-1 after:animate-underline">
            About Us
          </span>
        </div>
        <div className="mx-2 lg:mx-0 bg-white/10 backdrop-blur-xl text-white rounded-2xl p-10 shadow-2xl space-y-8 border border-white/20 animate-fadeIn delay-200">
          <h2 className="text-4xl font-bold text-white drop-shadow">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            At <strong className="text-red-400">Eclypse</strong>, we believe art and design are not just about aesthetics — they’re about expressing your identity, your culture, and your values. Founded in 2024 by a team of passionate creators, we set out to redefine the way people experience online shopping.
          </p>

          <h2 className="text-2xl font-semibold text-gray-100 mt-6">What We Do</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            We curate unique, high-quality art pieces and handmade goods. Every product tells a story and supports independent artists and local businesses.
          </p>

          <h2 className="text-2xl font-semibold text-gray-100 mt-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg space-y-2 pl-4">
            <li className="transition-transform hover:scale-105 hover:text-red-400">Premium handcrafted products</li>
            <li className="transition-transform hover:scale-105 hover:text-red-400">Fast and reliable shipping</li>
            <li className="transition-transform hover:scale-105 hover:text-red-400">Secure checkout process</li>
            <li className="transition-transform hover:scale-105 hover:text-red-400">Dedicated customer support</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-100 mt-6">Connect With Us</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Got questions or feedback? Reach out at{" "}
            <a
              href="mailto:eclypse@gmail.com"
              className="text-red-400 underline hover:text-red-600 transition-colors"
            >
              eclypse@gmail.com
            </a>
          </p>
        </div>
      </main>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          @keyframes underline {
            from { width: 0; }
            to { width: 4rem; }
          }
          .after\\:animate-underline::after {
            animation: underline 1s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </section>
  );
};

export default AboutPage;
