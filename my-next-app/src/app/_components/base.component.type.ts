import { color } from "./types/colortype";
import { size } from "./types/size.type";
import { Variant } from "./types/variant.type";




export type BaseComponent = {

    compsize?: size,
    color?: color,
    variant?: Variant,
    isdisabled?: boolean,



}