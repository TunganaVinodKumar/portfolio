import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-40 active:translate-y-px whitespace-nowrap cursor-pointer shadow-md",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white shadow-[0_4px_16px_rgba(67,97,238,0.4)] hover:shadow-[0_8px_24px_rgba(67,97,238,0.6)] hover:-translate-y-0.5",
        secondary:
          "bg-gradient-to-r from-[#7209b7] to-[#f72585] text-white shadow-[0_4px_16px_rgba(114,9,183,0.35)] hover:shadow-[0_8px_24px_rgba(247,37,133,0.5)] hover:-translate-y-0.5",
        outline:
          "border border-border/80 bg-surface/70 text-foreground backdrop-blur-md hover:border-accent hover:bg-accent/15 hover:text-accent hover:-translate-y-0.5 shadow-sm",
        ghost: "text-muted-foreground hover:bg-surface-elevated hover:text-foreground shadow-none",
        soft: "bg-accent-soft text-accent border border-accent/25 hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = VariantProps<typeof actionVariants> & { children: ReactNode; className?: string };

export function ActionLink({
  variant,
  size,
  className,
  children,
  ...rest
}: Props & ComponentProps<"a">) {
  return (
    <a className={cn(actionVariants({ variant, size }), className)} {...rest}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant,
  size,
  className,
  children,
  type = "button",
  ...rest
}: Props & ComponentProps<"button">) {
  return (
    <button type={type} className={cn(actionVariants({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}
