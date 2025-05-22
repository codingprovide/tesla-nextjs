import { twMerge } from "tailwind-merge";
import { Image } from "lucide-react";

export default function PlaceholderImage({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Image
      className={twMerge(
        "w-[220px] h-[124px] bg-gray-200 border border-dashed border-gray-400 rounded-sm text-gray-500",
        className
      )}
    />
  );
}
