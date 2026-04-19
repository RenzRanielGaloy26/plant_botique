import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      {/* EMPTY CART STATE */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)]">
        {/* Icon Circle */}
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={36} className="text-gray-400" />
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h1>
        <p className="text-gray-400 text-sm mb-8">Looks like you haven't added any plants yet.</p>

        {/* CTA Button */}
        <Link
          to="/shop"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}