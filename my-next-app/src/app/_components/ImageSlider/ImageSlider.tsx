"use client";

import { useState } from "react";
import Image from "next/image";

const ImageSlider = () => {
    const images = [
        "/images/imagslider/slaidimg.jpg",
        "/images/imagslider/bodyimg.jpg",
        "/images/imagslider/image.jpg",
        "/images/imagslider/Picsart10.jpg",
        "/images/imagslider/baner.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(true);

    const changeImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <>
            {showImage && (
                <div
                    className="
            relative 
            w-full 
            max-w-3xl 
            mx-auto 
            rounded-2xl 
            overflow-hidden 
            shadow-xl 
            cursor-pointer 
            group
          "
                    onClick={changeImage}
                >
                    {/* Fade Animation */}
                    <div className="transition-opacity duration-700 ease-in-out opacity-100">
                        <Image
                            className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                            src={images[currentIndex]}
                            alt="slideshow"
                            width={1000}
                            height={500}
                        />
                    </div>

                    {/* Overlay Text */}
                    <div
                        className="
              absolute inset-0 
              bg-black/30 
              flex items-center justify-center 
              text-white text-xl 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-500
            "
                    >
                        🔄 Click to Change
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageSlider;
