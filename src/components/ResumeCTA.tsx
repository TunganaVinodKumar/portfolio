import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { ActionLink } from "./ActionButton";
import { Reveal } from "./Reveal";

export function ResumeCTA() {
  return (
    <section
      id="resume-cta"
      className="border-t border-border/80 py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="section-shell relative z-10">
        <Reveal>
          <div className="card-surface relative overflow-hidden p-8 sm:p-14 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50/40 shadow-xl">
            {/* Top signature gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585]" />

            <div className="relative max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4361ee] mb-3 block">
                Collaborate & Hire
              </span>
              <h2 className="text-3xl font-bold sm:text-5xl font-display tracking-tight text-slate-900 leading-[1.15]">
                Let's build reliable software together.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                I am actively seeking software engineering, Java full-stack, and backend developer
                opportunities where I can deliver impactful contributions from day one.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <ActionLink href={profile.resume} download variant="primary" size="md">
                  <Download aria-hidden="true" className="h-4 w-4" />
                  Download Complete Resume
                </ActionLink>

                {profile.github && (
                  <ActionLink
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="outline"
                    size="md"
                  >
                    <Github aria-hidden="true" className="h-4 w-4" />
                    GitHub Profile
                  </ActionLink>
                )}

                {profile.linkedin && (
                  <ActionLink
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="outline"
                    size="md"
                  >
                    <Linkedin aria-hidden="true" className="h-4 w-4" />
                    LinkedIn
                  </ActionLink>
                )}

                <ActionLink href="#contact" variant="ghost" size="md">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Get in Touch
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </ActionLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
