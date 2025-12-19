// src/app/_components/section/image/img.type.ts
import { ComponentPropsWithoutRef } from "react";
import { clsx, ClassValue } from "clsx"; // اگر از clsx استفاده می‌کنی

export interface ImageData extends ComponentPropsWithoutRef<"img"> {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  // className حتماً string باشه
  className?: string; // یا ClassValue اگر از clsx استفاده می‌کنی
}