import React from "react";
import { twMerge } from "tailwind-merge";

function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) {
    const variantClasses = {
        primary: "bg-main text-white",
        secondary: "bg-gray-200 text-gray-900",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
    };

    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const baseClass =
        "rounded-md font-medium transition-colors focus:outline-none focus:ring-main focus:ring-2 focus:ring-offset-2";

    const buttonClass = twMerge(
        baseClass,
        variantClasses[variant],
        sizeClasses[size],
        className
    );

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
}

export default Button;
