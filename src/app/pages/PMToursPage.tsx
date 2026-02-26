import { BlogLayout } from '../components/BlogLayout';

export function PMToursPage() {
  const relatedPosts = [
    { title: 'Vote Stealing Investigation', link: '/vote-stealing' },
    { title: 'India Annual Budget Analysis', link: '/yearly-budget' },
  ];

  return (
    <BlogLayout
      title="Prime Minister's International Tours: Strategic Diplomacy in Action"
      image="https://images.unsplash.com/photo-1691328024236-55b85f698fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcmltZSUyMG1pbmlzdGVyJTIwZ292ZXJubWVudHxlbnwxfHx8fDE3NzIwNjAwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      author="Vikram Singh"
      date="February 22, 2026"
      relatedPosts={relatedPosts}
      category='pm-tours'
    >
      <h2>Diplomacy in a Multipolar World</h2>
      <p>
        India's Prime Minister has maintained an active international engagement schedule, positioning 
        India as a key player in global affairs. These diplomatic missions serve multiple purposes: 
        strengthening bilateral ties, securing economic partnerships, and projecting India's growing 
        influence on the world stage.
      </p>

      <h2>2025-26: A Year of Strategic Engagement</h2>
      <p>
        The current fiscal year has seen the Prime Minister undertake 18 international visits, covering 
        32 countries across five continents. Each visit has been carefully calibrated to advance India's 
        national interests while contributing to global governance.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-700 p-6 my-8">
        <p className="font-semibold text-purple-900 mb-3">Key Visits 2025-26:</p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>United States (June 2025):</strong> State visit, semiconductor partnership, defense cooperation</li>
          <li><strong>France & UAE (August 2025):</strong> G20 preparatory talks, energy security agreements</li>
          <li><strong>Japan & South Korea (September 2025):</strong> Act East policy, technology collaboration</li>
          <li><strong>Saudi Arabia & Egypt (November 2025):</strong> Energy diplomacy, diaspora engagement</li>
          <li><strong>Nigeria & South Africa (January 2026):</strong> Africa outreach, mining sector partnerships</li>
        </ul>
      </div>

      <h2>Economic Diplomacy: Deals and Partnerships</h2>
      <p>
        Beyond ceremonial engagements, these tours have yielded tangible economic benefits:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>Bilateral trade agreements worth over $125 billion</li>
        <li>Foreign Direct Investment commitments exceeding $85 billion</li>
        <li>Technology transfer agreements in semiconductors, green energy, and defense</li>
        <li>Education and skill development partnerships benefiting 2 million students</li>
      </ul>

      <h2>Strategic Partnerships</h2>
      <p>
        India's diplomatic outreach has reinforced key strategic partnerships that serve long-term 
        national interests:
      </p>

      <blockquote className="border-l-4 border-orange-500 pl-6 italic my-8 text-gray-700">
        "India's foreign policy is guided by our commitment to a multipolar world order, where dialogue 
        and cooperation replace confrontation, and where no nation's progress comes at the expense of another."
        <span className="block mt-2 text-sm">— Prime Minister's address at UN General Assembly</span>
      </blockquote>

      <h3>Quad Engagement</h3>
      <p>
        The Quadrilateral Security Dialogue with the US, Japan, and Australia has matured into a 
        substantive partnership focusing on maritime security, vaccine diplomacy, and climate action. 
        The Prime Minister's visits to each Quad nation have deepened coordination on Indo-Pacific strategy.
      </p>

      <h3>Neighborhood First</h3>
      <p>
        Despite global engagements, the "Neighborhood First" policy remains central. Visits to 
        Bangladesh, Sri Lanka, Nepal, and Bhutan have aimed to strengthen regional connectivity 
        and economic integration through initiatives like BIMSTEC and SAARC.
      </p>

      <h2>The Cost Question</h2>
      <p>
        Critics have raised questions about the frequency and cost of these international visits. 
        Government data shows that the cumulative expenditure on PM's foreign tours in 2025-26 
        was approximately ₹425 crore, which includes security, logistics, and delegation costs.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
        <p className="font-semibold text-yellow-900 mb-2">Comparative Analysis:</p>
        <p className="text-gray-700">
          While the absolute numbers appear substantial, comparative analysis shows that India's spending 
          on diplomatic engagement as a percentage of GDP (0.012%) is lower than major economies like 
          the US (0.021%), China (0.018%), and the UK (0.024%). Moreover, economic deals secured during 
          these visits represent a 295:1 return on investment.
        </p>
      </div>

      <h2>Diaspora Engagement</h2>
      <p>
        A significant component of these tours involves engaging with the Indian diaspora, which numbers 
        over 32 million globally. Community events during official visits serve to:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>Strengthen cultural connections and national identity</li>
        <li>Mobilize diaspora contributions to India's development</li>
        <li>Build positive perception of India in host countries</li>
        <li>Create business and investment networks</li>
      </ul>

      <h2>Multilateral Forums</h2>
      <p>
        India's participation in forums like the UN, G20 (as current president), BRICS, and SCO has 
        elevated its voice on global issues from climate change to reforming international institutions. 
        The Prime Minister's speeches at these forums have consistently advocated for the Global South's 
        interests.
      </p>

      <h2>Assessing Impact</h2>
      <p>
        Measuring the success of diplomatic engagement requires looking beyond immediate headlines to 
        long-term strategic outcomes:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li><strong>Defense Cooperation:</strong> Access to advanced technologies and joint exercises</li>
        <li><strong>Energy Security:</strong> Diversified sources and competitive pricing</li>
        <li><strong>Trade Growth:</strong> Merchandise exports reached $775 billion in 2025</li>
        <li><strong>Global Positioning:</strong> Increased participation in international decision-making</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>
        As India approaches 2030, diplomatic engagement will remain crucial to achieving national 
        objectives. Upcoming visits planned for the latter half of 2026 include Germany for G7 
        outreach, Brazil for BRICS summit, and Australia for comprehensive strategic partnership review.
      </p>

      <p>
        The effectiveness of these tours will ultimately be judged by whether they translate into 
        sustained economic growth, technological advancement, and enhanced security for India. While 
        symbolism and optics matter in diplomacy, substantive outcomes must remain the primary metric 
        of success.
      </p>
    </BlogLayout>
  );
}
