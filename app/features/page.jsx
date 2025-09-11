import {
  FaUserPlus,
  FaBoxOpen,
  FaShoppingCart,
  FaEnvelope,
  FaLock,
  FaTruck,
} from "react-icons/fa";
import PublicNav from "../_components/PublicNav";
import Animate from "../_components/UI/Animate"; // make sure you import your Animate component

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Navbar */}
      <PublicNav />

      {/* Hero */}
      <section className="text-center px-6 py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Features of My Bazarr
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Everything you need to buy, sell, and manage your products in one
          secure marketplace.
        </p>
      </section>

      {/* Core Features */}
      <section className="px-8 py-16 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Core Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Animate onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaUserPlus className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Account & OTP</h4>
              <p className="text-gray-600">
                Create your account easily with secure OTP verification.
              </p>
            </div>
          </Animate>
          <Animate delay={0.1} onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaBoxOpen className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Upload Products</h4>
              <p className="text-gray-600">
                List your items with photos and details in just minutes.
              </p>
            </div>
          </Animate>
          <Animate delay={0.2} onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaShoppingCart className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Add to Cart & Purchase</h4>
              <p className="text-gray-600">
                Buyers can add items to their cart and purchase securely.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Seller Tools */}
      <section className="px-8 py-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-12">Seller Tools</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Animate onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaEnvelope className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Receive Orders</h4>
              <p className="text-gray-600">
                Get instant order notifications and emails for every sale.
              </p>
            </div>
          </Animate>
          <Animate delay={0.1} onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaTruck className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Manage Orders</h4>
              <p className="text-gray-600">
                Mark orders as cancelled, shipped, or delivered with ease.
              </p>
            </div>
          </Animate>
          <Animate delay={0.2} onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaBoxOpen className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Filter Orders</h4>
              <p className="text-gray-600">
                Organize orders by status for smooth management.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Buyer Experience */}
      <section className="px-8 py-16 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Buyer Experience</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Animate onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaEnvelope className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Email Updates</h4>
              <p className="text-gray-600">
                Get emails when your orders are booked, shipped, or delivered.
              </p>
            </div>
          </Animate>
          <Animate delay={0.1} onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaLock className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Secure Payments</h4>
              <p className="text-gray-600">
                Shop with confidence using safe and reliable payment options.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-auto px-8 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} My Bazarr. All rights reserved.</p>
      </footer>
    </div>
  );
}
