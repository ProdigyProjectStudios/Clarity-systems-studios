import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  caseStudyLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, tags, liveLink, caseStudyLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Placeholder for actual image */}
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <span className="text-gray-500 text-lg p-4">[Image: {title}]</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="mb-4">
          {tags.map(tag => (
            <span key={tag} className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200">
          {liveLink && liveLink !== "#" && (
            <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-semibold mr-4 transition-colors duration-300">
              View Live
            </Link>
          )}
          {caseStudyLink && caseStudyLink !== "#" && (
            <Link href={caseStudyLink} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
              Case Study
            </Link>
          )}
          {(!liveLink || liveLink === "#") && (!caseStudyLink || caseStudyLink === "#") && (
             <p className="text-sm text-gray-400">Links coming soon</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

