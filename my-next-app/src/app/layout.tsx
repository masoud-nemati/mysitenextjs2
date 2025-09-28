import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Masoud nemati",
  description: "Frontend Developer & Theology Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen"  >
        {children}
      </body>
    </html>
  );
}
