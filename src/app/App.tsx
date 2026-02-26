import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { VoteStealingPage } from './pages/VoteStealingPage';
import { YearlyBudgetPage } from './pages/YearlyBudgetPage';
import { RailwaysPage } from './pages/RailwaysPage';
import { IndigoDelaysPage } from './pages/IndigoDelaysPage';
import { PMToursPage } from './pages/PMToursPage';
import { CricketPage } from './pages/CricketPage';
import { NoResultsPage } from './pages/NoResultsPage';
import ArticleDetail from './pages/ArticleDetail';
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vote-stealing" element={<VoteStealingPage />} />
            <Route path="/yearly-budget" element={<YearlyBudgetPage />} />
            <Route path="/railways" element={<RailwaysPage />} />
            <Route path="/indigo-delays" element={<IndigoDelaysPage />} />
            <Route path="/pm-tours" element={<PMToursPage />} />
            <Route path="/cricket" element={<CricketPage />} />
            <Route path="/no-results" element={<NoResultsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            {/* Dynamic Article Route */}
            <Route path="/:category/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
