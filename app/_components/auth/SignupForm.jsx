"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiLoader3Fill } from "react-icons/ri";
import OTPInput from "react-otp-input";
import VerifyOtpForm from "./VerifyOtpForm";
import { getOtp } from "@/actions/user";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [isOtp,setIsOtp] = useState(false);
  const handleSignup = async (data) => {
    try{
      const res = await getOtp(data.email)
      console.log(res)
      if(res.emailSent) setIsOtp(true);
    }catch(err){
      alert('failed to send otp');
    }
  };

  if(isOtp) return <VerifyOtpForm email={getValues('email')} name={getValues('name')}/>

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl w-[380px] p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form
          onSubmit={handleSubmit(handleSignup)}
          className="flex flex-col gap-5"
        >
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Full name is required" })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full relative bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md"
          >
            <span className={`${isSubmitting && "opacity-0"}`}>Sign Up</span>
            {isSubmitting && (
              <RiLoader3Fill className="text-2xl absolute top-1/2 left-1/2 -translate-1/2 animate-spin" />
            )}
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
