import { InputHTMLAttributes, RefAttributes } from "react";
import { BaseComponent } from "@/app/_components/base.component.type";


export type InputType = "text" | "number" | "password" | "email";
export type InputState = "default" | "focused" | "success" | "warning" | "error" | "disabled"
export type InputShape = "default" | "wide" | "pill" | "full";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  BaseComponent &
  RefAttributes<HTMLInputElement> &

{
  type?: InputType,
  shape?: InputShape,
  label?: string,
  isFullWidth?: boolean,
  byIcon?: boolean,
  icon?: React.ReactNode,
  helperText?: string,
};