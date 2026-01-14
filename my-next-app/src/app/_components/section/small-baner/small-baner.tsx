import React from "react"
import { Button } from "@/app/_components/ui/button/button"
import { SmallBannerData } from "./small-baner.type"

interface SmallBannerProps {
    data: SmallBannerData
}

export const SmallBanner: React.FC<SmallBannerProps> = ({ data }) => {
    return (
        <div
            className="
        relative mx-auto w-full
        max-w-[1200px]
        min-h-[220px] md:min-h-[260px]
        rounded-3xl overflow-hidden
        bg-[url('/images/items/small-banner-1.png')]
        bg-cover bg-center bg-no-repeat
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]
        px-6 py-10 md:px-14 lg:px-20
        transition-all duration-500
        hover:scale-[1.015] hover:shadow-[0_35px_80px_-20px_rgba(0,0,0,0.7)]
      "
        >
            {/* Gradient overlay */}
            <div
                className="
          absolute inset-0
          bg-gradient-to-r
          from-black/80 via-black/50 to-transparent
          md:from-black/70 md:via-black/40
        "
            />

            {/* Content */}
            <div
                className="
          relative z-10
          flex flex-col gap-4
          max-w-md
          text-center md:text-left
        "
            >
                <h5 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white/95 drop-shadow-lg">
                    {data.title}
                </h5>

                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                    {data.description}
                </p>

                <Button
                    variant={data.buttonVariant || "success"}
                    className="
            mt-4 w-fit mx-auto md:mx-0
            px-7 py-3 rounded-full
            text-white font-semibold
            bg-green-500 hover:bg-green-600
            shadow-md hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-0.5
          "
                >
                    {data.buttonText}
                </Button>
            </div>
        </div>
    )
}
