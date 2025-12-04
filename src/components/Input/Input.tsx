import { cn } from "@/utils/utils";
import type React from "react";
import type { ReactNode } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label?: string;
  error?: boolean;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  startIcon,
  endIcon,
  label,
  error,
  helperText,
  className,
  id,
  ...props
}) => {
  const inputId = id || label?.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label htmlFor={inputId} className="font-medium text-gray-800">
          {label}
        </label>
      )}
      <div className="relative w-full">
        {startIcon && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
            {startIcon}
          </span>
        )}
        <input
          id={inputId}
          className={cn(
            "w-full rounded-md border transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed",
            startIcon ? "pl-8" : "",
            endIcon ? "pr-8" : "",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500",
            className
          )}
          {...props}
        />
        {endIcon && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            {endIcon}
          </span>
        )}
      </div>
      {helperText && (
        <span
          className={cn(
            "text-sm mt-1",
            error ? "text-red-500" : "text-gray-500"
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
