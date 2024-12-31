export interface SelectProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string;
}
export default function Select({
  id,
  label,
  value,
  options,
  onChange,
  className,
}: SelectProps) {
  return (
    <select
      className={`${"border-none outline-none appearance-none bg-transparent text-xl px-4 cursor-pointer"} ${className}`}
      value={value}
      inputMode="text"
      id={id}
      name={`${id}-select`}
      onChange={(e) => onChange(e.target.value)}
      aria-label={label}
    >
      <option value="">All</option>

      {options?.map((e, i) => (
        <option key={e + i} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
}
