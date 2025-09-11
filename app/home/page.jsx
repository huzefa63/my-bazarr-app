import { FaShoppingBag, FaUsers, FaBolt } from "react-icons/fa";
import PublicNav from "../_components/PublicNav";
import Link from "next/link";
import * as motion from "motion/react-client";
import Animate from "../_components/UI/Animate";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Navbar */}
      <PublicNav />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-6 md:px-16 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        {/* Hero Text */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <Animate>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to My Bazarr
            </h2>
          </Animate>
          <Animate delay={0.1}>
            <p className="text-lg md:text-xl">
              A community marketplace where anyone can sell their products and
              discover great deals.
            </p>
          </Animate>
          <div className="space-x-4 flex">
            <Animate delay={0.2}>
              <Link
                href="/auth/login"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
            </Animate>
            <Animate delay={0.3}>
              <Link
                href="/about"
                className="px-6 py-3 border border-white font-semibold rounded-lg shadow hover:bg-white hover:text-blue-600 transition"
              >
                Learn More
              </Link>
            </Animate>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Animate type="left">
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
              alt="Marketplace illustration"
              className="rounded-3xl shadow-lg object-cover w-full max-w-lg"
            />
          </Animate>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-6 md:px-16 py-16  mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* About Image */}
        <div className=" w-full h-84 flex justify-center">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg" // <-- replace with your image path
            alt="About My Bazarr"
            className="rounded-3xl object-cover w-full max-w-md"
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-3xl font-bold">About My Bazarr</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            My Bazarr is a peer-to-peer marketplace where users can upload their
            products for sale, connect with buyers, and explore a wide variety
            of items — all in one place.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-16 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold mb-12 text-center">Features</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Animate onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-lg transition">
              <FaShoppingBag className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Easy Listings</h4>
              <p className="text-gray-600">
                Upload products instantly and start selling to buyers across the
                platform.
              </p>
            </div>
          </Animate>
          <Animate delay={0.1} onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-lg transition">
              <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Community Driven</h4>
              <p className="text-gray-600">
                Buy and sell directly with real people in a trusted community
                marketplace.
              </p>
            </div>
          </Animate>
          <Animate delay={0.2} onView distance="20px">
            <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-lg transition">
              <FaBolt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Fast & Secure</h4>
              <p className="text-gray-600">
                Enjoy quick, safe transactions with buyer and seller protection.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-auto px-6 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} My Bazarr. All rights reserved.</p>
      </footer>
    </div>
  );
}
