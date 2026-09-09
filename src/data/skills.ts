/** Technical skills grouped by category. Add or remove freely. */

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
  { category: "Backend & Frameworks", items: ["Spring Boot", "FastAPI", "Django", "REST APIs"] },
  {
    category: "Core Concepts",
    items: ["Object-Oriented Programming", "Problem Solving"],
  },
  { category: "Frontend", items: ["React", "HTML5", "CSS3"] },
  { category: "Databases", items: ["MySQL", "SQLite"] },
  {
    category: "AI / ML & GenAI",
    items: ["Machine Learning", "RAG Pipeline", "OCR", "LLM Integration"],
  },
  { category: "Developer Tools", items: ["Git", "GitHub", "Eclipse", "VS Code"] },
];
