import { BlogLayout } from '../components/BlogLayout';

export function IndigoDelaysPage() {
  const relatedPosts = [
    { title: 'Indian Railways Development', link: '/railways' },
    { title: 'PM Tours and Diplomacy', link: '/pm-tours' },
  ];

  return (
    <BlogLayout
      title="Indigo Flight Delays: Analysis and Consumer Rights"
      image="https://images.unsplash.com/photo-1723137664649-3bb988fc221d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ28lMjBhaXJwbGFuZSUyMGFpcnBvcnR8ZW58MXx8fHwxNzcyMDYwMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      author="Neha Kapoor"
      date="February 18, 2026"
      relatedPosts={relatedPosts}
      category="indigo-delays"
    >
      <h2>Understanding the Delay Crisis</h2>
      <p>
        IndiGo, India's largest airline by market share, has faced increasing scrutiny over flight delays 
        and cancellations. With over 60% of domestic market share, delays at IndiGo have a ripple effect 
        across the entire aviation ecosystem. This comprehensive analysis examines the patterns, causes, 
        and implications for passengers.
      </p>

      <h2>The Numbers Tell a Story</h2>
      <p>
        Data from the Directorate General of Civil Aviation (DGCA) reveals concerning trends in IndiGo's 
        on-time performance over the past year.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
        <p className="font-semibold text-red-900 mb-3">2025-26 Delay Statistics:</p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Average On-Time Performance:</strong> 68.3% (down from 78% in 2024)</li>
          <li><strong>Flights Delayed Over 2 Hours:</strong> 3,247 instances</li>
          <li><strong>Cancellations:</strong> 1,892 flights (0.8% of total operations)</li>
          <li><strong>Passenger Complaints:</strong> 12,456 registered with DGCA</li>
        </ul>
      </div>

      <h2>Root Causes of Delays</h2>
      <p>
        Multiple factors contribute to the delay crisis at IndiGo:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li><strong>Aircraft Maintenance:</strong> Grounding of aircraft due to engine issues, particularly with Pratt & Whitney engines</li>
        <li><strong>Crew Shortages:</strong> Insufficient pilot and cabin crew availability during peak seasons</li>
        <li><strong>Airport Congestion:</strong> Slot constraints at major hubs like Delhi and Mumbai</li>
        <li><strong>Weather Disruptions:</strong> Monsoon and fog-related delays during critical months</li>
        <li><strong>Air Traffic Management:</strong> Limited airspace capacity leading to holding patterns</li>
      </ul>

      <h2>Impact on Passengers</h2>
      <p>
        The delays have significant consequences for travelers, from missed connections to disrupted business 
        plans. Consumer forums have reported a 40% increase in complaints related to IndiGo delays and the 
        airline's response to passenger grievances.
      </p>

      <blockquote className="border-l-4 border-blue-900 pl-6 italic my-8 text-gray-700">
        "When airlines control 60% of the market, their operational issues become everyone's problem. 
        The lack of competition means passengers have limited alternatives when delays occur."
        <span className="block mt-2 text-sm">— Aviation Consumer Rights Advocate</span>
      </blockquote>

      <h2>Your Consumer Rights</h2>
      <p>
        Passengers are entitled to specific compensations and facilities under DGCA regulations:
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-900 p-6 my-8">
        <p className="font-semibold text-blue-900 mb-3">Passenger Entitlements:</p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Delays 0-2 hours:</strong> Refreshments and communication facilities</li>
          <li><strong>Delays 2-4 hours:</strong> Meals and refreshments</li>
          <li><strong>Delays over 4 hours:</strong> Meals + hotel accommodation (if overnight) + alternative flight or full refund</li>
          <li><strong>Cancellations:</strong> Full refund or alternative flight + compensation up to ₹20,000</li>
        </ul>
      </div>

      <h2>How to Claim Compensation</h2>
      <p>
        Many passengers are unaware of their rights or find the claims process challenging. Here's a step-by-step guide:
      </p>
      <ul className="list-decimal list-inside space-y-2 my-6">
        <li>Document your delay with photos of departure boards and boarding passes</li>
        <li>Request written confirmation of the delay reason from airline staff</li>
        <li>File a complaint through the airline's customer service portal within 30 days</li>
        <li>If unsatisfied, escalate to AirSewa portal (DGCA's grievance system)</li>
        <li>Consider consumer court for claims above ₹20,000</li>
      </ul>

      <h2>IndiGo's Response and Improvements</h2>
      <p>
        The airline has acknowledged the challenges and announced several measures:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>Induction of 75 new aircraft by end of 2026</li>
        <li>Recruitment of 2,000 additional crew members</li>
        <li>Enhanced maintenance facilities at major hubs</li>
        <li>Improved customer communication systems for delay notifications</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>
        While IndiGo works on operational improvements, passengers should remain informed about their rights 
        and hold airlines accountable. The coming monsoon season will be a critical test of whether the 
        airline's corrective measures translate into better on-time performance.
      </p>

      <p>
        Consumer advocacy groups continue to push for stricter enforcement of passenger rights regulations 
        and greater transparency in delay reporting. Only through persistent pressure and regulatory oversight 
        can the aviation sector deliver the reliability that passengers deserve.
      </p>
    </BlogLayout>
  );
}
