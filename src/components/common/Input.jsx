import React from "react";
import { twMerge } from "tailwind-merge";

function Input({
    value = "",
    placeholder = "",
    className,
    name
}) {
    const baseClass =
        "w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-main bg-white hover:border-main focus:border-main border-gray-300 focus:ring-opacity-50";

    const inputClass = twMerge(baseClass, className);

    return (
        <input
            value={value}
            placeholder={placeholder}
            name={name}
            className={inputClass}
        />
    );
}

export default Input;
