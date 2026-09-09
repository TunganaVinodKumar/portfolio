/**
 * Internship experience timeline.
 * Leave `organization` as an empty string until you add the real name —
 * the UI hides the line instead of showing placeholder text.
 */

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  certificateUrl?: string;
  highlight?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Java Full Stack Developer Intern",
    organization: "EduSkills Foundation",
    period: "January 2026 – March 2026",
    description:
      "Java full-stack development internship focused on building applications with Java and web technologies.",
    certificateUrl: "/assets/certificates/Java Full Stack Developer Virtual Internship.pdf",
    highlight: true,
  },
  {
    role: "Data Science Intern",
    organization: "EduSkills Foundation",
    period: "October 2025 – December 2025",
    description: "Data science internship working with data analysis and modelling workflows.",
    certificateUrl: "/assets/certificates/Data Science Intern.pdf",
  },
  {
    role: "AI-ML Virtual Intern",
    organization: "EduSkills Foundation",
    period: "July 2025 – September 2025",
    description: "Virtual internship in Artificial Intelligence and Machine Learning.",
    certificateUrl: "/assets/certificates/AI-ML Virtual Intern.pdf",
  },
  {
    role: "Web Development Intern (Django)",
    organization: "Andhra Pradesh State Skill Development Corporation (APSSDC)",
    period: "April 2025 – June 2025",
    description: "Web development internship building web applications using Django.",
    certificateUrl: "/assets/certificates/Web Development Intern (Django).pdf",
  },
  {
    role: "Cloud & DevOps Intern",
    organization: "Demy Software Solutions",
    period: "June 2024 – July 2024",
    description: "Internship covering cloud computing and DevOps fundamentals.",
    certificateUrl: "/assets/certificates/Cloud & DevOps Intern.pdf",
  },
];
