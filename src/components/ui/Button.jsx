import React from "react";
import Link from "next/link";

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  iconRight,
  href,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors";

  const sizeStyles = {
    default: "px-5 py-2",
    link: "p-0",
  };

  const variantStyles = {
    // Off-white background buttons
    primary: "bg-brand-red text-white hover:bg-brand-red-dark",
    secondary: "border-2 border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy hover:text-white",
    // Dark background buttons (navy/dark-navy)
    "secondary-light": "border-2 border-brand-off-white text-brand-off-white bg-transparent hover:bg-brand-off-white hover:text-brand-navy-dark",
    // Red background buttons
    "primary-white": "bg-white text-brand-red hover:bg-brand-off-white",
    "secondary-white": "border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-red",
    // Link styles
    link: "text-brand-navy hover:underline",
    "link-light": "text-brand-off-white hover:underline",
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size] || sizeStyles.default} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        {...props}
      >
        {children}
        {iconRight && <span className="ml-1">{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
      {iconRight && <span className="ml-1">{iconRight}</span>}
    </button>
  );
}
