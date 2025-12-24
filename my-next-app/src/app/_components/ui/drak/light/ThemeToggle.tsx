"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
  fixed
  top-[-10px] sm:top-2
  right-6
  z-[9999]
  flex items-center justify-center
  w-14 h-14
  rounded-full
  bg-transparent
  text-[#d4af37]
  hover:text-[#e6c766]
  transition-all duration-200
"



            aria-label="Toggle theme"
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
