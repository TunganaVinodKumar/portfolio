import { cn } from "@/lib/utils";
import { useImageStatus } from "@/hooks/useImageStatus";
import { Code2 } from "lucide-react";

/**
 * Image container with a consistent 16/10 ratio and a sleek, visitor-friendly
 * fallback shown when a screenshot hasn't been uploaded yet.
 */
export function ProjectImage({
  src,
  alt,
  label,
  className,
  priority = false,
  aspectRatio = "16 / 9",
  fit = "contain",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  fit?: "contain" | "cover";
}) {
  const { ref, failed, onError } = useImageStatus(src);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50/90 shadow-inner group",
        className,
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {failed ? (
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 flex flex-col items-center justify-center p-6 text-center border border-slate-200/80"
          role="img"
          aria-label={alt}
        >
          <div aria-hidden="true" className="grid-fade absolute inset-0 opacity-40" />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-[#4361ee] shadow-sm group-hover:scale-110 transition-transform">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display text-base font-bold text-slate-900 block">{label}</span>
              <span className="text-xs text-slate-500 font-medium mt-0.5 block">
                Interactive Project View
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-slate-50/70 p-1">
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            ref={ref}
            onError={onError}
            className={cn(
              "h-full w-full rounded-lg transition-transform duration-700 ease-out group-hover:scale-105",
              fit === "contain" ? "object-contain" : "object-cover",
            )}
          />
        </div>
      )}
    </div>
  );
}
