/**
 * Central project data.
 * Edit titles, descriptions, images, and URLs here — the UI reads from this file.
 * Leave `github` / `demo` empty (""/null) until you have real links: the buttons
 * are hidden or disabled instead of showing placeholder text.
 * Empty `technologies` / `features` arrays are simply not rendered.
 */

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  details: {
    overview: string;
    features: string[];
  };
};

const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");

export const projects: Project[] = [
  {
    id: "examcell-chatbot",
    title: "AI Examination Cell Chatbot & Document Retrieval System",
    shortTitle: "Examination Cell Chatbot",
    description:
      "A natural-language query resolution platform designed for academic examination cells, combining document OCR, semantic vector search (RAG), and LLM response generation.",
    image: `${base}/assets/projects/examcell.png`,
    technologies: ["Python", "FastAPI", "RAG", "LLMs", "OCR", "SQLite", "React"],
    github: "https://github.com/TunganaVinodKumar/examcell-chatbot",
    demo: "https://examcell-chatbot-1.onrender.com/",
    featured: true,
    details: {
      overview:
        "Engineered as a capstone project to automate student inquiry handling for academic examination cells. The backend ingests complex academic notices, circulars, and regulations, extracts text using OCR, indexes chunks via embeddings, and executes a Retrieval-Augmented Generation (RAG) pipeline to deliver precise, context-aware answers.",
      features: [
        "FastAPI asynchronous REST API backend handling document ingestion and query routing",
        "Document processing pipeline supporting PDF/DOCX parsing and OCR text extraction for scanned circulars",
        "Text chunking, normalization, and embedding generation for high-relevance vector matching",
        "Retrieval-Augmented Generation (RAG) orchestration passing grounded context to LLM models",
        "Administrative document upload interface and student-facing conversational web interface",
        "Relational metadata indexing and vector persistence using SQLite",
      ],
    },
  },
  {
    id: "liverdisease",
    title: "Liver Disease Clinical Risk Prediction Web App",
    shortTitle: "Liver Disease Predictor",
    description:
      "A predictive analytics healthcare application utilizing supervised machine learning algorithms to evaluate patient biochemical parameters and assess liver disease risk.",
    image: `${base}/assets/projects/liverdisease.png`,
    technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "Machine Learning"],
    github: "https://github.com/TunganaVinodKumar/LiverDisease",
    demo: "https://tunganavinodkumar.pythonanywhere.com/",
    featured: false,
    details: {
      overview:
        "Developed a clinical decision support tool using patient health records to predict liver disorder probability. The project covers data preprocessing, feature correlation analysis, classification model training with Scikit-learn, and a web interface built with Flask.",
      features: [
        "Data cleaning, missing-value imputation, and feature scaling using Pandas and NumPy",
        "Supervised classification model trained and cross-validated on clinical biomarker datasets",
        "Real-time inference interface allowing healthcare practitioners to input patient metrics",
        "Interactive risk classification feedback deployed on cloud hosting via PythonAnywhere",
      ],
    },
  },
  {
    id: "soundwave",
    title: "SoundWave — Audio Streaming Web Application",
    shortTitle: "SoundWave",
    description:
      "A responsive web music player providing seamless audio streaming, track queueing, dynamic playlist management, and custom playback controls.",
    image: `${base}/assets/projects/soundwave.png`,
    technologies: ["React", "JavaScript", "HTML5 Audio", "Tailwind CSS"],
    github: "https://github.com/TunganaVinodKumar/SoundWave",
    demo: "https://musicclone-yzh4.onrender.com/",
    featured: false,
    details: {
      overview:
        "SoundWave is an interactive client-side audio player interface engineered for continuous media playback, client-state playlist persistence, and responsive controls.",
      features: [
        "HTML5 Audio API integration for low-latency playback, track seeking, and volume control",
        "Client-side state management for playlist creation, track queueing, and shuffle/repeat modes",
        "Catalog search and filtering across artists, tracks, and genre albums",
        "Responsive, dark-themed UI optimized for desktop and mobile touch devices",
      ],
    },
  },
  {
    id: "paradisenursery",
    title: "Paradise Nursery — E-Commerce Storefront",
    shortTitle: "Paradise Nursery",
    description:
      "An interactive e-commerce web platform for plant retail with responsive product catalog filtering, real-time cart state management, and streamlined checkout.",
    image: `${base}/assets/projects/paradisenursery.png`,
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/TunganaVinodKumar/ParadiseNursery",
    demo: "https://paradise-nursery-lac.vercel.app/",
    featured: false,
    details: {
      overview:
        "A multi-category e-commerce web application featuring categorized plant listings, dynamic cart item manipulation, subtotal calculations, and responsive multi-device layouts.",
      features: [
        "Product catalog with category filtering across indoor and medicinal plants",
        "Real-time cart addition, quantity adjustments, and dynamic item removal",
        "Automatic subtotal, tax, and order total calculation across active sessions",
        "Responsive grid navigation structured for rapid mobile browsing and checkout",
      ],
    },
  },
];
