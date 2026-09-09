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

export const projects: Project[] = [
  {
    id: "examcell-chatbot",
    title: "Design and Implementation of Chatbot for Examination Cell Enquiries",
    shortTitle: "Examination Cell Chatbot",
    description:
      "Designed and implemented a personalized chatbot to help students access Examination Cell information through natural-language queries.",
    image: "/assets/projects/examcell.png",
    technologies: ["Python", "FastAPI", "React", "SQLite", "RAG", "OCR", "LLM"],
    github: "https://github.com/TunganaVinodKumar/examcell-chatbot",
    demo: "https://examcell-chatbot-1.onrender.com/",
    featured: true,
    details: {
      overview:
        "Academic capstone project. The system lets the Examination Cell upload official documents and lets students ask questions in natural language. Uploaded documents are ingested, processed and indexed, and answers are generated using retrieval-augmented generation over the indexed content.",
      features: [
        "PDF/DOCX document ingestion",
        "Text extraction from uploaded documents",
        "OCR for scanned documents",
        "Text preprocessing and cleaning",
        "Text chunking",
        "Embeddings generation",
        "Semantic retrieval over document chunks",
        "Metadata and query intent handling",
        "Retrieval-Augmented Generation (RAG) pipeline",
        "LLM-generated natural-language responses",
        "Exam Cell document upload interface",
        "Student-facing chatbot interface",
        "FastAPI backend",
        "React web interface",
        "SQLite / vector-storage-related functionality",
      ],
    },
  },
  {
    id: "studentexam",
    title: "Student Examination Management System",
    shortTitle: "StudentExam",
    description:
      "A full-stack examination management and automated assessment platform designed for academic institutions.",
    image: "/assets/projects/studentexam.png",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "REST APIs", "Tailwind CSS"],
    github: "",
    demo: null,
    featured: false,
    details: {
      overview:
        "A comprehensive examination and assessment management platform built to streamline test administration, student registration, question banking, and automated result evaluation.",
      features: [
        "Secure student authentication and role-based access control (Admin, Instructor, Student)",
        "Automated exam scheduling and digital test paper creation",
        "Real-time test timer and auto-submission handling",
        "Instant score calculation and student performance analytics",
        "Question bank repository supporting multiple choice and subjective questions",
        "Result card generation and performance report export",
        "RESTful backend services integrated with a relational database",
      ],
    },
  },
  {
    id: "soundwave",
    title: "SoundWave — Music Streaming Web Application",
    shortTitle: "SoundWave",
    description:
      "A modern, responsive music streaming web application with audio playback controls and playlist management.",
    image: "/assets/projects/soundwave.png",
    technologies: ["React", "JavaScript", "HTML5 Audio", "Tailwind CSS"],
    github: "https://github.com/TunganaVinodKumar/SoundWave",
    demo: "https://musicclone-yzh4.onrender.com/",
    featured: false,
    details: {
      overview:
        "SoundWave is a responsive modern web music player interface offering smooth audio streaming, intuitive track queueing, dynamic playlist creation, and media controls.",
      features: [
        "Interactive audio player with play, pause, track skip, seek, and volume controls",
        "Custom playlist creation and track queue management",
        "Dynamic search and filtering across artist and album catalogs",
        "Stateful playback persistence across page navigation",
        "Sleek, modern dark-themed user interface inspired by streaming platforms",
      ],
    },
  },
  {
    id: "liverdisease",
    title: "Liver Disease Prediction",
    shortTitle: "LiverDisease",
    description:
      "A machine learning web application that predicts the likelihood of liver disease based on patient health parameters.",
    image: "/assets/projects/liverdisease.png",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/TunganaVinodKumar/LiverDisease",
    demo: "https://tunganavinodkumar.pythonanywhere.com/",
    featured: false,
    details: {
      overview:
        "A machine learning-based liver disease prediction application that analyzes patient health parameters and provides a prediction through an interactive web interface.",
      features: [
        "Liver disease prediction",
        "Patient parameter input",
        "Machine learning model",
        "Interactive prediction interface",
      ],
    },
  },
  {
    id: "paradisenursery",
    title: "Paradise Nursery",
    shortTitle: "Paradise Nursery",
    description:
      "A plant nursery e-commerce web application for browsing and managing house plants.",
    image: "/assets/projects/paradisenursery.png",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/TunganaVinodKumar/ParadiseNursery",
    demo: "https://paradise-nursery-lac.vercel.appq/",
    featured: false,
    details: {
      overview:
        "A plant nursery web application where users can browse aromatic and medicinal plants, add products to a shopping cart, manage quantities, and proceed toward checkout.",
      features: [
        "Responsive navigation with Home, Products and Cart sections",
        "Aromatic and medicinal plant categories",
        "Product cards with descriptions and prices",
        "Add to Cart functionality",
        "Shopping cart with quantity controls",
        "Delete products from the cart",
        "Automatic cart total calculation",
        "Continue Shopping and Checkout options",
      ],
    },
  },
];
