"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiLoader3Fill } from "react-icons/ri";

export default function LoginForm() {
  const {register,formState:{errors},handleSubmit} = useForm();
  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleLogin = (data) => {
   console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-2xl rounded-2xl w-[380px] p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-5"
        >
          <div>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
          disabled={isSubmitting}
            type="submit"
            className="w-full disabled:cursor-not-allowed relative bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
          >
            <span className={`${isSubmitting && "opacity-0"}`}>Login</span>
            {isSubmitting && <RiLoader3Fill className="text-2xl absolute top-1/2 left-1/2 -translate-1/2 animate-spin"/>}
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
