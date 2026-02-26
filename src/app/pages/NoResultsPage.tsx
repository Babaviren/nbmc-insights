import { Link } from 'react-router-dom';
import { Search, Home } from 'lucide-react';

export function NoResultsPage() {
  const popularTopics = [
    { name: 'Vote Stealing', path: '/vote-stealing' },
    { name: 'Yearly Budget India', path: '/yearly-budget' },
    { name: 'Indian Railways', path: '/railways' },
    { name: 'Indigo Flight Delays', path: '/indigo-delays' },
    { name: 'PM Tours', path: '/pm-tours' },
    { name: 'Cricket', path: '/cricket' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <Search className="mx-auto text-gray-400" size={80} />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          No Results Found
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We couldn't find any articles matching your search. Try browsing our popular topics below 
          or return to the home page to explore all available content.
        </p>

        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
          >
            <Home className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Topics
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {popularTopics.map((topic) => (
              <Link
                key={topic.path}
                to={topic.path}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 text-gray-700 hover:text-orange-700 font-medium"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Search tips: Try using keywords like "vote", "budget", "railway", "indigo", "pm", or "cricket"</p>
        </div>
      </div>
    </div>
  );
}
