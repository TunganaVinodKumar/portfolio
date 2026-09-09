import { Award, CheckCircle2, ExternalLink, Calendar, Building2, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Certification } from "@/data/certifications";
import { ActionButton, ActionLink } from "./ActionButton";

export function CertificateModal({
  certificate,
  open,
  onOpenChange,
}: {
  certificate: Certification | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!certificate) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-2xl">
        {/* Top signature gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585]" />

        <DialogHeader className="text-left space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#4361ee] to-[#7209b7] text-white shadow-md">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs text-[#4361ee] tracking-wider uppercase font-bold block">
                Verified Industry Credential
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Authenticated Certification
              </span>
            </div>
          </div>

          <DialogTitle className="font-display text-2xl font-bold text-slate-900 leading-snug sm:text-3xl">
            {certificate.title}
          </DialogTitle>

          <DialogDescription className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
            {certificate.description ||
              `Issued by ${certificate.issuer}. Verified technical curriculum and evaluation.`}
          </DialogDescription>
        </DialogHeader>

        {/* Issuer and Date Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-100 my-2">
          <div className="flex items-center gap-2.5 text-sm text-slate-900">
            <Building2 className="h-4 w-4 text-[#4361ee] shrink-0" />
            <div>
              <span className="text-xs text-slate-500 block">Issuing Authority</span>
              <span className="font-bold">{certificate.issuer}</span>
            </div>
          </div>

          {certificate.date && (
            <div className="flex items-center gap-2.5 text-sm text-foreground">
              <Calendar className="h-4 w-4 text-accent-cyan shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground block">Issued Date</span>
                <span className="font-semibold">{certificate.date}</span>
              </div>
            </div>
          )}
        </div>

        {/* Verified Skills */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="space-y-2 py-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-accent-cyan uppercase tracking-wider font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              Key Competencies Verified
            </div>
            <ul className="flex flex-wrap gap-2 pt-1">
              {certificate.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-accent/25 bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/70">
          {certificate.url && (
            <ActionLink
              href={certificate.url}
              target="_blank"
              rel="noreferrer noopener"
              variant="primary"
              size="md"
            >
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
              View Official Document (PDF/Image)
            </ActionLink>
          )}

          <ActionButton
            variant="ghost"
            size="md"
            onClick={() => onOpenChange(false)}
            className="ml-auto"
          >
            Close
          </ActionButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
