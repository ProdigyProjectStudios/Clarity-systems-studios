import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Clarity Systems Studio",
  description: "Get in touch with Clarity Systems Studio to discuss your project or learn more about our services.",
};

const ContactPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <section className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question about our services, want to discuss a project, or just want to say hello, please feel free to reach out.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <ContactForm />
      </section>

      <section className="py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Find Us Online</h2>
            <p className="text-gray-600 mb-6">
                Connect with Clarity Systems Studio on social media (links coming soon!).
            </p>
            {/* Placeholder for social media links */}
            <div className="flex justify-center space-x-4">
                <span className="text-gray-400">(Social Media Icons Placeholder)</span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

