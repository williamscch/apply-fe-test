import Icon from "@/components/atoms/Icon";
import Label from "@/components/atoms/Label";
import Select from "@/components/atoms/Select";

export interface DropdownProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  labelCn?: string;
  selectCn?: string;
}

export default function Dropdown({
  id,
  label,
  value,
  options,
  onChange,
  labelCn,
  selectCn,
}: DropdownProps) {
  return (
    <div className="relative flex gap-6 w-fit" id={`${id}-container`}>
      <Label className={labelCn} htmlFor={`${id}-select`}>
        {label}
      </Label>
      <Select
        className={selectCn}
        value={value}
        id={id}
        onChange={onChange}
        label={label}
        options={options}
      />
      <Icon
        name="dropdown"
        color="#8F8F8F"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
      />
    </div>
  );
}
