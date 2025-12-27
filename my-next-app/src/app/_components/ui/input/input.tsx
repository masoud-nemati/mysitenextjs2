"use client";
import React, { forwardRef, useState } from "react";
import { InputProps } from "./input.type";
import classNames from "classnames";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      compsize,
      color,
      variant,
      shape,
      isdisabled = false,
      isFullWidth,
      type = "text",
      label = "",
      helperText = "",
      byIcon = false,
      icon,
      id,
      className,
      ...res
    },
    ref
  ) => {
    const inputClasses = classNames(
      "input",
      className,
      { "w-full": isFullWidth },
      { [`input--${variant}`]: variant },
      { [`input--${color}`]: color },
      { [`input--${compsize}`]: compsize },
      { [`input--${shape}`]: shape },
      { "input--icon": byIcon }
    );

    return (
      <div className="flex items-center">
        {label && <label htmlFor={id} className="input--label">{label}</label>}

        <input
          ref={ref}
          id={id}
          type={type}
          disabled={isdisabled}
          className={inputClasses}
          {...res}
        />

        {helperText && <span className="input--helpertext">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";