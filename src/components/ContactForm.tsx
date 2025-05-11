"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or email service
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a delay or on successful submission
    setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
      {isSubmitted ? (
        <div className="text-center py-4 px-6 bg-green-100 text-green-700 rounded-md">
          <p className="font-semibold">Thank you!</p>
          <p>Your message has been sent successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
      <div className="mt-8 text-center">
        <p className="text-gray-600">Alternatively, you can email us directly at:</p>
        <a href="mailto:hello@claritysystems.studio" className="text-blue-600 hover:text-blue-800 font-semibold">
          hello@claritysystems.studio
        </a>
        {/* Optional: Calendly embed can be added here if needed */}
        {/* <p className="mt-4 text-sm text-gray-500">Or schedule a call via Calendly.</p> */}
      </div>
    </div>
  );
};

export default ContactForm;

