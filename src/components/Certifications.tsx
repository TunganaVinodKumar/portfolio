import { useState } from "react";
import { Award, ExternalLink, ShieldCheck, Eye } from "lucide-react";
import { certifications, featuredCount, type Certification } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ActionButton } from "./ActionButton";
import { CertificateModal } from "./CertificateModal";

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const visible = showAll ? certifications : certifications.slice(0, featuredCount);
  const hasMore = certifications.length > featuredCount;

  if (certifications.length === 0) return null;

  const openDetails = (cert: Certification) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-t border-border/80 py-24 sm:py-32 relative"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Accreditations & Badges"
          title="Certifications & Specializations"
          subtitle="Verified technical credentials earned from IBM, Google Cloud, Coursera, Kaggle, and recognized institutions."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert, i) => (
            <Reveal as="li" key={`${cert.title}-${i}`} delay={(i % 3) * 60}>
              <div className="card-surface card-interactive flex h-full flex-col justify-between p-6 rounded-2xl border border-border/80 relative overflow-hidden group">
                {/* Top signature gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585]" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 border border-accent/30 text-accent group-hover:scale-110 transition-transform">
                      <Award aria-hidden="true" className="h-5 w-5" />
                    </span>
                    {cert.date && (
                      <span className="font-mono text-xs text-muted-foreground bg-surface-elevated/80 px-2.5 py-1 rounded-md border border-border/60">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-accent-cyan">
                    <ShieldCheck className="h-4 w-4" />
                    <span>{cert.issuer}</span>
                  </div>

                  {cert.skills && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded border border-accent/20 bg-surface/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => openDetails(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-cyan transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Inspect Details</span>
                  </button>

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>PDF</span>
                      <ExternalLink aria-hidden="true" className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <ActionButton variant="outline" size="md" onClick={() => setShowAll((v) => !v)}>
              {showAll
                ? "Show Fewer Certifications"
                : `View All Certifications (${certifications.length})`}
            </ActionButton>
          </div>
        )}
      </div>

      {/* Interactive Modal */}
      <CertificateModal certificate={selectedCert} open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
