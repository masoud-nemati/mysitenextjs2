"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/app/_components/ui/input";
import Reveal from "@/app/_components/ui/animation/Reveal";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="relative w-full max-w-6xl h-[620px] md:h-[700px] rounded-3xl  shadow-2xl">

        {/* Background image */}
        <Image
          src="/images/img2/imglogin2.jpg"
          alt="Masoud Nemati"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.65 }}
        />

        {/* Gradient overlay (تمرکز سمت راست) */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />

        {/* Content wrapper */}
        <div className="relative z-20 h-full flex items-center justify-end">
          <div className="
    flex flex-col items-start text-left
    w-full max-w-sm
    px-6 sm:px-10 md:px-16 lg:px-24
    text-white
  ">
            <Reveal>
              <h1 className="text-xl sm:text-2xl font-semibold mb-1">
                Welcome
              </h1>
            </Reveal>


            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-5">
                Masoud Nemati
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-sm text-gray-300 mb-8">
                Sign in with your email to continue
              </p>
            </Reveal>


            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <Input
                placeholder="Email (optional)"
                helperText="We'll never share your email"
                variant="info"
                onChange={(e) => setEmail(e.target.value)}
                className="
    w-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    text-white placeholder-gray-400
    focus:border-pink-500 focus:ring-pink-500
    text-sm py-3.5
  "
              />

              <button
                type="submit"
                className="
    w-full
    bg-pink-600 hover:bg-pink-700
    text-white
    py-3.5
    rounded-xl
    font-medium
    text-sm
    shadow-lg hover:shadow-pink-600/40
    transition-all duration-300
  "
              >
                Visit Site
              </button>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
}
