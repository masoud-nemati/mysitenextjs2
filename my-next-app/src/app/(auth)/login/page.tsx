"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/app/_components/ui/input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="relative w-full max-w-6xl h-[700px] md:h-[800px] rounded-3xl overflow-hidden shadow-2xl">
        {/* عکس پس‌زمینه — واضح‌تر (opacity بالاتر) */}
        <Image
          src="/images/img2/imglogin2.jpg"
          alt="Masoud Nemati"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          style={{ opacity: 0.65 }} // ← اینجا واضح‌تر شده (از 0.4 به 0.65)
        />

        {/* لایه گرادیان ملایم برای خوانایی متن — فقط از چپ (جایی که متن هست) تیره‌تر */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

        {/* محتوای اصلی — وسط چپ، خوانا و جذاب */}
        <div className="relative z-20 flex flex-col justify-center items-start h-full px-10 md:px-20 lg:px-40 text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Welcome to my site
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-pink-500 mb-10 drop-shadow-2xl">
            Masoud Nemati
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-md">
            Sign in with your email to continue <span className="text-gray-400">(optional)</span>
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
            <Input
              placeholder="Enter your email (optional)..."
              helperText="We'll never share your email"
              variant="info"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/15 backdrop-blur-md border-white/30 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500 text-lg py-6"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-pink-600/60 transition-all duration-300 transform hover:scale-105"
            >
              Visit Site
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}