interface TextProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "bold";
  color?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function Text({
  children,
  variant = "p",
  className = "",
}: TextProps) {
  const variantStyles = {
    h1: "text-2xl md:text-4xl font-bold",
    h2: "text-xl md:text-2xl font-bold",
    h3: "text-xl font-bold",
    h4: "text-lg font-bold",
    h5: "text-base font-bold text-text_neutral",
    p: `text-base font-normal text-text_neutral`,
    span: `text-lg font-normal`,
  };

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}
