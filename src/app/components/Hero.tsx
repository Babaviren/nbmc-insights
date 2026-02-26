import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    // Keyword matching logic
    if (query.includes('vote') || query.includes('election') || query.includes('chori')) {
      navigate('/vote-stealing');
    } else if (query.includes('budget') || query.includes('economy') || query.includes('finance')) {
      navigate('/yearly-budget');
    } else if (query.includes('railway') || query.includes('train')) {
      navigate('/railways');
    } else if (query.includes('indigo') || query.includes('flight') || query.includes('delay')) {
      navigate('/indigo-delays');
    } else if (query.includes('pm') || query.includes('prime minister') || query.includes('tour')) {
      navigate('/pm-tours');
    } else if (query.includes('cricket') || query.includes('sport')) {
      navigate('/cricket');
    } else if (query) {
      navigate('/no-results');
    }

    setSearchQuery('');
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Search and Explore Key National Topics
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Latest insights on governance, economy, transport, aviation and sports.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-lg p-2 shadow-2xl">
            <div className="flex-1 flex items-center px-4">
              <Search className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics: vote, budget, railway, indigo, pm, cricket..."
                className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:cursor-pointer hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              onClick={()=>navigate('/yearly-budget')}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
