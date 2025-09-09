import { FaHandshake, FaUsers, FaGlobe } from "react-icons/fa";
import PublicNav from "../_components/PublicNav";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Navbar */}
      <PublicNav />

      {/* About Hero */}
      <section className="text-center px-6 py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">About My Bazarr</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          My Bazarr is more than just an app — it’s a community-powered
          marketplace where everyone can buy, sell, and connect with trust.
        </p>
      </section>

      {/* Why My Bazarr */}
      <section className="px-8 py-16 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Why My Bazarr?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <FaHandshake className="text-blue-600 text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Trusted Marketplace</h4>
            <p className="text-gray-600">
              Connect directly with real people and trade safely.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">For Everyone</h4>
            <p className="text-gray-600">
              Whether you’re a seller or a buyer, My Bazarr is built for you.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <FaGlobe className="text-blue-600 text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Global Reach</h4>
            <p className="text-gray-600">
              List products and reach customers beyond your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* How It Works */}
      {/* How It Works */}
      <section className="px-8 py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-12">How It Works</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-3xl font-bold text-blue-600 mb-4">1</span>
            <h4 className="text-xl font-semibold mb-2">Create Account</h4>
            <p className="text-gray-600">
              Sign up quickly and verify with OTP for a secure start.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-3xl font-bold text-blue-600 mb-4">2</span>
            <h4 className="text-xl font-semibold mb-2">Upload Products</h4>
            <p className="text-gray-600">
              List items with photos, details, and pricing in minutes.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-3xl font-bold text-blue-600 mb-4">3</span>
            <h4 className="text-xl font-semibold mb-2">Shop & Order</h4>
            <p className="text-gray-600">
              Add products to cart, purchase securely, and receive updates.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-3xl font-bold text-blue-600 mb-4">4</span>
            <h4 className="text-xl font-semibold mb-2">Delivery & Payment</h4>
            <p className="text-gray-600">
              Track your orders with email updates and enjoy safe payments.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-auto px-8 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} My Bazarr. All rights reserved.</p>
      </footer>
    </div>
  );
}
