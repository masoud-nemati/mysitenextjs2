// src/app/_components/ui/filter-select.tsx
"use client";

interface FilterSelectProps {
  label: string;
  paramName: string;
  options: (string | number)[];
  defaultValue: string | number;
  preferUrl?: boolean;
  syncOnMount?: boolean;
  suffix?: string;
}

export default function FilterSelect({
  label,
  paramName,
  options,
  defaultValue,
  preferUrl = true,
  syncOnMount = false,
}: FilterSelectProps) {
  // placeholder ساده
  return (
    <div>
      <label>{label}</label>
      <select defaultValue={defaultValue}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}