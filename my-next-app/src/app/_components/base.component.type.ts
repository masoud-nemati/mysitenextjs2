import { Color } from "./types/color.type";
import { Size } from "./types/size.type";  // فرض می‌کنیم size هم export شده با حرف بزرگ
import { Variant } from "./types/variant.type";

export type BaseComponent = {
  compsize?: Size,
  color?: Color,
  variant?: Variant,
  isdisabled?: boolean,
};