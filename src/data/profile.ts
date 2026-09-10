/**
 * Personal details, links and resume path. Edit here.
 * Leave a value as an empty string ("") and the UI will hide that link
 * automatically — no placeholder text is ever shown to visitors.
 */

const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");

export const profile = {
  name: "Tungana Vinod Kumar",
  mark: "TVK",
  role: "Aspiring Java Developer",
  positioning: ["Java", "Backend", "Full-Stack", "AI/RAG"],
  intro:
    "Computer Science & Engineering graduate specializing in Artificial Intelligence & Machine Learning, focused on Java, backend and full-stack development, with hands-on experience building AI/RAG applications.",
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
    "I am a Computer Science & Engineering graduate specializing in Artificial Intelligence & Machine Learning. Java is my primary programming language and my main career focus is Java development, backend development and full-stack development.",
    "I have built applications using Java, MySQL, Django, FastAPI, React and AI technologies. My main academic/capstone project is a chatbot for Examination Cell enquiries using document processing, OCR, embeddings, semantic retrieval, RAG and LLM-based responses.",
    "I have also completed five internships across Java full-stack development, data science, AI/ML, web development using Django, and cloud/DevOps.",
    "I am currently looking for internship and entry-level software development opportunities where I can contribute, continue learning and build real-world applications.",
  ],
};

export const education = {
  institution: "NSRIT (Autonomous)",
  degree: "Bachelor of Technology - B.Tech",
  field: "Computer Science & Engineering",
  specialization: "Artificial Intelligence & Machine Learning",
  period: "2022 – 2026",
  score: "CGPA 8.33 / 10",
};
