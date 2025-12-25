import { ButtonHTMLAttributes } from "react";
import { BaseComponent } from "@/app/_components/base.component.type";

export type ButtonState = "primary" |"default" | "link" | "outline";
export type ButtonShape = "default" | "wide" | "square" | "pill" | "full";
export type ButtonSize = "sm" | "md" | "lg"| "xs"| "xl";

export type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
  BaseComponent & {
    compSize?: ButtonSize;   // ✅ اضافه شد
    shape?: ButtonShape;
    state?: ButtonState;

    isLoading?: boolean;
    loadingText?: string;
    animIcon?: boolean;
  };
