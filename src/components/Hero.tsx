import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { profile, education } from "@/data/profile";
import { ActionLink } from "./ActionButton";
import { useImageStatus } from "@/hooks/useImageStatus";
import { ContactQRCode } from "./QRCode";

export function Hero() {
  const {
    ref: photoRef,
    failed: photoFailed,
    onError: onPhotoError,
  } = useImageStatus(profile.photo);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Background ambient lighting and grid */}
      <div aria-hidden="true" className="grid-fade pointer-events-none absolute inset-0 z-0" />
      <div
        aria-hidden="true"
        className="ambient-glow -top-32 -left-20 h-[32rem] w-[32rem] bg-[#4361ee] opacity-10"
      />
      <div
        aria-hidden="true"
        className="ambient-glow top-1/3 -right-20 h-[30rem] w-[30rem] bg-[#7209b7] opacity-10"
      />

      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        {/* Left Column: Hero Text & Actions */}
        <div className="flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#4361ee]/20 bg-white px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4361ee] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4361ee]"></span>
            </span>
            <span className="text-[#4361ee] font-medium tracking-wide uppercase text-[11px]">
              Open to Opportunities
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 text-xs">2026 Graduate</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-6.5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Hi, I'm <span className="gradient-text block sm:inline">{profile.name}</span>
          </h1>

          <div className="mt-3.5 flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#4361ee]">
            <Sparkles className="h-5 w-5 text-[#7209b7] shrink-0" />
            <span>{profile.role}</span>
          </div>

          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
            {profile.intro}
          </p>

          {/* Focus Tags */}
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {profile.positioning.map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-700 shadow-sm transition-all hover:border-[#4361ee] hover:text-[#4361ee] hover:-translate-y-0.5"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Dual Pill Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <ActionLink href="#projects" variant="primary" size="md">
              View My Work
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </ActionLink>

            <ActionLink href={profile.resume} download variant="secondary" size="md">
              <Download aria-hidden="true" className="h-4 w-4" />
              Download Resume
            </ActionLink>

            <ActionLink href="#contact" variant="outline" size="md">
              <Mail aria-hidden="true" className="h-4 w-4" />
              Contact Me
            </ActionLink>
          </div>

          {/* Social Links Row */}
          <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-slate-600 pt-4 border-t border-slate-200/80 w-full">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-semibold text-xs text-slate-700 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-xs transition-all hover:border-[#4361ee] hover:text-[#4361ee] hover:shadow-sm hover:-translate-y-0.5"
              >
                <Github aria-hidden="true" className="h-3.5 w-3.5 text-[#4361ee]" />
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-semibold text-xs text-slate-700 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-xs transition-all hover:border-[#4361ee] hover:text-[#4361ee] hover:shadow-sm hover:-translate-y-0.5"
              >
                <Linkedin aria-hidden="true" className="h-3.5 w-3.5 text-[#4361ee]" />
                LinkedIn
              </a>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 shadow-xs">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#7209b7]" />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Right Column: Suresh-style Interactive Profile Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="card-surface card-interactive relative w-full max-w-sm rounded-3xl p-7 bg-white shadow-xl border border-slate-200/80 overflow-hidden group">
            {/* Top signature gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585]" />

            {/* Circular Profile Avatar */}
            <div className="relative mx-auto mt-2 flex justify-center">
              <div className="relative h-36 w-36 rounded-full p-1 bg-gradient-to-tr from-[#4361ee] via-[#7209b7] to-[#f72585] shadow-md">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-white bg-slate-50">
                  {photoFailed ? (
                    <div
                      className="flex h-full w-full items-center justify-center bg-slate-100"
                      role="img"
                      aria-label={`Portrait of ${profile.name}`}
                    >
                      <span className="font-display text-4xl font-bold text-[#4361ee]">
                        {profile.mark}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={profile.photo}
                      alt={`Portrait of ${profile.name}`}
                      ref={photoRef}
                      onError={onPhotoError}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-5 text-center">
              <h3 className="font-display text-2xl font-bold text-slate-900">{profile.name}</h3>
              <p className="text-sm font-semibold text-[#4361ee] mt-1">{profile.role}</p>
            </div>

            {/* Quick Contact Rows */}
            <div className="mt-5 space-y-2.5 text-sm text-slate-600 border-y border-slate-100 py-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#4361ee] shrink-0" />
                <span className="truncate">{profile.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#7209b7] shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-[#4361ee] shrink-0" />
                <span className="truncate">B.Tech CSE (AI & ML) · {education.score}</span>
              </div>
            </div>

            {/* Scannable Contact QR Block */}
            <div className="mt-4 flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="shrink-0 rounded-lg p-1 bg-white shadow-sm hover:opacity-90 transition-opacity border border-slate-200/60"
                title="Click or scan to open LinkedIn"
              >
                <ContactQRCode className="h-16 w-16" />
              </a>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-slate-900">Instant Mobile Connect</p>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Scan QR code with your phone camera to view LinkedIn profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
