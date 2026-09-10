# 🌐 Personal Developer Portfolio

<div align="center">

  <h3>Tungana Vinod Kumar — Software Developer Portfolio</h3>
  <p>A fast, modern, and responsive personal portfolio built with <strong>TanStack Start</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, prerendered and deployed to <strong>GitHub Pages</strong>.</p>

  <p>
    <a href="https://tunganavinodkumar.github.io/portfolio/">
      <img src="https://img.shields.io/badge/🌐_Live_Site-Visit_Portfolio-007ACC?style=for-the-badge&logoColor=white" alt="Live Site" />
    </a>
    <a href="https://github.com/TunganaVinodKumar/portfolio/actions/workflows/deploy.yml">
      <img src="https://img.shields.io/github/actions/workflow/status/TunganaVinodKumar/portfolio/deploy.yml?style=for-the-badge&label=Deployment" alt="Deployment Status" />
    </a>
    <a href="https://www.linkedin.com/in/tunganavinodkumar/">
      <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
  </p>

</div>

---

## 📖 Overview

This repository houses the source code for my personal developer portfolio. It is engineered with a **minimal dark developer aesthetic**, emphasizing project showcases, technical skill breakdowns, verified certifications, internship experiences, and contact channels.

### ✨ Key Features

- ⚡ **Ultra-Fast Performance:** Static prerendering powered by TanStack Start and Nitro for instant page loads and zero runtime server overhead.
- 🎨 **Minimal Dark Aesthetic:** Handcrafted dark palette with high-contrast typography, accessible color accents, and subtle hover micro-interactions.
- 📱 **Fully Responsive Layout:** Optimized from mobile phones up to high-resolution desktop screens with an adaptive navigation bar.
- 🔍 **Interactive Project Modals:** Dedicated detail drawers and modals highlighting technical architecture, problems solved, and direct links to code and live demos.
- 🗂️ **Centralized Data Layer:** Clean, decoupled data files (`src/data/`) for projects, skills, certifications, and experience timelines for frictionless maintenance.
- 🚀 **Automated CI/CD:** Continuous Deployment pipeline using GitHub Actions that builds and publishes static artifacts automatically to GitHub Pages on every push to `main`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React](https://react.dev/)** | Component-based modern UI library |
| **[TanStack Start](https://tanstack.com/start)** | Full-stack framework with static HTML prerendering |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety and enhanced developer experience |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first responsive styling and custom dark design system |
| **[Lucide React](https://lucide.dev/)** | Clean, modern SVG iconography |
| **[Vite](https://vitejs.dev/)** | Next-generation fast frontend build tooling |
| **[GitHub Pages & Actions](https://pages.github.com/)** | Automated static hosting and CI/CD workflow |

---

## 📂 Project Structure

```text
vinodkumar-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD for GitHub Pages
├── public/
│   ├── assets/                 # Profile images, project screenshots, certificates
│   └── favicon.ico
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx          # Sticky responsive navigation
│   │   ├── Hero.tsx            # Introduction, quick CTA & social links
│   │   ├── Projects.tsx        # Project showcase & interactive cards
│   │   ├── Skills.tsx          # Categorized technical skills
│   │   ├── Experience.tsx      # Internship timeline
│   │   ├── Education.tsx       # Academic background
│   │   ├── Certifications.tsx  # Verified industry credentials
│   │   ├── Contact.tsx         # Contact info & message form
│   │   └── Footer.tsx          # Footer with social profiles
│   ├── data/                   # Centralized content layer
│   │   ├── profile.ts          # Personal bio, links & contact info
│   │   ├── projects.ts         # Project metadata, tags, and links
│   │   ├── skills.ts           # Technical skill categories
│   │   ├── certifications.ts   # Credentials & verification URLs
│   │   └── experience.ts       # Internship roles & achievements
│   ├── routes/                 # TanStack Start application routes
│   │   ├── __root.tsx          # Root layout shell & SEO meta tags
│   │   └── index.tsx           # Home page assembly
│   └── styles/
│       └── app.css             # Global styles & Tailwind directives
├── app.config.ts / vite.config.ts  # TanStack Start & prerender configuration
├── package.json
└── tsconfig.json
```

---

## 💻 Local Development

To run this portfolio locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/TunganaVinodKumar/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application with hot module reloading.

### 4. Build for production / prerender
```bash
npm run build
```

---

## 🚀 Deployment

The portfolio is configured with **automatic continuous deployment** via GitHub Actions:

- On every `git push` to the `main` branch, the workflow in `.github/workflows/deploy.yml`:
  1. Checks out the code and sets up Node.js.
  2. Runs static prerendering with `GITHUB_PAGES=true`.
  3. Uploads the generated static output (`.output/public`).
  4. Deploys directly to **GitHub Pages**.

Live URL: **[https://tunganavinodkumar.github.io/portfolio/](https://tunganavinodkumar.github.io/portfolio/)**

---

## 👤 Author

**Tungana Vinod Kumar**
- 🌐 **Portfolio:** [tunganavinodkumar.github.io/portfolio](https://tunganavinodkumar.github.io/portfolio/)
- 💼 **LinkedIn:** [linkedin.com/in/tunganavinodkumar](https://www.linkedin.com/in/tunganavinodkumar/)
- 📧 **Email:** [vinodtungana6@gmail.com](mailto:vinodtungana6@gmail.com)
- 🐙 **GitHub:** [@TunganaVinodKumar](https://github.com/TunganaVinodKumar)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
