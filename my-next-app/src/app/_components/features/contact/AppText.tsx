// src/app/_components/features/content/AppText.tsx
import { texts } from "@/data/texts";
import parse from "html-react-parser";
import clsx from "clsx";

interface AppTextProps {
    name: keyof typeof texts;
    className?: string;
    clamp?: number; // مثلاً clamp={3} برای نمایش فقط ۳ خط
}

const variantClasses: Record<string, string> = {
    title: "text-4xl md:text-5xl font-bold",
    subtitle: "text-2xl md:text-3xl font-semibold",
    body: "text-base md:text-lg leading-relaxed",
    caption: "text-sm text-gray-500",
    small: "text-xs text-gray-400",
};

export default function AppText({ name, className, clamp }: AppTextProps) {
    const item = texts[name];

    // // اگر متن پیدا نشد — خطای واضح
    // if (!item) {
    //     if (process.env.NODE_ENV === "development") {
    //         console.error(`AppText: متنی با نام "${String(name)}" در texts.ts پیدا نشد!`);
    //     }
    //     return (
    //         <p className="text-red-600 font-medium">
    //             [متن "{String(name)}" یافت نشد]
    //         </p>
    //     );
    // }

    // تبدیل تگ‌های HTML به React
    const parsedContent = parse(item.content);

    return (
        <div
            className={clsx(
                "text-gray-700",
                variantClasses[item.variant] || variantClasses.body, // پیش‌فرض body
                clamp && `line-clamp-${clamp}`,
                "prose prose-lg max-w-none", // برای استایل بهتر لیست، لینک و ...
                className
            )}
        >
            {parsedContent}
        </div>
    );
}