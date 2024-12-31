import React from "react";
import DropdownIcon from "../icons/DropdownIcon";

export interface InputSelectProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function InputSelect({
  id,
  label,
  value,
  options,
  onChange,
}: InputSelectProps) {
  return (
    <div className="relative flex gap-6 w-fit" id={id + "container"}>
      <label
        className="text-xl leading-tight font-bold pr-6 border-r border-border_contrast"
        htmlFor={id + "select"}
      >
        {label}
      </label>
      <select
        className="border-none outline-none appearance-none bg-transparent text-xl px-4 cursor-pointer"
        value={value}
        inputMode="text"
        id={id + "select"}
        name={id}
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
      <DropdownIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
