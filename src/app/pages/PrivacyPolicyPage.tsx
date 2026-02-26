// pages/PrivacyPolicyPage.tsx
import React from "react";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          NBMC Insights – Public Information Dashboard <br />
          Effective Date: 26-02-2026 <br />
          Last Updated: 26-02-2026
        </p>

        <article className="prose prose-lg max-w-none prose-gray">
          
          <h2>1. Introduction</h2>
          <p>
            New Bharat Media Corporation (“we”, “our”, “us”) operates NBMC
            Insights (“App”), a public information analytics dashboard designed
            to analyze publicly available discussions on Facebook related to
            selected topics.
          </p>
          <p>
            NBMC Insights collects and processes only publicly accessible
            information through Meta-approved APIs to generate analytical
            insights such as sentiment trends and engagement statistics.
          </p>
          <p>
            We are committed to protecting privacy and complying with the Meta
            Platform Terms, Meta Developer Policies, and applicable data
            protection laws.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            NBMC Insights accesses only publicly available Facebook data using
            Meta APIs.
          </p>

          <h3>A. Public Facebook Content</h3>
          <ul>
            <li>Public Facebook Page posts</li>
            <li>Public comments on those posts</li>
            <li>Public reaction counts (Like, Love, Wow, etc.)</li>
            <li>Post timestamps</li>
            <li>Public Page identifiers and metadata</li>
          </ul>

          <h3>B. Information We Do NOT Collect</h3>
          <ul>
            <li>Private user profiles</li>
            <li>Private messages</li>
            <li>Friend lists</li>
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Non-public or restricted data</li>
          </ul>
          <p>
            The App does not bypass Facebook privacy settings.
          </p>

          <h2>3. Derived and Analytical Data</h2>
          <ul>
            <li>Sentiment scores (positive, neutral, negative)</li>
            <li>Topic classification results</li>
            <li>Aggregated engagement metrics</li>
            <li>Trend and discussion analytics</li>
          </ul>
          <p>
            These outputs are algorithmically generated and used solely for
            informational and analytical purposes.
          </p>

          <h2>4. How We Use Information</h2>
          <p>Public data is used exclusively to:</p>
          <ul>
            <li>Analyze public discourse related to selected topics</li>
            <li>Provide sentiment analysis dashboards</li>
            <li>Measure engagement trends on public Facebook Pages</li>
            <li>
              Support research, media intelligence, and public information
              reporting
            </li>
          </ul>

          <p>We do not:</p>
          <ul>
            <li>Sell personal data</li>
            <li>Use data for targeted advertising</li>
            <li>Build personal user profiles</li>
            <li>Conduct individual surveillance</li>
          </ul>
          <p>
            All insights are presented in aggregated or analytical form.
          </p>

          <h2>5. Legal Basis for Processing</h2>
          <ul>
            <li>Public availability of content on Facebook Pages</li>
            <li>Access granted through Meta-approved APIs</li>
            <li>Compliance with Meta Platform Terms and Developer Policies</li>
            <li>Applicable laws governing publicly available information</li>
          </ul>

          <h2>6. Data Storage and Security</h2>
          <p>
            Data processed by NBMC Insights is hosted on secure servers located
            in India.
          </p>
          <ul>
            <li>Secure HTTPS/TLS encryption</li>
            <li>Access controls and authentication measures</li>
            <li>Restricted internal access to authorized personnel only</li>
          </ul>

          <h2>7. Data Sharing</h2>
          <p>We do not sell, rent, or trade collected data.</p>
          <p>We may share:</p>
          <ul>
            <li>Aggregated analytics</li>
            <li>Statistical insights</li>
            <li>Non-identifiable trend reports</li>
          </ul>
          <p>
            Shared information does not include personally identifiable
            information or raw personal data.
          </p>
          <p>
            Information may be disclosed if required by applicable law or legal
            process.
          </p>

          <h2>8. Compliance with Meta Platform Policies</h2>
          <ul>
            <li>Accesses only public Page content</li>
            <li>Respects user privacy settings</li>
            <li>Does not attempt to identify or profile individuals</li>
            <li>Does not store unnecessary user tokens</li>
            <li>Uses data solely for approved use cases</li>
          </ul>

          <h2>9. Data Deletion Requests</h2>
          <p>
            If you believe publicly available content associated with you has
            been processed by our system and wish to request removal, you may
            contact us at:
          </p>
          <p>
            <strong>Email:</strong> contact@nbmc.info
          </p>
          <p>
            We will review legitimate requests in accordance with applicable
            laws and Meta policies.
          </p>

          <h2>10. Children’s Privacy</h2>
          <p>
            NBMC Insights is not directed toward children under the age of 13,
            and we do not knowingly collect personal information from children.
          </p>

          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any updates
            will be published at the policy URL where this document is hosted.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            <strong>Company Name:</strong> New Bharat Media Corporation <br />
            <strong>Application:</strong> NBMC Insights <br />
            <strong>Email:</strong> contact@nbmc.info <br />
            <strong>Address:</strong> SCO 95, Sector 3, Panchkula,
            Haryana-134109 <br />
            <strong>Website:</strong>{" "}
            <a
              href="https://www.nbmc.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.nbmc.info/
            </a>
          </p>

        </article>
      </div>
    </div>
  );
};