interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={`bg-surface_muted font-normal text-base text-text_contrast rounded px-2 py-1 ${className}`}
    >
      {label}
    </span>
  );
}
