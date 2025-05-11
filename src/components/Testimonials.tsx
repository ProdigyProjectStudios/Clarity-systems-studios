const Testimonials = () => {
  const testimonials = [
    {
      quote: "Clarity Systems Studio transformed my online presence! Their AI-powered website was delivered incroyably fast and looks amazing.",
      name: "Jane Doe",
      title: "Digital Creator"
    },
    {
      quote: "The eBook bundle I got was top-notch. So much value and beautifully designed. Highly recommend!",
      name: "John Smith",
      title: "Small Business Owner"
    },
    {
      quote: "I was overwhelmed with DIY options. Clarity Systems Studio made it so easy to get a professional site up and running.",
      name: "Alice Brown",
      title: "Consultant"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-gray-50 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6 text-lg">\"{testimonial.quote}\"</p>
              <p className="text-right font-semibold text-blue-600">- {testimonial.name}</p>
              <p className="text-right text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

