import { FaShoppingBag, FaUsers, FaBolt } from "react-icons/fa";
import PublicNav from "../_components/PublicNav";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Navbar */}
      <PublicNav />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6 py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to My Bazarr
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          A community marketplace where anyone can sell their products and
          discover great deals.
        </p>
        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-white font-semibold rounded-lg shadow hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-16 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">About My Bazarr</h3>
        <p className="text-lg text-gray-600">
          My Bazarr is a peer-to-peer marketplace where users can upload their
          products for sale, connect with buyers, and explore a wide variety of
          items — all in one place.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold mb-12 text-center">Features</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <FaShoppingBag className="text-blue-600 text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Easy Listings</h4>
            <p className="text-gray-600">
              Upload products instantly and start selling to buyers across the
              platform.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Community Driven</h4>
            <p className="text-gray-600">
              Buy and sell directly with real people in a trusted community
              marketplace.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <FaBolt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Fast & Secure</h4>
            <p className="text-gray-600">
              Enjoy quick, safe transactions with buyer and seller protection.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-white shadow-inner mt-auto px-8 py-6 text-center text-gray-600"
      >
        <p>© {new Date().getFullYear()} My Bazarr. All rights reserved.</p>
      </footer>
    </div>
  );
}
