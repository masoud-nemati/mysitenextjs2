'use client'
import { useEffect, useState } from 'react'
// import "@/tailwind/component/scrollToTop.css" // مسیر درست

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <button
            className={`
    fixed bottom-6 right-6 z-50
    w-12 h-12 rounded-full
    flex items-center justify-center
    bg-black text-white text-2xl
    shadow-xl cursor-pointer
    transition-all duration-300
    hover:bg-gray-800 hover:scale-110
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
  `}
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }
        >
            ↑
        </button>


    )
}

export default ScrollToTop
