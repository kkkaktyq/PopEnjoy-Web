import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, size = "md", variant = "default", className = "", ...props }) => {
  const sizeClass = size === "sm" ? "px-3 py-1 text-sm" : size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2";
  const variantClass = variant === "outline" ? "border bg-transparent" : "bg-primary text-white";
  return (
    <button className={`${sizeClass} ${variantClass} rounded-md ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

