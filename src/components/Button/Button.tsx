import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
  startIcon?: ReactNode;
  children: ReactNode;
  endIcon?: ReactNode;
}

const buttonStyle = cva(
  "inline-flex items-center justify-center gap-2 rounded-xs font-medium cursor-pointer disabled:cursor-not-allowed transition-all duration-300",
  {
    variants: {
      variant: {
        solid: "bg-btn text-btn-txt hover:bg-btn/90",
        outline: "border border-btn text-btn hover:bg-btn/5",
        subtle: "bg-btn/10 text-btn hover:bg-btn/20",
        ghost: "text-btn hover:bg-btn/10",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  startIcon,
  children,
  endIcon,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(buttonStyle({ variant, size }), className)}
      {...props}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
