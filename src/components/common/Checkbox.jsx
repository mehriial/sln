import React, { useState } from "react";

function Checkbox({ label, className = "" }) {
  const [checked, setChecked] = useState(false);

  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <span
        className={`
          w-5 h-5 flex-shrink-0 border border-gray-300 rounded-md flex items-center justify-center
          ${checked ? "bg-main border-main" : "bg-white"}
          transition-colors
        `}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <span className="text-gray-700 select-none">{label}</span>
    </label>
  );
}

export default Checkbox;
