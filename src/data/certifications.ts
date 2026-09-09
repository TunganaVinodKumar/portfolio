/**
 * Certifications data enriched with skills and credential details
 * for the interactive Certificate Modal.
 */

export type Certification = {
  id?: string;
  title: string;
  issuer: string;
  date?: string;
  url?: string | null;
  image?: string | null;
  skills?: string[];
  description?: string;
};

export const featuredCount = 6;

export const certifications: Certification[] = [
  {
    id: "java-fullstack",
    title: "Java FullStack Developer",
    issuer: "Board Infinity / Coursera",
    date: "Jul 2025",
    url: "/assets/certificates/Java Full Stack.pdf",
    skills: ["Java", "Spring Boot", "REST APIs", "Full-Stack Development", "Database Management"],
    description:
      "Comprehensive certification validating hands-on competencies in Java enterprise development, RESTful APIs, Spring ecosystem, relational database integration, and modern full-stack web architectures.",
  },
  {
    id: "gcp-ai-foundations",
    title: "Google Cloud AI Foundations – LLMs, Generative AI & Responsible AI",
    issuer: "Google Cloud",
    date: "Jun 2025",
    url: "/assets/certificates/Google Cloud AI Foundations.pdf",
    skills: [
      "Large Language Models (LLMs)",
      "Generative AI",
      "Responsible AI",
      "Prompt Design",
      "Google Cloud AI",
    ],
    description:
      "Certified credential covering modern Generative AI principles, foundation models, prompt engineering methodologies, ethical AI implementation, and Google Cloud AI services.",
  },
  {
    id: "ibm-ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Sep 2025",
    url: "/assets/certificates/Artificial Intelligence Fundamentals.pdf",
    skills: ["AI Fundamentals", "Machine Learning Concepts", "Neural Networks", "Data Ethics"],
    description:
      "Demonstrates fundamental understanding of Artificial Intelligence architectures, natural language processing, machine learning models, and real-world deployment considerations.",
  },
  {
    id: "ibm-ai-customer-service",
    title: "AI-Enabled Applications for Customer Service",
    issuer: "IBM SkillsBuild",
    date: "Nov 2025",
    url: "/assets/certificates/AI-EnabledApplications for Customer Service.pdf",
    skills: ["Conversational AI", "Chatbots", "NLP", "Customer Service Automation"],
    description:
      "Validates applied engineering knowledge in creating AI-powered virtual assistants, conversational flows, and automated customer service systems using natural language understanding.",
  },
  {
    id: "ibm-data-analysis-python",
    title: "Data Analysis with Python",
    issuer: "IBM / Coursera",
    date: "Jul 2025",
    url: "/assets/certificates/Data Analysis with Python.pdf",
    skills: ["Python", "Pandas", "NumPy", "Data Wrangling", "Statistical Modeling"],
    description:
      "Hands-on certification in exploratory data analysis, data wrangling with Pandas & NumPy, predictive modeling, regression, and data visualization pipelines in Python.",
  },
  {
    id: "kaggle-google-ai-agents",
    title: "5-Day AI Agents Intensive Course with Google",
    issuer: "Kaggle × Google",
    date: "Dec 2025",
    url: "/assets/certificates/5-Day AI Agents Intensive Course with Google.jpg",
    skills: ["Autonomous AI Agents", "Tool Calling", "Multi-Agent Architectures", "Gemini API"],
    description:
      "Intensive industry training covering cutting-edge autonomous AI agents, tool integration, reasoning loops, memory systems, and multi-agent coordination powered by Google Gemini.",
  },
  {
    id: "ibm-react-frontend",
    title: "Developing Front-End Apps with React",
    issuer: "IBM / Coursera",
    date: "Aug 2025",
    url: "/assets/certificates/Developing Front-End Apps with React.pdf",
    skills: ["React", "Component Architecture", "React Hooks", "State Management", "Responsive UI"],
    description:
      "Certified expertise in developing modern single-page applications with React, custom hooks, component state management, asynchronous data fetching, and modern responsive front-end practices.",
  },
];
