import { InputProps } from "./input.type";
import classnames from "classnames";


export const Input: React.FC<InputProps> = (props) => {
  const {
    compsize,
    color,
    variant,
    isdisabled = false,
    type = "text",
    state = "default",
    label = "",
    helpertext = "",
    isoutline = false,
    isfullwidth = false,
    id,
    className,
    ...rest
  } = props;

  const inputclasses=classnames(
       "input",
    className,
    {[ `aaaa--${color}`]:color },
    {[ `input--${compsize}`]:compsize},
    {[ `input--${variant}`]:variant},
    {[ `input--${state}`]:state},
    {"input--outline":isoutline},
    {"inout--full":isfullwidth,}
  )

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium" htmlFor={id}>
          {label}
        </label>
      )}
    <input
  id={id}
  type={type}
  disabled={isdisabled}
  className={inputclasses}
  {...rest}
/>
      {helpertext && <p className="text-xs text-gray-500">{helpertext}</p>}
    </div>
  );
};
