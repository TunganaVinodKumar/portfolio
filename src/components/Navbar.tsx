import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { certifications } from "@/data/certifications";
import { ActionLink } from "./ActionButton";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  ...(certifications.length > 0 ? [{ id: "certifications", label: "Certifications" }] : []),
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="section-shell flex h-18 items-center justify-between">
        {/* Brand logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition-transform hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#4361ee] to-[#7209b7] text-white font-mono text-sm font-bold shadow-md shadow-[#4361ee]/20">
            {profile.mark}
          </div>
          <span className="font-display text-base font-bold tracking-tight text-slate-900 group-hover:text-[#4361ee] transition-colors hidden sm:inline-block">
            {profile.name}
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md lg:flex">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200",
                    isActive
                      ? "bg-blue-50 text-[#4361ee] shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                  )}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action button & Mobile toggle */}
        <div className="flex items-center gap-3">
          <ActionLink
            href={profile.resume}
            download
            size="sm"
            variant="primary"
            className="hidden sm:inline-flex"
          >
            <FileText aria-hidden="true" className="h-3.5 w-3.5" />
            Resume
          </ActionLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 hover:border-[#4361ee] hover:text-[#4361ee] transition-colors lg:hidden shadow-sm"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-b border-slate-200 bg-white/98 backdrop-blur-2xl lg:hidden shadow-lg animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <ul className="section-shell flex flex-col gap-1 py-4">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    active === s.id
                      ? "bg-blue-50 text-[#4361ee] border border-blue-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                  )}
                >
                  <span>{s.label}</span>
                  {active === s.id && <span className="h-2 w-2 rounded-full bg-[#4361ee]" />}
                </a>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-slate-100">
              <ActionLink
                href={profile.resume}
                download
                variant="primary"
                className="w-full justify-center"
                onClick={() => setOpen(false)}
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                Download Resume
              </ActionLink>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
