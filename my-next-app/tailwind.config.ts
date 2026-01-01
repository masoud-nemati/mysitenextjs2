import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export const fontSize = {
  "3xs": "10px",
  "xxs": "12px",
  "xs": "13px",
  "sm": "14px",
  "md": "16px",
  "md-2": "15px",
  "lg": "18px",
  "xl": "20px",
  "2xl": "22px",
  "3xl": "58px",
};

export const boxShadow = {
  "1": "14px 14px 36px rgba(153, 153, 153, 0.22)",
  "2": "0px 45px 80px rgba(0, 0, 0, 0.04)",
  "3": "0px 47px 65px rgba(21, 28, 38, 0.1)",
  "4": "4px 6px 23px rgba(228, 92, 35, 0.1)",
  "5": "4px 4px 40px rgba(16, 24, 40, 0.1)",
  "6": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "inner": "inset 0px 40px 80px #FCFCFC",
};

export const colors = {
  // ... تمام رنگ‌های قبلی‌ت رو نگه داشتم (حذف نکردم)
  "shop-gray-200": "#CAD6EC",
  "shop-gray-400": "#9CA3AF",
  "shop-gray-600": "#718BC2",
  "primary-950": "#093048",

  primary: {
    DEFAULT: '#1aaeed',
    disabled: '#bbe7fc',
    light: '#7fd3fa',
    dark: '#066a9e',
    50: '#f0f9ff',
    100: '#e1f2fd',
    200: '#bbe7fc',
    300: '#7fd3fa',
    400: '#3cbef4',
    500: '#1aaeed',
    600: '#0685c3',
    700: '#066a9e',
    800: '#095983',
    900: '#0e4b6c',
    950: '#093048',
  },

  secondary: {
    DEFAULT: '#9aa8ba',
    disabled: '#f5f6f8',
    light: '#c7d2da',
    dark: '#717c91',
    50: '#f5f6f8',
    100: '#ecf1f3',
    200: '#dce4e9',
    300: '#c7d2da',
    400: '#afbdca',
    500: '#9aa8ba',
    600: '#8d99ae',
    700: '#717c91',
    800: '#5d6776',
    900: '#4e5561',
    950: '#2e3238',
  },

  success: { /* ... همان قبلی */ },
  danger: { /* ... همان قبلی */ },
  warning: {
    DEFAULT: '#ffb067',
    disabled: '#ffd4a9',
    light: '#ffd4a9',
    dark: '#ed5009',
    50: '#fff6ed',
    100: '#ffecd4',
    200: '#ffd4a9',
    300: '#ffb067',
    400: '#fe8c39',
    500: '#fc6b13',
    600: '#ed5009',
    700: '#c53a09',
    800: '#9c2f10',
    900: '#7e2910',
    950: '#441206',
  },

  info: { /* ... همان قبلی */ },
  "shop-gray": {
    50: "#F0F3F8",
    100: "#DDE4F0",
    200: "#CAD6EC",
    300: "#B2C2E1",
    400: "#9EB4E0",
    500: "#8C9EC5",
    600: "#718BC2",
    700: "#6B83B6",
    800: "#5971A3",
    900: "#425A8B",
    1000: "#0E224D",
    1100: "#253D4E",
    border: "#D5DFE4",
  },
  // ... بقیه رنگ‌ها (shop-white, shop-green و غیره) هم همون قبلی بمونن
  "shop-white": "#FFFFFF",
  "shop-green": "#00FF8A",
  "shop-yellow": "#FFF500",
  "shop-pink": "#FF6BC4",
  "shop-blue": "#3AA1FF",
  "shop-yellow2": "#F9D915",
  "shop-brown": "#AB5F3E",
  "shop-purple": "#9C79FF",
  "shop-disabled": "#CAD6EC",
  other: { /* ... همان قبلی */ }
};

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: fontSize,
    boxShadow: boxShadow,
    extend: {
      colors: colors,

       background: {
      DEFAULT: "hsl(var(--background))",
    },
    foreground: {
      DEFAULT: "hsl(var(--foreground))",
    },

      // ===== تنظیمات Tailwind Typography سفارشی =====
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            maxWidth: "none",
            direction: "rtl",
            textAlign: "justify",

            // پاراگراف‌ها
            p: {
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
              lineHeight: "2rem",
              fontSize: theme("fontSize.lg"),
            },

            // هدینگ‌ها
            h1: {
              color: theme("colors.warning.600"),
              fontWeight: "800",
              fontSize: theme("fontSize.3xl"),
              marginTop: theme("spacing.16"),
              marginBottom: theme("spacing.8"),
              textAlign: "right",
            },
            h2: {
              color: theme("colors.warning.600"), // نارنجی گرم
              fontWeight: "700",
              fontSize: theme("fontSize.3xl"),
              marginTop: theme("spacing.16"),
              marginBottom: theme("spacing.8"),
              textAlign: "right",
            },
            h3: {
              color: theme("colors.shop-gray.900"), // آبی تیره #425A8B
              fontWeight: "700",
              fontSize: theme("fontSize.2xl"),
              marginTop: theme("spacing.12"),
              marginBottom: theme("spacing.6"),
              textAlign: "right",
            },
            h4: {
              color: theme("colors.shop-gray.900"),
              fontWeight: "700",
              fontSize: theme("fontSize.xl"),
              marginTop: theme("spacing.10"),
              marginBottom: theme("spacing.4"),
              textAlign: "right",
            },

            // لیست‌ها
            ul: {
              paddingRight: theme("spacing.8"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },
            ol: {
              paddingRight: theme("spacing.8"),
            },
            li: {
              marginTop: theme("spacing.3"),
              marginBottom: theme("spacing.3"),
            },

            // نقل قول
            blockquote: {
              borderRightWidth: "4px",
              borderColor: theme("colors.warning.500"),
              paddingRight: theme("spacing.6"),
              fontStyle: "italic",
              color: theme("colors.gray.600"),
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.8"),
            },

            // لینک‌ها
            a: {
              color: theme("colors.primary.600"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.primary.700"),
              },
            },

            // بولد و استرانگ
            strong: {
              color: theme("colors.gray.900"),
              fontWeight: "700",
            },

            // خط افقی
            hr: {
              borderColor: theme("colors.secondary.300"),
              marginTop: theme("spacing.12"),
              marginBottom: theme("spacing.12"),
            },
          },
        },

        // نسخه بزرگ‌تر برای دسکتاپ
        lg: {
          css: {
            p: {
              fontSize: theme("fontSize.xl"),
              lineHeight: "2.2rem",
            },
            h2: {
              fontSize: "2.5rem",
            },
            h3: {
              fontSize: "1.875rem",
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography(), // فعال‌سازی پلاگین typography

    function ({ addVariant }: { addVariant: (name: string, value: string) => void }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

export default config;