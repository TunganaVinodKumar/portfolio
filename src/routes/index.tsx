import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Tungana Vinod Kumar | Aspiring Java Developer";
const description =
  "2026 Computer Science & Engineering graduate specializing in AI & ML, focused on Java, backend, full-stack development and AI/RAG applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
