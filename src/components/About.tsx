import { profile, education } from "@/data/profile";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ActionLink } from "./ActionButton";
import { Code, GraduationCap, Award, Briefcase, Download, Mail } from "lucide-react";

export function About() {
  const highlights = [
    {
      label: "Education",
      title: "B.Tech CSE (AI & ML)",
      subtitle: `${education.score} · ${education.period}`,
      icon: GraduationCap,
      color: "from-blue-50 to-indigo-100 text-[#4361ee] border-blue-200",
    },
    {
      label: "Internships",
      title: `${experiences.length} Industry Internships`,
      subtitle: "Java Full Stack, Data Science, AI/ML, Django",
      icon: Briefcase,
      color: "from-purple-50 to-pink-100 text-[#7209b7] border-purple-200",
    },
    {
      label: "Projects",
      title: `${projects.length} Engineered Projects`,
      subtitle: "Capstone RAG Chatbot, ML & Web Apps",
      icon: Code,
      color: "from-cyan-50 to-blue-100 text-sky-600 border-sky-200",
    },
    {
      label: "Certifications",
      title: `${certifications.length} Verified Credentials`,
      subtitle: "IBM, Google Cloud, Coursera & Kaggle",
      icon: Award,
      color: "from-amber-50 to-orange-100 text-amber-600 border-amber-200",
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 border-t border-border/80 py-24 sm:py-32 relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering Foundations & Career Vision"
          subtitle="Get to know my academic background, technical focus, and hands-on experience in building scalable applications."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
          {/* Left Column: Biography and Dual CTAs */}
          <Reveal className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Aspiring Java Developer with expertise in Full-Stack & AI Systems
            </h3>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              {profile.about.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <ActionLink href={profile.resume} download variant="primary" size="md">
                <Download aria-hidden="true" className="h-4 w-4" />
                Download Resume
              </ActionLink>

              <ActionLink href="#contact" variant="outline" size="md">
                <Mail aria-hidden="true" className="h-4 w-4" />
                Get In Touch
              </ActionLink>
            </div>
          </Reveal>

          {/* Right Column: Suresh-style 2x2 Highlight Metric Cards */}
          <Reveal delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="card-surface card-interactive p-6 rounded-2xl border border-border/80 relative overflow-hidden group hover:border-accent/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase font-semibold">
                        {item.label}
                      </span>
                      <div
                        className={`h-11 w-11 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h4 className="font-display text-lg font-bold text-foreground leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
