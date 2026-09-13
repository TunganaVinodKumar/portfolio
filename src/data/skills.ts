/** Technical skills grouped by category. Add or remove freely. */

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["Python", "SQL", "JavaScript", "Java"] },
  { category: "Backend & APIs", items: ["FastAPI", "REST APIs", "Django", "Flask"] },
  { category: "Databases", items: ["MySQL", "SQLite"] },
  {
    category: "AI & GenAI",
    items: ["Retrieval-Augmented Generation (RAG)", "LLMs (Gemini / OpenAI)", "Document OCR Processing", "Machine Learning"],
  },
  {
    category: "Core Concepts",
    items: ["Object-Oriented Programming (OOP)", "API Design", "Relational Database Modeling"],
  },
  { category: "Frontend", items: ["React", "HTML5", "CSS3"] },
  { category: "Developer Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];
