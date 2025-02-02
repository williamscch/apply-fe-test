import { cn } from "@/utils/cn";

interface LabelProps {
  htmlFor: string;
  children: string;
  className?: string;
}

export default function Label({
  htmlFor,
  children,
  className = "",
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-xl leading-tight font-bold", className)}
    >
      {children}
    </label>
  );
}
