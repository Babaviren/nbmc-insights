import { BlogLayout } from '../components/BlogLayout';

export function CricketPage() {
  const relatedPosts = [
    { title: 'Indian Railways Development', link: '/railways' },
    { title: 'Indigo Flight Delays Report', link: '/indigo-delays' },
  ];

  return (
    <BlogLayout
      title="Indian Cricket: A Season of Triumphs and Challenges"
      image="https://images.unsplash.com/photo-1635127725453-5f6ad32cbf92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwaW5kaWElMjBzdGFkaXVtJTIwc3BvcnR8ZW58MXx8fHwxNzcyMDYwMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      author="Arjun Patel"
      date="February 23, 2026"
      relatedPosts={relatedPosts}
      category='cricket'
    >
      <h2>The State of Indian Cricket</h2>
      <p>
        Cricket remains more than just a sport in India—it's a national passion that unites over a billion 
        people. As we analyze the 2025-26 season, Indian cricket stands at an interesting crossroads, 
        balancing recent successes with the need for strategic evolution.
      </p>

      <h2>Recent Performance Analysis</h2>
      <p>
        The Indian cricket team has delivered mixed results across formats in recent months, with 
        standout performances in home conditions but challenges overseas.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-900 p-6 my-8">
        <p className="font-semibold text-blue-900 mb-3">2025-26 Season Highlights:</p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Test Cricket:</strong> 8 wins, 3 losses, 2 draws (Win rate: 61.5%)</li>
          <li><strong>ODI Cricket:</strong> 18 wins, 7 losses (Win rate: 72%)</li>
          <li><strong>T20I Cricket:</strong> 12 wins, 8 losses (Win rate: 60%)</li>
          <li><strong>ICC Ranking:</strong> 2nd in Tests, 1st in ODIs, 3rd in T20Is</li>
        </ul>
      </div>

      <h2>The Champions Trophy Victory</h2>
      <p>
        India's triumph in the 2025 Champions Trophy in South Africa marked a significant milestone. 
        The team's dominant performance throughout the tournament showcased the depth of talent and 
        tactical maturity under the new coaching setup.
      </p>

      <blockquote className="border-l-4 border-orange-500 pl-6 italic my-8 text-gray-700">
        "This victory is not just about a trophy. It's about proving that this generation of Indian 
        cricketers can deliver in high-pressure situations on any surface, anywhere in the world."
        <span className="block mt-2 text-sm">— Team India Captain, post-final speech</span>
      </blockquote>

      <h2>Emerging Stars and Transitions</h2>
      <p>
        The season has seen the emergence of several young players who are reshaping Indian cricket's future:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li><strong>Yashasvi Jaiswal:</strong> Averaging 58.3 in Tests, established as a premier opener</li>
        <li><strong>Shubman Gill:</strong> Captaincy credentials strengthened with IPL success</li>
        <li><strong>Tilak Varma:</strong> Breakout T20 performances, averaging 47 with 145 strike rate</li>
        <li><strong>Mukesh Kumar:</strong> Seam bowling find in overseas conditions</li>
      </ul>

      <h2>The IPL Phenomenon</h2>
      <p>
        The Indian Premier League continues to grow in stature and financial clout. IPL 2026 saw record 
        television viewership of 650 million viewers and generated revenues exceeding ₹15,000 crore.
      </p>

      <h3>IPL's Impact on Indian Cricket</h3>
      <p>
        While the tournament provides invaluable match experience and financial security for players, 
        debates continue about its impact on Test cricket prioritization and player workload management.
      </p>

      <div className="bg-green-50 border-l-4 border-green-700 p-6 my-8">
        <p className="font-semibold text-green-900 mb-3">IPL 2026 Champions:</p>
        <p className="text-gray-700 mb-2">
          <strong>Chennai Super Kings</strong> claimed their 6th title, defeating Mumbai Indians by 15 runs 
          in a thrilling final at the Narendra Modi Stadium, Ahmedabad. MS Dhoni's farewell season ended 
          on a high note, cementing his legacy as the most successful IPL captain.
        </p>
      </div>

      <h2>Women's Cricket: Breaking Barriers</h2>
      <p>
        Indian women's cricket has made remarkable strides, with increased visibility and professional 
        opportunities transforming the landscape:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>Women's IPL reaches 150 million viewers in its fourth season</li>
        <li>Team reaches T20 World Cup final, narrowly missing the title</li>
        <li>Central contracts for women players increased to match 80% of men's contracts</li>
        <li>Infrastructure investments in women's cricket academies across 15 states</li>
      </ul>

      <h2>Challenges and Concerns</h2>
      <p>
        Despite successes, several challenges require attention from the Board of Control for Cricket 
        in India (BCCI) and team management:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li><strong>Overseas Test Performance:</strong> Struggles in SENA countries continue</li>
        <li><strong>Player Workload:</strong> Injury concerns with key players missing important series</li>
        <li><strong>Pace Bowling Depth:</strong> Overdependence on a few frontline bowlers</li>
        <li><strong>Transition Planning:</strong> Managing retirements and succession for senior players</li>
      </ul>

      <h2>Grassroots Development</h2>
      <p>
        The BCCI has launched several initiatives to strengthen cricket at the grassroots level:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>National Cricket Academy expansion with satellite centers in 8 cities</li>
        <li>School cricket program reaching 50,000 institutions</li>
        <li>Talent identification drives in rural and tribal areas</li>
        <li>Partnerships with state governments for infrastructure development</li>
      </ul>

      <h2>The Road to World Cup 2027</h2>
      <p>
        With the ODI World Cup scheduled for October 2027 in South Africa and Zimbabwe, preparations 
        are already underway. The team management has identified key areas of focus:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>Middle-order stability and depth</li>
        <li>Death bowling options in limited-overs cricket</li>
        <li>Fielding standards and fitness benchmarks</li>
        <li>Adaptability to different playing conditions</li>
      </ul>

      <h2>Technology and Innovation</h2>
      <p>
        Indian cricket has embraced technology for player development and fan engagement:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>AI-powered performance analytics for individual player improvement</li>
        <li>Virtual reality training modules for different playing conditions</li>
        <li>Advanced biomechanics labs to prevent injuries and optimize techniques</li>
        <li>Enhanced fan experiences through augmented reality stadium features</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>
        Indian cricket's future appears bright with a talented pool of young players, robust domestic 
        structure, and strong financial backing. The key challenge will be converting this potential 
        into consistent success across all formats and conditions.
      </p>

      <p>
        As the sport continues to evolve globally with new formats and competitions, India's ability 
        to adapt while maintaining its cricketing identity will determine its dominance in the coming 
        decade. The next 12 months will be crucial as the team builds toward major tournaments and 
        establishes a new generation of match-winners.
      </p>
    </BlogLayout>
  );
}
