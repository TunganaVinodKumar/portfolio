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

const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");

export const experiences: Experience[] = [
  {
    role: "Web Development Intern (Django)",
    organization: "Andhra Pradesh State Skill Development Corporation (APSSDC)",
    period: "April 2025 – June 2025",
    description:
      "Engineered backend modules and database-driven web applications using Python and Django. Implemented user authentication, URL routing, and ORM queries.",
    certificateUrl: `${base}/assets/certificates/Web Development Intern (Django).pdf`,
    highlight: true,
  },
  {
    role: "AI-ML Virtual Intern",
    organization: "EduSkills Foundation",
    period: "July 2025 – September 2025",
    description:
      "Completed hands-on training and projects in Artificial Intelligence and Machine Learning algorithms, dataset preprocessing, and model evaluation pipelines.",
    certificateUrl: `${base}/assets/certificates/AI-ML Virtual Intern.pdf`,
  },
  {
    role: "Data Science Intern",
    organization: "EduSkills Foundation",
    period: "October 2025 – December 2025",
    description:
      "Analyzed multidimensional datasets using Python, Pandas, and visualization libraries. Developed exploratory data analysis (EDA) and predictive modeling workflows.",
    certificateUrl: `${base}/assets/certificates/Data Science Intern.pdf`,
  },
];
