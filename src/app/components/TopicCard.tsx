import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TopicCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function TopicCard({ title, description, image, link }: TopicCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group/link"
        >
          Read More
          <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
        </Link>
      </div>
    </div>
  );
}
