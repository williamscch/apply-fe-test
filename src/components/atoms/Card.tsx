import { cn } from "@/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={cn(
        "w-full h-full border-[0.5px] border-border_neutral rounded-2xl overflow-hidden p-6 flex flex-col",
        className
      )}
    >
      {children}
    </article>
  );
}
