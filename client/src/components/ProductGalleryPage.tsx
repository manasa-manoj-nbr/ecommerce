
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const PRODUCTS_PER_PAGE = 15;

const ProductGalleryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


    useEffect(() => {
      document.title = "products";
    setLoading(true);
    fetch("https://eclypse.up.railway.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIdx = (page - 1) * PRODUCTS_PER_PAGE;
  const endIdx = startIdx + PRODUCTS_PER_PAGE;
  const visibleProducts = products.slice(startIdx, endIdx);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-start">
      <main className="w-full max-w-6xl px-2 pt-32 mb-8">
        <div className="mt-12 mb-8 flex items-center space-x-6 animate-fadeIn">
          <span
            onClick={() => navigate("/")}
            className="text-4xl mx-2 p-2 cursor-pointer rounded-full bg-white/10 hover:bg-red-600/80 hover:text-white transition duration-300 shadow-lg hover:scale-110 inline-block"
          >
            &larr;
          </span>
          <span className="text-3xl font-semibold text-white  relative after:content-[''] after:block after:w-24 after:h-1 after:bg-red-500 after:rounded-full after:mt-1 after:animate-underline">
            Product Gallery
          </span>
        </div>
        <div className="mx-2 lg:mx-0 bg-white/10 backdrop-blur-xl text-white rounded-2xl p-8 shadow-2xl border border-white/20 animate-fadeIn delay-200">
          {loading ? (
            <div className="text-center text-lg text-gray-300 py-12">
              Loading products...
            </div>
          ) : visibleProducts.length === 0 ? (
            <div className="text-center text-lg text-gray-300 py-12">
              No products found.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {visibleProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-black/70 border border-white/10 rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48  object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {product.name}
                    </h3>
                    <span className="font-bold text-red-400 text-xl">
                      ₹{product.price}
                    </span>
                  </div>
                ))}
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    page === 1
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  Previous
                </button>
                <span className="text-white font-semibold">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    page === totalPages
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  Next
                </button>
              </div>
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

export default ProductGalleryPage;
