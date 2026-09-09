import { Github, ExternalLink, ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { ActionButton, ActionLink } from "./ActionButton";
import { cn } from "@/lib/utils";

function TechTags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:border-[#4361ee] hover:text-[#4361ee] transition-colors"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails: (project: Project) => void;
}) {
  const featured = project.featured;

  return (
    <article
      className={cn(
        "card-surface card-interactive group flex flex-col justify-between overflow-hidden p-6 rounded-2xl border border-slate-200 bg-white shadow-md relative",
        featured &&
        "border-blue-200 bg-gradient-to-br from-white via-white to-blue-50/40 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-8 p-7 sm:p-8 shadow-lg",
      )}
    >
      {/* Top signature gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585] opacity-80 group-hover:opacity-100 transition-opacity" />

      <div>
        <ProjectImage
          src={project.image}
          alt={`${project.shortTitle} project screenshot`}
          label={project.shortTitle}
          priority={featured}
        />
      </div>

      <div
        className={cn("flex flex-1 flex-col justify-between", featured ? "mt-6 lg:mt-0" : "mt-5")}
      >
        <div>
          {featured ? (
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#4361ee] tracking-wider uppercase">
              <Star aria-hidden="true" className="h-3.5 w-3.5 fill-[#4361ee]" />
              Featured Capstone Project
            </div>
          ) : (
            <span className="text-xs font-bold text-[#4361ee] tracking-wider uppercase block mb-1">
              Project
            </span>
          )}

          <h3
            className={cn(
              "font-display font-bold tracking-tight text-slate-900 group-hover:text-[#4361ee] transition-colors",
              featured ? "text-2xl sm:text-3xl leading-snug" : "text-xl leading-snug",
            )}
          >
            {project.title}
          </h3>

          <p
            className={cn(
              "mt-3 leading-relaxed text-muted-foreground",
              featured ? "text-base sm:text-lg" : "text-sm",
            )}
          >
            {project.description}
          </p>

          {project.technologies.length > 0 ? (
            <div className="mt-5">
              <TechTags items={project.technologies} />
            </div>
          ) : null}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2.5 pt-4 border-t border-border/60">
          {project.github ? (
            <ActionLink
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              size="sm"
              variant="outline"
              aria-label={`GitHub repository for ${project.shortTitle}`}
            >
              <Github aria-hidden="true" className="h-3.5 w-3.5" />
              GitHub
            </ActionLink>
          ) : (
            <ActionButton
              size="sm"
              variant="outline"
              disabled
              aria-label={`GitHub repository unavailable for ${project.shortTitle}`}
            >
              <Github aria-hidden="true" className="h-3.5 w-3.5 opacity-50" />
              GitHub
            </ActionButton>
          )}

          {project.demo ? (
            <ActionLink
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              size="sm"
              variant="primary"
              className="shadow-[0_2px_10px_rgba(67,97,238,0.3)] hover:shadow-[0_4px_16px_rgba(67,97,238,0.5)]"
            >
              <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
              Live Demo
            </ActionLink>
          ) : (
            <ActionButton
              size="sm"
              variant="outline"
              disabled
              aria-label={`Live demo unavailable for ${project.shortTitle}`}
            >
              <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 opacity-50" />
              Live Demo
            </ActionButton>
          )}

          <ActionButton
            size="sm"
            variant={featured ? "primary" : "soft"}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(project);
            }}
            className="ml-auto"
          >
            View Details
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </ActionButton>
        </div>
      </div>
    </article>
  );
}
