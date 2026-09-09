import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Terminal } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/80 py-24 sm:py-32 relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Repertoire"
          title="Skills & Technologies"
          subtitle="Specialized in Java development, backend architectures, full-stack frameworks, relational databases, and machine learning pipelines."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const isPrimary =
              group.category.includes("Languages") || group.category.includes("Backend");
            return (
              <Reveal key={group.category} delay={i * 60}>
                <div
                  className={`card-surface card-interactive h-full p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${isPrimary
                      ? "border-accent/35 bg-gradient-to-br from-surface to-accent/5"
                      : "border-border/80"
                    }`}
                >
                  {/* Top signature gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585] opacity-75" />
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-[#4361ee]" />
                      <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">
                        {group.category}
                      </h3>
                    </div>
                    {isPrimary && (
                      <span className="h-2 w-2 rounded-full bg-[#4361ee] animate-pulse" />
                    )}
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 border ${item === "Java" || item === "Spring Boot"
                            ? "bg-blue-50 border-blue-200 text-[#4361ee] shadow-xs hover:scale-105"
                            : "border-slate-200 bg-slate-50/70 text-slate-700 hover:border-[#4361ee] hover:text-[#4361ee] hover:bg-blue-50/40 hover:scale-105"
                          }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
