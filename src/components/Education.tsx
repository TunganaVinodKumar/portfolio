import { GraduationCap, Award, Calendar } from "lucide-react";
import { education } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-border/80 py-24 sm:py-32 relative"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Academic Foundation"
          title="Education & Qualifications"
          subtitle="Rigorous engineering foundation in Computer Science with advanced coursework in Algorithms, Data Structures, AI, and Machine Learning."
        />

        <Reveal>
          <article className="card-surface card-interactive p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white relative overflow-hidden group shadow-md">
            {/* Top signature gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585] opacity-80" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-[#4361ee] group-hover:scale-110 transition-transform">
                  <GraduationCap aria-hidden="true" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    {education.institution}
                  </h3>
                  <p className="mt-1 text-base text-slate-700 font-medium">
                    {education.degree} in {education.field}
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#4361ee]">
                    <Award className="h-3.5 w-3.5" />
                    Specialization: {education.specialization}
                  </div>
                </div>
              </div>

              <div className="flex flex-row md:flex-col justify-between md:items-end gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Calendar className="h-3.5 w-3.5 text-[#4361ee]" />
                  <span>{education.period}</span>
                </div>
                <div className="inline-flex items-center rounded-lg bg-blue-50 border border-blue-200 px-3.5 py-1.5 font-display text-sm font-bold text-[#4361ee] shadow-xs">
                  {education.score}
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
