import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WaitlistPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Waitlist";
  }, []);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      // backend
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-start">
      <main className="w-full max-w-xl px-2 pt-32">
        <div className="mt-12 mb-8 flex items-center space-x-6 animate-fadeIn">
          <span
            onClick={() => navigate("/")}
            className="text-4xl mx-2 p-2 rounded-full bg-white/10 hover:bg-red-600/80 hover:text-white cursor-pointer transition duration-300 shadow-lg hover:scale-110 inline-block"
          >
            &larr;
          </span>
          <span className="text-3xl font-semibold text-white relative after:content-[''] after:block after:w-24 after:h-1 after:bg-red-500 after:rounded-full after:mt-1 after:animate-underline">
            Join Our Waitlist
          </span>
        </div>
        <div className="mx-2 lg:mx-0 bg-white/10 backdrop-blur-xl text-white rounded-2xl p-10 shadow-2xl space-y-8 border border-white/20 animate-fadeIn delay-200">
          <h2 className="text-2xl font-bold text-white drop-shadow mb-2">
            Be First in Line
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            Our next collection is coming soon. Join the waitlist and be the
            first to know when we launch!
          </p>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 items-center"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="text-green-400 font-semibold text-lg mt-4 animate-fadeIn">
              Thank you for joining! You’ll be the first to know.
            </div>
          )}
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
            to { width: 6rem; }
          }
          .after\\:animate-underline::after {
            animation: underline 1s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </section>
  );
};

export default WaitlistPage;
