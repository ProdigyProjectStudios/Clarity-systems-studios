import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Let Clarity Systems Studio help you build a digital presence that converts. Get started today!
        </p>
        <Link href="/contact" className="bg-white text-blue-600 font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 text-lg">
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

