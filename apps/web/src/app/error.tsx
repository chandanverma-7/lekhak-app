import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  label: string; // required a11y label
};

export function Button({
  variant = "primary",
  className,
  label,
  children,
  ...props
}: Props) {
  return (
    <button
      aria-label={label}
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "primary" &&
          "bg-black text-white hover:bg-gray-800 focus:ring-black",
        variant === "secondary" &&
          "bg-gray-200 hover:bg-gray-300 focus:ring-gray-400",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
