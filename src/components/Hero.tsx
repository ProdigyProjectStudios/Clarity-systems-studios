import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-20 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-6">Build your brand with clarity</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Clarity Systems Studio offers professional, creative solutions for building digital tools, downloadable eBooks, printable planners, and AI-generated websites for digital creators and small business owners.
        </p>
        <div className="space-x-4">
          <Link href="/services" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            View Services
          </Link>
          <Link href="/contact" className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Get a Website
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

