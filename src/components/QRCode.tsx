import { profile } from "@/data/profile";

/**
 * QR Code component displaying the uploaded QR image from assets (public/assets/qr.png)
 */
export function ContactQRCode({ className }: { className?: string }) {
  return (
    <img
      src={profile.qrCode || "/assets/qr.png"}
      alt="QR Code to connect on LinkedIn"
      className={`${className ?? "h-16 w-16"} object-contain block`}
      loading="lazy"
    />
  );
}

