import type { Metadata } from "next";
import ServiceCard from "../components/ServiceCard"; // Assuming ServiceCard is in components folder

export const metadata: Metadata = {
  title: "Services | Clarity Systems Studio",
  description: "Explore the services offered by Clarity Systems Studio, including eBook bundles, AI-powered websites, and digital starter kits.",
};

const ServicesPage = () => {
  const services = [
    {
      icon: "/images/ebook-icon.svg", // Placeholder icon path
      title: "eBook + Printable Product Bundles",
      description: "Professionally designed eBooks and printable planners to help you deliver value to your audience. We handle the design, you focus on the content.",
      detailsLink: "/services/ebook-bundles"
    },
    {
      icon: "/images/ai-website-icon.svg", // Placeholder icon path
      title: "AI-Powered Custom Websites",
      description: "Get a stunning, conversion-focused website built with the power of AI and perfected by human touch. Fast 48-hour delivery options available.",
      detailsLink: "/services/ai-websites"
    },
    {
      icon: "/images/starter-kit-icon.svg", // Placeholder icon path
      title: "Full Digital Starter Kits",
      description: "Everything you need to launch your digital brand with clarity. Includes branding assets, a starter website, and essential digital product templates.",
      detailsLink: "/services/starter-kits"
    }
  ];

  return (
    <div className="py-12">
      <section className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a range of services designed to help digital creators and small businesses thrive. Explore how we can bring clarity and professionalism to your brand.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              detailsLink={service.detailsLink}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Find the perfect solution to build your brand and connect with your audience. 
            If you have custom needs, don’t hesitate to reach out!
          </p>
          <a href="/contact" className="btn btn-primary py-3 px-8 text-lg">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

