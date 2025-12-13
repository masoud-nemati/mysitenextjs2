import Image from "next/image";

type ImageComponentProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ImageComponent({
  src,
  alt,
  width = 400,
  height = 400,
  className = "",
}: ImageComponentProps) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
}
