import { SmallTagProps } from "./small-tag.types";


const SmallTag: React.FC<SmallTagProps> = ({ tag_type, children, className }) => {
    
    const tagClasses: Record<string, string> = {
        success: "bg-green-700",
        danger: "bg-red-600",
        warning: "bg-yellow-500",
    };

    const defaultText: Record<string, string> = {
        success: "New",
        danger: "Hot",
        warning: "",
    };

    const bgClass = tag_type ? tagClasses[tag_type] : "bg-gray-500";
    const text = tag_type ? defaultText[tag_type] : "";

    return (
        <span
            className={`label w-fit rounded-2xl px-3 py-1 text-sm text-white 
            ${bgClass} ${className || ""}`}
        >
            {children || text}
        </span>
    );
};
export default SmallTag
