import { Check, ExternalLink, Github, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { ActionButton, ActionLink } from "./ActionButton";

export function ProjectDetails({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-3xl">
        {/* Top signature gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585]" />

        <div className="space-y-6 pt-2">
          <DialogHeader className="text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4361ee] tracking-wider uppercase font-bold">
              <Sparkles className="h-3.5 w-3.5" />
              Project Specification
            </div>
            <DialogTitle className="font-display text-2xl leading-snug sm:text-3xl font-bold text-slate-900">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base text-slate-600 leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="relative group/modalimg mt-2">
            <ProjectImage
              src={project.image}
              alt={`${project.shortTitle} project screenshot`}
              label={project.shortTitle}
              aspectRatio="16 / 9"
              fit="contain"
              className="rounded-xl shadow-md border border-slate-200 bg-slate-50"
            />
            {project.image ? (
              <a
                href={project.image}
                target="_blank"
                rel="noreferrer noopener"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 shadow-md backdrop-blur-sm transition-all hover:scale-105 z-10"
                title="View Full Resolution Screenshot"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Open Full Size</span>
              </a>
            ) : null}
          </div>

          <section className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4361ee]">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
              {project.details.overview}
            </p>
          </section>

          {project.technologies.length > 0 ? (
            <section className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#4361ee]">
                Technology Stack
              </h4>
              <ul className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-800 font-medium shadow-sm hover:border-[#4361ee] hover:text-[#4361ee] transition-colors"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.details.features.length > 0 ? (
            <section className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#4361ee]">
                Architectural & Functional Highlights
              </h4>
              <ul className="grid gap-2.5 sm:grid-cols-2 pt-1">
                {project.details.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-slate-700 rounded-xl border border-slate-200 bg-slate-50/70 p-3"
                  >
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-[#4361ee] shrink-0 mt-0.5">
                      <Check aria-hidden="true" className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span className="leading-snug font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
            {project.github ? (
              <ActionLink
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                size="sm"
                variant="outline"
              >
                <Github aria-hidden="true" className="h-4 w-4" />
                GitHub Repository
              </ActionLink>
            ) : (
              <ActionButton size="sm" variant="outline" disabled>
                <Github aria-hidden="true" className="h-4 w-4 opacity-50" />
                GitHub Unavailable
              </ActionButton>
            )}

            {project.demo ? (
              <ActionLink
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                size="sm"
                variant="primary"
              >
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
                Live Deployment
              </ActionLink>
            ) : (
              <ActionButton size="sm" variant="outline" disabled>
                <ExternalLink aria-hidden="true" className="h-4 w-4 opacity-50" />
                Demo Link Coming Soon
              </ActionButton>
            )}

            <ActionButton
              size="sm"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="ml-auto text-slate-600 hover:text-slate-900"
            >
              Close Modal
            </ActionButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
