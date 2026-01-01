"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"     // ← تغییر مهم: دنبال تم سیستم باشه
      enableSystem={true}       // ← حتماً true باشه
      disableTransitionOnChange // اختیاری: برای جلوگیری از فلش هنگام تغییر تم
    >
      {children}
    </ThemeProvider>
  );
}