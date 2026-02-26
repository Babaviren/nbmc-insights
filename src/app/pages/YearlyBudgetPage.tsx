import { BlogLayout } from '../components/BlogLayout';
import { posts } from '../data/posts';

export function YearlyBudgetPage() {
  const relatedPosts = [
    { title: 'Indian Railways Development', link: '/railways' },
    { title: 'Vote Stealing Investigation', link: '/vote-stealing' },
  ];

  return (
    <BlogLayout
      title="India's Annual Budget 2026: A Comprehensive Analysis"
      image="https://images.unsplash.com/photo-1760872646618-13594fc00567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHBhcmxpYW1lbnQlMjBidWRnZXQlMjBlY29ub215fGVufDF8fHx8MTc3MjA2MDAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      author="Priya Sharma"
      date="February 1, 2026"
      relatedPosts={relatedPosts}
      category='yearly-budget'
    >
      <h2>Budget Overview</h2>
      <p>
        The Union Budget 2026 was presented in Parliament with ambitious targets for economic growth, 
        infrastructure development, and social welfare. With an outlay of ₹48 lakh crore, this budget 
        represents a 12% increase from the previous fiscal year.
      </p>

      <h2>Key Allocations</h2>
      <p>
        The Finance Minister has prioritized several critical sectors in this year's budget, reflecting 
        the government's vision for a developed India by 2047.
      </p>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
        <p className="font-semibold text-orange-900 mb-3">Major Sector Allocations:</p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Infrastructure:</strong> ₹10 lakh crore (20.8% of total budget)</li>
          <li><strong>Healthcare:</strong> ₹89,000 crore (1.8% increase from 2025)</li>
          <li><strong>Education:</strong> ₹1.2 lakh crore (2.5% of total budget)</li>
          <li><strong>Defense:</strong> ₹6.2 lakh crore (12.9% of total budget)</li>
          <li><strong>Agriculture:</strong> ₹1.5 lakh crore (3.1% of total budget)</li>
        </ul>
      </div>

      <h2>Infrastructure Push</h2>
      <p>
        The budget continues to emphasize infrastructure development as a key driver of economic growth. 
        Major projects include:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>100 new airports and airstrips under the UDAN scheme</li>
        <li>National Highway expansion to cover 2 lakh kilometers</li>
        <li>50 new Vande Bharat trains for intercity connectivity</li>
        <li>Metro rail projects in 25 tier-2 and tier-3 cities</li>
      </ul>

      <h2>Tax Reforms and Relief Measures</h2>
      <p>
        Several tax reforms have been introduced to boost consumption and ease the burden on middle-class 
        taxpayers:
      </p>

      <blockquote className="border-l-4 border-blue-900 pl-6 italic my-8 text-gray-700">
        "This budget aims to put more money in the hands of consumers while ensuring fiscal prudence. 
        We are committed to maintaining the fiscal deficit target of 4.5% of GDP."
      </blockquote>

      <h2>Digital India Initiatives</h2>
      <p>
        The budget allocates ₹20,000 crore for digital infrastructure and AI development. Key initiatives include:
      </p>
      <ul className="list-disc list-inside space-y-2 my-6">
        <li>National AI Mission with focus on healthcare, agriculture, and education</li>
        <li>Expansion of 5G coverage to all districts by December 2026</li>
        <li>Digital payments infrastructure in rural areas</li>
        <li>Cybersecurity enhancement across government systems</li>
      </ul>

      <h2>Social Welfare Programs</h2>
      <p>
        Recognizing the need for inclusive growth, the budget strengthens various welfare schemes targeting 
        vulnerable populations. The PM-KISAN scheme sees an increase to ₹8,000 per year per beneficiary, 
        while the Ayushman Bharat health coverage expands to include an additional 5 crore families.
      </p>

      <h2>Environmental Sustainability</h2>
      <p>
        A new Green Transition Fund of ₹35,000 crore has been established to support renewable energy 
        projects and climate resilience initiatives. The budget targets 500 GW of renewable energy capacity 
        by 2030, with special emphasis on solar and offshore wind projects.
      </p>

      <h2>Economic Outlook</h2>
      <p>
        Economists have mixed reactions to the budget. While the infrastructure push and tax reliefs are 
        welcomed, concerns remain about the fiscal deficit trajectory and the actual implementation of 
        announced schemes. The coming months will be critical in determining whether these budgetary 
        allocations translate into tangible economic outcomes.
      </p>
    </BlogLayout>
  );
}
