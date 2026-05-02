import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-turquoise-900 text-white hover:bg-turquoise-800 focus:ring-turquoise-700",
    secondary:
      "bg-citrus-400 text-gray-900 hover:bg-citrus-500 focus:ring-citrus-500",
    outline:
      "border border-turquoise-900 text-turquoise-900 hover:bg-turquoise-50 focus:ring-turquoise-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  // Link の場合
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // 通常のボタン
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}