import type React from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/utils";

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
        <label htmlFor={inputId} className="font-medium text-gray-400">
          {label}
        </label>
      )}
      <div className="relative w-full">
        {startIcon && (
          <span className="absolute left-2 text-input top-1/2 -translate-y-1/2 pointer-events-none">
            {startIcon}
          </span>
        )}
        <input
          id={inputId}
          className={cn(
            "w-full border px-2 py-2 transition-all focus:outline-none focus:ring-1 disabled:opacity-50 disabled:cursor-not-allowed",
            startIcon ? "pl-10" : "",
            endIcon ? "pr-10" : "",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-input focus:ring-btn ",
            className
          )}
          {...props}
        />
        {endIcon && (
          <span className="absolute text-input right-2 top-1/2 -translate-y-1/2 pointer-events-none">
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
