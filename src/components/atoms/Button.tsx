export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "outline" | "icon";
}

export default function Button({
  onClick,
  children,
  disabled = false,
  className,
  variant = "default",
}: ButtonProps) {
  const baseClass =
    "w-fit px-6 py-4 text-base font-bold leading-none rounded-lg focus:outline-none hover:opacity-75 disabled:opacity-75 disabled:cursor-not-allowed";

  const variantClasses = {
    default: "bg-surface_interactive border-none text-text_light",
    outline: "bg-transparent border border-border_contrast text-text_contrast",
    icon: "h-fit bg-transparent p-2",
  };

  return (
    <button
      type="button"
      className={`${baseClass} ${variantClasses[variant]} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
