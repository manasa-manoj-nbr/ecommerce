import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* CheckoutPage Component Displays the checkout page with address form and order summary.*/
const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Checkout";
  }, []);

  return (
    <section className="bg-black min-h-screen">
      <main className="w-full px-2 pt-32">
        {/* Back arrow and heading */}
        <div className="mt-12 mb-8 mx-4 lg:mx-24 flex items-center space-x-6 animate-fadeIn">
          <span
            onClick={() => navigate("/")}
            className="text-4xl mx-2 p-2 rounded-full bg-white/10 hover:bg-red-600/80 cursor-pointer hover:text-white transition duration-300 shadow-lg hover:scale-110 inline-block"
            role="button"
            tabIndex={0}
            aria-label="Go back to home"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") navigate("/");
            }}
          >
            &larr;
          </span>
          <span className="text-3xl font-medium text-white relative after:content-[''] after:block after:w-24 after:h-1 after:bg-red-500 after:rounded-full after:mt-1 after:animate-underline">
            Shipping Address
          </span>
        </div>
        {/* Main content: Address form and order summary */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 mx-4 lg:mx-24">
          <div className="flex flex-1 text-black">
            <AddressForm />
          </div>
          <div className="flex flex-1 text-black">
            <OrderSummary />
          </div>
        </div>
        <hr className="mt-36 border-gray-700" />
      </main>
      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both;
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

/**
 * AddressForm Component
 * Collects shipping address details from the user.
 */
const AddressForm: React.FC = () => (
  <form className="bg-gray-100 rounded-lg border-2 border-gray-300 p-6 flex flex-col gap-4 w-full">
    <div className="flex items-center gap-2 mb-2 lg:my-4">
      <span className="w-6 h-6 flex items-center justify-center mx-4">
        <span className="w-6 h-6 border-2 border-red-500 rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        </span>
      </span>
      <span className="font-medium text-xl">Add New Address</span>
    </div>
    <div className="flex flex-col lg:flex-row gap-4 lg:my-2">
      <input
        type="text"
        placeholder="First Name"
        className="border border-gray-300 rounded-md px-3 py-2 flex-1"
        required
        aria-label="First Name"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="border border-gray-300 rounded-md px-3 py-2 flex-1"
        required
        aria-label="Last Name"
      />
    </div>
    <input
      type="text"
      placeholder="Street Address"
      className="border border-gray-300 rounded-md px-3 py-2"
      required
      aria-label="Street Address"
    />
    <div className="flex flex-col lg:flex-row gap-4 lg:my-2">
      <input
        type="text"
        placeholder="Apt Number"
        className="border border-gray-300 rounded-md px-3 py-2 flex-1"
        aria-label="Apartment Number"
      />
      <input
        type="text"
        placeholder="State"
        className="border border-gray-300 rounded-md px-3 py-2 flex-1"
        required
        aria-label="State"
      />
      <input
        type="text"
        placeholder="Zip"
        className="border border-gray-300 rounded-md px-3 py-2 flex-1"
        required
        aria-label="Zip"
      />
    </div>
    <div className="flex flex-col lg:flex-row gap-4 mt-2">
      <button
        type="button"
        className="border border-gray-400 rounded-lg py-3 px-4 font-medium text-gray-700 hover:bg-gray-200 transition w-full lg:w-1/2 order-2 md:order-1"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="bg-black text-white rounded-lg py-3 px-4 font-medium hover:bg-red-600 transition w-full lg:w-1/2 order-1 md:order-2"
      >
        Save This Address
      </button>
    </div>
  </form>
);

/**
 * OrderSummary Component
 * Displays a summary of the order, including items, shipping, and total.
 */
const OrderSummary: React.FC = () => (
  <section className="bg-gray-100 mt-26 rounded-xl p-6 flex flex-col gap-4 min-w-[320px] w-full">
    <p className="text-base text-gray-700">
      By placing your order, you agree to our company{" "}
      <a href="#privacy" className="font-medium underline">
        Privacy policy
      </a>{" "}
      and{" "}
      <a href="#t&c" className="font-medium underline">
        Conditions of use
      </a>
      .
    </p>
    <hr className="border-gray-400" />
    <div className="text-gray-500">
      <h2 className="font-semibold text-xl mb-4 text-black">Order Summary</h2>
      <div className="flex justify-between text-lg mb-1">
        <span>Items - Silhouette No. 1 – Vermilion</span>
        <span>7,999</span>
      </div>
      <div className="flex justify-between text-lg mb-1">
        <span>Shipping and handling:</span>
        <span>200</span>
      </div>
      <div className="flex justify-between text-lg mb-1">
        <span>Before tax:</span>
        <span>6,599</span>
      </div>
      <div className="flex justify-between text-lg mb-1">
        <span>Tax Collected:</span>
        <span>1,400</span>
      </div>
    </div>
    <hr className="border-gray-400" />
    <div className="flex justify-between items-center font-medium text-2xl text-black">
      <span>Order Total:</span>
      <span>8,199</span>
    </div>
    <button className="mt-4 bg-black text-white w-full py-3 rounded-lg font-medium text-lg hover:bg-red-600 transition">
      Place Order
    </button>
  </section>
);

export default CheckoutPage;
