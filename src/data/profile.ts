/**
 * Personal details, links and resume path. Edit here.
 * Leave a value as an empty string ("") and the UI will hide that link
 * automatically — no placeholder text is ever shown to visitors.
 */

const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");

export const profile = {
  name: "Tungana Vinod Kumar",
  mark: "TVK",
  role: "Python Backend & GenAI Developer",
  positioning: ["Python", "FastAPI", "SQL", "RAG / LLMs", "REST APIs"],
  intro:
    "Computer Science & Engineering graduate specializing in Artificial Intelligence & Machine Learning from NSRIT. Focused on Python backend engineering, scalable REST APIs, relational databases, and practical Generative AI & RAG solutions.",
  location: "Visakhapatnam, India",
  // Fill these in after export (e.g. "vinod@example.com", "https://github.com/username").
  email: "tunganavinodkumar@gmail.com",
  github: "https://github.com/TunganaVinodKumar",
  linkedin: "https://www.linkedin.com/in/tunganavinodkumar/",
  resume: `${base}/assets/resume.pdf`,
  photo: `${base}/assets/profile.jpg`,
  qrCode: `${base}/assets/qr.png`,
  web3FormsAccessKey: "58239c14-2e80-43c7-bb2f-4a6feb18b25e", // Web3Forms access key for direct email delivery
  about: [
    "I am a Computer Science & Engineering graduate with a specialization in Artificial Intelligence & Machine Learning from NSRIT (Autonomous), Visakhapatnam.",
    "My core technical focus is Python Backend Development, REST API architecture, and database design using SQL, alongside building practical Generative AI and RAG workflows.",
    "I have built applied software systems including an AI Chatbot for Examination Cell inquiries with FastAPI and document OCR, machine learning prediction applications, and responsive web platforms.",
    "Having completed internships across web development with Django, AI/ML, and data science, I am actively seeking full-time and entry-level opportunities as a Python Backend / GenAI Engineer.",
  ],
};

export type EducationItem = {
  institution: string;
  degree: string;
  field?: string;
  specialization?: string;
  period: string;
  score: string;
  badgeText?: string;
};

export const educationList: EducationItem[] = [
  {
    institution: "NSRIT (Autonomous)",
    degree: "Bachelor of Technology - B.Tech",
    field: "Computer Science & Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    period: "2022 – 2026",
    score: "CGPA 8.33 / 10",
    badgeText: "Specialization: AI & ML",
  },
  {
    institution: "Sri Sampath Sai Junior College",
    degree: "Intermediate (Class XII)",
    field: "MPC",
    specialization: "Mathematics, Physics & Chemistry",
    period: "2020 – 2022",
    score: "77.5% (775 / 1000)",
    badgeText: "Stream: MPC",
  },
];

export const education = educationList[0];
