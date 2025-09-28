"use client";
import { useState } from "react";
import ImageComponent from "@/app/_components/image/ImageComponent";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User email:", email);
    // اینجا بعداً می‌تونی وصل کنی به Firebase یا API
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center w-[1000px] h-[600px] mx-auto bg-gray-900 mt-8 rounded-2xl">
        {/* کانتینر اصلی */}
        <div className="w-[95%] max-w-[1200px] h-full bg-gray-900 rounded-2xl shadow-lg flex md:flex-row flex-col overflow-hidden">
          {/* ستون فرم */}
          <div className="flex-1 flex flex-col justify-center px-8 py-10">
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome Back</h1>
            <p className="mb-6 text-gray-300">Sign in with your email to continue</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold"
              >
                Login
              </button>
            </form>
          </div>

          {/* ستون عکس */}
        <div className="flex-1 flex items-center justify-center bg-gray-900 p-2 md:p-6">
  <ImageComponent
    src="/images/imglogin4.png"
    alt="Login"
    className="w-[400px] h-[600px] md:w-[600px] md:h-[600px] object-cover rounded-md"
  />
</div>

        </div>
      </div>
    </div>
  );
}
