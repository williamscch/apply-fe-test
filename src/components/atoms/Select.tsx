import { cn } from "@/utils/cn";

export interface SelectProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string;
  defaultOption?: { label: string; value: string };
}

export default function Select({
  id,
  label,
  value,
  options,
  onChange,
  className = "",
  defaultOption = { label: "All", value: "" },
}: SelectProps) {
  return (
    <select
      className={cn(
        "border-none outline-none appearance-none bg-transparent text-xl px-4 cursor-pointer",
        className
      )}
      value={value}
      inputMode="text"
      id={id}
      name={`${id}-select`}
      onChange={(e) => onChange(e.target.value)}
      aria-label={label}
    >
      <option value={defaultOption.value}>{defaultOption.label}</option>

      {options?.map((e, i) => (
        <option key={e + i} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
}
