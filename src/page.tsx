import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Placeholder for other sections like featured services or products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Core Offerings</h2>
          <p className="text-lg text-gray-600 mb-8">
            We specialize in creating stunning digital assets that help your brand shine. From AI-powered websites to beautifully designed eBooks and printables, we provide clear, effective solutions.
          </p>
          {/* Add more content or links to services page here */}
        </div>
      </section>
      <Testimonials />
      <CallToAction />
    </>
  );
}

