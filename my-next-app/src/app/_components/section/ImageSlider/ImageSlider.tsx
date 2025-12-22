"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageSliderProps } from "./imageslaider.type";

export default function ImageSlider({
    images,
    height = 400,
    maxWidth = "max-w-4xl",
}: ImageSliderProps) {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div
            className={`relative w-full ${maxWidth} mx-auto overflow-hidden rounded-2xl shadow-xl`}
            style={{ height }}
        >
            {/* Image */}
            <Image
                src={images[index]}
                alt="slider image"
                fill
                sizes="100vw"
                className="object-cover transition-opacity duration-500"
                priority
            />

            {/* Left Button */}
            <button
                onClick={prev}
                aria-label="Previous image"
                className="
    absolute left-4 top-1/2 -translate-y-1/2
    w-12 h-12 rounded-full
    flex items-center justify-center

    bg-gradient-to-br from-cyan-400/80 to-blue-600/80
    text-white
    backdrop-blur-md
    shadow-lg shadow-blue-500/40

    hover:scale-110 active:scale-95
    transition-all duration-300
  "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>



            {/* Right Button */}
            <button
                onClick={next}
                aria-label="Next image"
                className="
    absolute right-4 top-1/2 -translate-y-1/2
    w-12 h-12 rounded-full
    flex items-center justify-center

    bg-gradient-to-br from-purple-500/80 to-pink-600/80
    text-white
    backdrop-blur-md
    shadow-lg shadow-pink-500/40

    hover:scale-110 active:scale-95
    transition-all duration-300
  "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>


        </div>
    );
}
