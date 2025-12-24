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
    fixed top-6 right-6 z-[9999]
    flex items-center justify-center
    w-10 h-10
    rounded-full
    bg-gray-200 dark:bg-gray-800
    text-black dark:text-white
    shadow-md
    hover:scale-105
    transition-all duration-200
  "
>
  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
</button>

  );
}
