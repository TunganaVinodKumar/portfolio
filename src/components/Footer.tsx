import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const hasLinks = Boolean(profile.github || profile.linkedin || profile.email);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 py-12">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#4361ee] to-[#7209b7] text-white font-mono text-xs font-bold shadow-xs">
            {profile.mark}
          </div>
          <div>
            <p className="font-display text-sm font-bold text-slate-900">{profile.name}</p>
            <p className="text-xs text-slate-500">{profile.role}</p>
          </div>
        </div>

        {hasLinks && (
          <nav aria-label="Social links" className="flex items-center gap-5">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="text-muted-foreground transition-all duration-200 hover:text-accent hover:scale-110"
              >
                <Github aria-hidden="true" className="h-5 w-5" />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="text-muted-foreground transition-all duration-200 hover:text-accent hover:scale-110"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
              </a>
            )}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                aria-label="Direct email"
                className="text-muted-foreground transition-all duration-200 hover:text-accent hover:scale-110"
              >
                <Mail aria-hidden="true" className="h-5 w-5" />
              </a>
            )}
          </nav>
        )}

        <div className="flex items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 text-muted-foreground hover:border-accent hover:text-accent transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
