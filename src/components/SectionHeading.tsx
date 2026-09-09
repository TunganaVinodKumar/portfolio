import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={cn(
        "mb-14",
        isCenter
          ? "text-center max-w-3xl mx-auto flex flex-col items-center"
          : "max-w-2xl text-left",
        className,
      )}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-[#4361ee]/25 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-[#4361ee] tracking-wider uppercase mb-4 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4361ee] opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4361ee]"></span>
        </span>
        {eyebrow}
      </div>

      <div className="relative inline-block pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-display">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 h-1 rounded-full bg-gradient-to-r from-accent via-accent-cyan to-purple-500 shadow-[0_0_12px_rgba(67,97,238,0.6)]",
            isCenter ? "left-1/2 -translate-x-1/2 w-20 sm:w-24" : "left-0 w-20",
          )}
        />
      </div>

      {subtitle && (
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
