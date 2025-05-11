import type { Metadata } from "next";
import ProjectCard from "../components/ProjectCard"; // Assuming ProjectCard is in components folder

export const metadata: Metadata = {
  title: "Portfolio | Clarity Systems Studio",
  description: "View a selection of projects by Clarity Systems Studio, showcasing our expertise in digital product creation and website design.",
};

const PortfolioPage = () => {
  const projects = [
    {
      image: "/images/portfolio-calmpro.jpg", // Placeholder image path
      title: "Calm Pro - Mindfulness App UI Kit",
      description: "A comprehensive UI kit for a mindfulness and meditation application, designed for clarity and ease of use.",
      tags: ["UI Kit", "Mobile App", "Digital Product"],
      liveLink: "#", // Placeholder
      caseStudyLink: "#" // Placeholder
    },
    {
      image: "/images/portfolio-ketoplaybook.jpg", // Placeholder image path
      title: "Keto Playbook - eBook & Planner",
      description: "A beautifully designed eBook and printable planner bundle for a ketogenic lifestyle brand.",
      tags: ["eBook", "Printable", "Branding"],
      liveLink: "#",
      caseStudyLink: "#"
    },
    {
      image: "/images/portfolio-focusmode.jpg", // Placeholder image path
      title: "Focus Mode - Productivity Tool Website",
      description: "An AI-powered website for a productivity tool, designed to be clean, modern, and conversion-focused.",
      tags: ["Website", "AI-Powered", "SaaS"],
      liveLink: "#",
      caseStudyLink: "#"
    },
    {
      image: "/images/portfolio-cashflow.jpg", // Placeholder image path
      title: "Cash Flow Clarity - Financial Planner",
      description: "A printable financial planner designed to help small business owners manage their cash flow with clarity.",
      tags: ["Printable", "Finance", "Small Business"],
      liveLink: "#",
      caseStudyLink: "#"
    }
  ];

  return (
    <div className="py-12">
      <section className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Portfolio</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Take a look at some of the digital products and websites we’ve created. We pride ourselves on delivering clear, effective, and beautiful solutions.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.liveLink}
              caseStudyLink={project.caseStudyLink}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Inspired? Let’s Create Together.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            If you like what you see and have a project in mind, we’d love to hear from you.
          </p>
          <a href="/contact" className="btn btn-primary py-3 px-8 text-lg">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

