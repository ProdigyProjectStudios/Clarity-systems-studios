import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  detailsLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, detailsLink }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="mb-6 text-center">
        {/* Placeholder for actual icon, e.g., <img src={icon} alt={`${title} icon`} className="w-16 h-16 mx-auto mb-4" /> */}
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-3xl">
          {/* Fallback text icon if image fails or not provided */}
          {title.substring(0,1)}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6 text-center flex-grow">{description}</p>
      <div className="text-center mt-auto">
        <Link href={detailsLink} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

