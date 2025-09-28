import { InputHTMLAttributes } from "react";
import { BaseComponent } from "../base.component.type";


export type InputType = "text" | "number" | "password" | "email";
export type InputState = "default" | "focused" | "success" | "warning" | "error" | "disabled"

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  BaseComponent & {
    type?: InputType;
    state?: InputState;
    label?: string;
    isoutline?: boolean;
    isfullwidth?: boolean;
    helpertext?: string;
  };