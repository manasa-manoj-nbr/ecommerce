import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Silhouette No. 1 – Vermilion",
    price: 7999,
    image: "/images/product1.jpg",
    size: "M",
    quantity: 1,
  },
  {
    id: 2,
    name: "Form No. 3 – Obsidian Bloom",
    price: 6499,
    image: "/images/productt2.jpg",
    size: "M",
    quantity: 1,
  },
  // Add more items as needed
];

const CartPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Cart";
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-start">
      <main className="w-full max-w-3xl px-2 pt-32">
        <div className="mt-12 mb-8 flex items-center space-x-6 animate-fadeIn">
            <span onClick={() => navigate("/")} className="text-4xl mx-2 p-2 rounded-full bg-white/10 hover:bg-red-600/80 hover:text-white transition duration-300 shadow-lg cursor-pointer hover:scale-110 inline-block">
              &larr;
            </span>
          <span className="text-3xl font-semibold text-white relative after:content-[''] after:block after:w-24 after:h-1 after:bg-red-500 after:rounded-full after:mt-1 after:animate-underline">
            Your Cart
          </span>
        </div>
        <div className="mx-2 lg:mx-0 bg-white/10 backdrop-blur-xl text-white rounded-2xl p-10 shadow-2xl border border-white/20 animate-fadeIn delay-200 my-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-300 text-lg">Your cart is empty.</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-700">
                {cartItems.map(item => (
                  <li key={item.id} className="flex items-center py-6 gap-6">
                    <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-xl border-2 border-red-500" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Size: {item.size}</p>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-lg font-semibold text-red-400">₹{item.price}</div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-8">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-red-500">₹{total}</span>
              </div>
              <button className="mt-6 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-8 py-3 rounded-lg shadow-lg w-full">
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
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

export default CartPage;
