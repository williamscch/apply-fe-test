import Icon, { IconName } from "@/components/atoms/Icon";

interface LoaderProps {
  iconSize?: number;
  iconViewBox?: string;
  className?: string;
}

export default function Loader({
  iconSize = 150,
  iconViewBox = "0 0 64 64",
  className = "",
}: LoaderProps) {
  return (
    <div
      className={`flex-1 grid place-items-center py-16 ${className}`}
      role="status"
      aria-live="polite"
    >
      <Icon
        name={IconName.spinner}
        viewBox={iconViewBox}
        size={iconSize}
        className="animate-spin"
      />
    </div>
  );
}
