import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Tracks whether an image failed to load, including errors that fire before
 * React hydration attaches its own onError handler.
 */
export function useImageStatus(src: string) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    const img = ref.current;
    if (!img) return;

    if (img.complete) {
      if (img.naturalWidth === 0) setFailed(true);
      return;
    }

    const onError = () => setFailed(true);
    img.addEventListener("error", onError);
    return () => img.removeEventListener("error", onError);
  }, [src]);

  const onError = useCallback(() => setFailed(true), []);

  return { ref, failed, onError };
}
