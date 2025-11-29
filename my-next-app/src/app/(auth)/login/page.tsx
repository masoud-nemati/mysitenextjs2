"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageComponent from "@/app/_components/image/ImageComponent";
import { Input } from "@/app/_components/input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User email (optional):", email); // فقط برای نمایش، اختیاری
    router.push("/"); // مسیر صفحه اصلی
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center shadow-fuchsia-600">
      <div className="flex items-center justify-center w-[1000px] h-[600px] mx-auto bg-gray-100 mt-8 rounded-2xl shadow-2xl">
        <div className="relative w-full h-full bg-gray-900 rounded-2xl flex md:flex-row flex-col overflow-hidden box-border">
          {/* ستون فرم */}
          <div className="flex-1 flex flex-col justify-center px-8 py-10">
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome my sait </h1>
            <h2 className="text-3xl font-bold mb-4 text-white">Masoud Nemati </h2>
            <p className="mb-6 text-gray-300">Sign in with your email to continue (optional)</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
              <Input
               placeholder="Enter your email (optional)..."
                helperText="We'll never share your email"
                 variant="info"
                onChange={(e) => setEmail(e.target.value)}
                // required حذف شد
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white w-80 py-2 rounded-sm font-semibold"
              >
                vizit
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
