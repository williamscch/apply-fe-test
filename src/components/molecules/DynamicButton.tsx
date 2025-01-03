"use client";

import Button from "@/components/atoms/Button";

interface DynamicButtonProps {
  label: string;
  onClick: () => void;
  variant?: "default" | "outline" | "icon";
  className?: string;
  disabled?: boolean;
}

export default function DynamicButton({
  label,
  onClick,
  variant = "default",
  className = "",
  disabled = false,
}: DynamicButtonProps) {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
