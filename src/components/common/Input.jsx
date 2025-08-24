import React from "react";
import { twMerge } from "tailwind-merge";

function Input({
    value = "",
    placeholder = "",
    className,
    name
}) {
    const baseClass =
        "w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-main";

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
