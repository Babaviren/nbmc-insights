import { Hero } from '../components/Hero';
import { TopicCard } from '../components/TopicCard';

export function HomePage() {
  const topics = [
    {
      title: 'Vote Stealing (Vote Chori)',
      description: 'Investigating allegations of electoral fraud and manipulation in recent elections across various states.',
      image: 'https://images.unsplash.com/photo-1574249693248-57148d0ba06d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHZvdGluZyUyMGVsZWN0aW9uJTIwZGVtb2NyYWN5fGVufDF8fHx8MTc3MjA2MDAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/vote-stealing',
    },
    {
      title: 'India Annual Budget',
      description: 'Comprehensive analysis of the yearly budget allocation, fiscal policies, and their impact on various sectors.',
      image: 'https://images.unsplash.com/photo-1760872646618-13594fc00567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHBhcmxpYW1lbnQlMjBidWRnZXQlMjBlY29ub215fGVufDF8fHx8MTc3MjA2MDAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/yearly-budget',
    },
    {
      title: 'Indian Railways Development',
      description: 'Updates on infrastructure projects, modernization efforts, and challenges facing the world\'s largest railway network.',
      image: 'https://images.unsplash.com/photo-1639494095806-1680b909cb33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByYWlsd2F5cyUyMHRyYWluJTIwc3RhdGlvbnxlbnwxfHx8fDE3NzIwNjAwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/railways',
    },
    {
      title: 'Indigo Flight Delays',
      description: 'Tracking patterns, causes, and consumer rights related to flight delays with India\'s largest airline.',
      image: 'https://images.unsplash.com/photo-1723137664649-3bb988fc221d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ28lMjBhaXJwbGFuZSUyMGFpcnBvcnR8ZW58MXx8fHwxNzcyMDYwMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/indigo-delays',
    },
    {
      title: 'Prime Minister Tours',
      description: 'Detailed documentation of international visits, diplomatic engagements, and their strategic importance.',
      image: 'https://images.unsplash.com/photo-1691328024236-55b85f698fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcmltZSUyMG1pbmlzdGVyJTIwZ292ZXJubWVudHxlbnwxfHx8fDE3NzIwNjAwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/pm-tours',
    },
    {
      title: 'Cricket Updates',
      description: 'Latest news, match analysis, and insights into India\'s performance in international cricket tournaments.',
      image: 'https://images.unsplash.com/photo-1635127725453-5f6ad32cbf92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwaW5kaWElMjBzdGFkaXVtJTIwc3BvcnR8ZW58MXx8fHwxNzcyMDYwMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/cricket',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Featured Topics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore comprehensive coverage of the most important issues facing India today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <TopicCard
                key={topic.link}
                title={topic.title}
                description={topic.description}
                image={topic.image}
                link={topic.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
