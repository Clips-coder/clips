import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none disabled:opacity-50";
    const variants = {
      default: "bg-purple-600 text-white hover:bg-purple-700",
      outline: "border border-gray-700 bg-transparent hover:bg-gray-800",
      ghost: "hover:bg-gray-800",
    };
    const sizes = {
      default: "px-6 py-2.5",
      sm: "px-4 py-1.5 text-sm",
      lg: "px-8 py-3 text-lg",
    };
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
