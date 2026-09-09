import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";
import { Reveal } from "./Reveal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const openDetails = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  const featured = projects.find((p) => p.featured) ?? projects[0]!;
  const rest = projects.filter((p) => p.id !== featured.id);

  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32 relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio of Work"
          title="Featured Projects & Applications"
          subtitle="Real-world full-stack architectures, RAG pipelines, and interactive web software engineered with Java, Python, React, and modern databases."
        />

        {/* Featured Card */}
        <div>
          <Reveal>
            <ProjectCard project={featured} onViewDetails={openDetails} />
          </Reveal>
        </div>

        {/* Grid of Other Projects */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} onViewDetails={openDetails} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDetails project={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
}
