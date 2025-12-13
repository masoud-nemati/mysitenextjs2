import React from "react"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button/button"
import { SmallBannerData } from "./small-baner.type"

interface SmallBannerProps {
    data: SmallBannerData
}

export const SmallBanner: React.FC<SmallBannerProps> = ({ data }) => {
    return (
        <div
            className="
        relative mx-auto w-full max-w-[900px]
        rounded-3xl overflow-hidden
        bg-[url('/images/items/small-banner-1.png')] bg-cover bg-center bg-no-repeat
        shadow-2xl py-10 px-6 md:px-12 lg:px-20 text-left text-white
        transition-transform duration-500 hover:scale-[1.02]
      ">
            {/* لایه‌ی گرادیانت نیمه‌شفاف */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* محتوا */}
            <div className="relative z-10 flex flex-col gap-3 max-w-md">
                <h5 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                    {data.title}
                </h5>

                <p className="text-base md:text-lg font-light leading-relaxed text-gray-200">
                    {data.description}
                </p>

                <Button
                    variant={data.buttonVariant || "success"}
                    className="
            !w-fit mt-4 bg-green-500 hover:bg-green-600
            text-white font-medium px-6 py-2.5 rounded-full
            shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
          ">
                    {data.buttonText}
                </Button>
            </div>
        </div>
    )
}
