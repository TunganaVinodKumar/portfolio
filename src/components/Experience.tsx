import { ExternalLink, Briefcase, Award } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border/80 py-24 sm:py-32 relative"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Internship Experience"
          subtitle="Hands-on industry virtual internships spanning Java full-stack development, data science, AI/ML, Django web applications, and cloud fundamentals."
        />

        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-200 space-y-8 mt-12">
          {experiences.map((item, i) => (
            <Reveal as="div" key={item.role} delay={i * 60} className="relative group">
              {/* Timeline marker node */}
              <div
                aria-hidden="true"
                className={cn(
                  "absolute -left-[1.95rem] sm:-left-[3.05rem] top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white transition-transform duration-300 group-hover:scale-125 shadow-sm",
                  item.highlight
                    ? "border-[#4361ee] text-[#4361ee]"
                    : "border-slate-300 text-slate-400",
                )}
              >
                <div
                  className={cn(
                    "h-2.5 w-2.5 rounded-full",
                    item.highlight ? "bg-[#4361ee]" : "bg-slate-300",
                  )}
                />
              </div>

              {/* Experience Card */}
              <div
                className={cn(
                  "card-surface card-interactive p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative overflow-hidden bg-white shadow-md",
                  item.highlight ? "border-blue-200 shadow-lg" : "border-slate-200",
                )}
              >
                {/* Top signature gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585] opacity-75" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                      {item.role}
                    </h3>
                    {item.highlight && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#4361ee] uppercase">
                        <Award className="h-3 w-3" />
                        Core Specialization
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-[#4361ee] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 w-fit">
                    {item.period}
                  </span>
                </div>

                {item.organization && (
                  <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-accent">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>{item.organization}</span>
                  </div>
                )}

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.certificateUrl && (
                  <div className="mt-5 pt-3 border-t border-border/60">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-accent hover:text-accent-cyan transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>View Verified Internship Certificate</span>
                      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
