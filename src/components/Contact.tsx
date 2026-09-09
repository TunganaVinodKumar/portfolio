import { useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  User,
  AtSign,
  HelpCircle,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    if (profile.web3FormsAccessKey) {
      setIsSubmitting(true);
      setErrorMessage(null);
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: profile.web3FormsAccessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
            message: formData.message,
            from_name: "Portfolio Visitor",
          }),
        });

        const data = await res.json();
        if (data.success) {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setErrorMessage(data.message || "Failed to send message. Please try again.");
        }
      } catch {
        setErrorMessage("Network error. Please try again or email directly.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to mailto if access key is not yet configured
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`,
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )}`;

      window.location.href = mailtoUrl;
      setSubmitted(true);
    }
  };

  const contactItems = [
    profile.email && {
      icon: Mail,
      label: "Direct Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: "from-blue-50 to-indigo-100 text-[#4361ee] border-blue-200",
    },
    profile.linkedin && {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "in/tunganavinodkumar",
      href: profile.linkedin,
      color: "from-cyan-50 to-blue-100 text-sky-600 border-sky-200",
    },
    profile.github && {
      icon: Github,
      label: "GitHub Repositories",
      value: "github.com/TunganaVinodKumar",
      href: profile.github,
      color: "from-purple-50 to-pink-100 text-[#7209b7] border-purple-200",
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: null,
      color: "from-amber-50 to-orange-100 text-amber-600 border-amber-200",
    },
  ].filter(Boolean) as {
    icon: typeof Mail;
    label: string;
    value: string;
    href: string | null;
    color: string;
  }[];

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border/80 py-24 sm:py-32 relative"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect & Collaborate"
          subtitle="Have an opening for an Aspiring Java Developer, internship, full-time engineering role, or a technical inquiry? Drop a message below."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
          {/* Left Column: Suresh-style Contact Info Cards */}
          <Reveal className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Contact Information
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm actively checking emails and LinkedIn messages. Feel free to connect directly or
              send an inquiry through the form.
            </p>

            <div className="space-y-4 pt-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="card-surface card-interactive flex items-center gap-4 p-5 rounded-2xl border border-border/80 group"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} border group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-xs text-muted-foreground uppercase font-semibold">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mt-0.5 block truncate text-base font-semibold text-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-base font-semibold text-foreground truncate">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right Column: Suresh-style Interactive Contact Form */}
          <Reveal delay={80}>
            <div className="card-surface p-7 sm:p-9 rounded-3xl border border-slate-200 bg-white shadow-xl relative overflow-hidden">
              {/* Top signature gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4361ee] via-[#7209b7] to-[#f72585]" />

              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                {profile.web3FormsAccessKey
                  ? "Fill out the fields below to send a message directly to my inbox."
                  : "Fill out the fields and your email client will open with your pre-drafted message."}
              </p>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">
                    {profile.web3FormsAccessKey ? "Message Sent Successfully!" : "Message Drafted!"}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {profile.web3FormsAccessKey
                      ? "Thank you! Your message has been delivered directly to my inbox. I will reply to you as soon as possible."
                      : "Your email client has been launched with your message. You can also send an email directly to "}
                    {!profile.web3FormsAccessKey && (
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-[#4361ee] font-semibold underline"
                      >
                        {profile.email}
                      </a>
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="text-xs font-bold text-[#4361ee] underline mt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                      <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#4361ee] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-1.5">
                      Your Email Address *
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#4361ee] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <HelpCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Opportunity / Collaboration Inquiry"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#4361ee] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Vinod, I came across your portfolio and wanted to connect regarding an opportunity..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#4361ee] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white font-bold py-3.5 px-6 shadow-md shadow-[#4361ee]/30 hover:shadow-lg hover:shadow-[#4361ee]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
