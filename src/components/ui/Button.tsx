// Button.tsx
import React, {
  forwardRef,
  ButtonHTMLAttributes,
  ReactNode,
  useMemo,
} from "react";

// definisi tipe props (ekstensi dari button HTML default)
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

// Komponen Button yang reusable
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      leftIcon,
      rightIcon,
      isLoading = false,
      className = "",
      disabled,
      ...rest
    },
    ref
  ) => {
    const { icon, iconPosition } = useMemo(() => {
      if (isLoading) {
        return {
          icon: <span className="loader animate-spin" />,
          iconPosition: "left" as const,
        };
      }
      if (leftIcon) return { icon: leftIcon, iconPosition: "left" as const };
      if (rightIcon) return { icon: rightIcon, iconPosition: "right" as const };
      return { icon: null, iconPosition: null };
    }, [isLoading, leftIcon, rightIcon]);

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={[
          "bg-[#00383C] hover:bg-[#0A6365] text-white px-6 py-2 rounded-full",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {icon && iconPosition === "left" && (
          <span className="inline-flex mr-2">{icon}</span>
        )}
        <span className={isLoading ? "opacity-0" : ""}>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
