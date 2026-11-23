import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Contract from './pages/Contract';
import About from './pages/About';

const PAGE_TITLES = {
  home: "William Dodson's Wild Deer | ITIS3135 | Course Overview",
  introduction: "William Dodson's Wild Deer | ITIS3135 | Introduction",
  contract: "William Dodson's Wild Deer | ITIS3135 | Course Contract",
  about: "William Dodson's Wild Deer | ITIS3135 | About",
};

function getPageFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (hash === 'introduction') return 'introduction';
  if (hash === 'contract') return 'contract';
  if (hash === 'about') return 'about';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamically update document title per assignment requirements
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page) => {
    window.location.hash = `#/${page}`;
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'introduction':
        return <Introduction onNavigate={handleNavigate} />;
      case 'contract':
        return <Contract onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="page">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderContent()}
      <Footer />
    </div>
  );
}
