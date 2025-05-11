import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Clarity Systems Studio",
  description: "Learn about the mission, vision, and values of Clarity Systems Studio.",
};

const AboutPage = () => {
  return (
    <div className="py-12">
      <section className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Clarity Systems Studio</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are dedicated to empowering digital creators and small business owners with clear, effective, and beautifully designed digital tools and websites.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder for an image about the founder or team */}
              <div className="bg-blue-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">[Placeholder Image: Founder/Team]</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Our mission is to cut through the digital noise and provide straightforward, high-quality solutions that help our clients build their brand with clarity and confidence. We believe in the power of good design and smart technology to make a real impact.
              </p>
              <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-800">Our Origin Story</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Clarity Systems Studio was born from a desire to simplify the complex world of digital marketing and product creation. We saw too many talented individuals struggling with overwhelming tools and confusing processes. We decided to build a service that offers speed, clarity, and empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">Speed</h3>
              <p className="text-gray-600">
                We leverage AI and efficient processes to deliver high-quality results quickly, because we know your time is valuable.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-green-500">Clarity</h3>
              <p className="text-gray-600">
                We believe in clear communication, transparent processes, and easy-to-understand solutions. No jargon, just results.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-purple-600">Empowerment</h3>
              <p className="text-gray-600">
                Our goal is to empower you with the tools and confidence you need to succeed in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

