import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import ThemeToggle from "@/app/_components/ui/drak/light/ThemeToggle";

export const metadata: Metadata = {
  title: "Masoud Nemati",
  description: "Frontend Developer & Theology Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning  className="dark">
      <body className="min-h-screen transition-colors duration-300">
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
