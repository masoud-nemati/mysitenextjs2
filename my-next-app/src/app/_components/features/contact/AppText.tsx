// src/app/_components/features/content/AppText.tsx
import { texts } from "@/data/texts";
import parse from "html-react-parser";
import clsx from "clsx";

// اینجا نوع name رو مستقیم از کلیدهای texts می‌گیریم
interface AppTextProps {
  name: keyof typeof texts;  // ← همین خط کافی است، خطا کاملاً می‌ره
  className?: string;
}

export default function AppText({ name, className }: AppTextProps) {
  const { content } = texts[name];
  const parsed = parse(content);

  return (
    <div className={clsx("text-gray-700 leading-relaxed", className)}>
      {parsed}
    </div>
  );
}