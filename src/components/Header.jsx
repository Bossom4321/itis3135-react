export default function Header({ currentPage, onNavigate }) {
  return (
    <header>
      <h1>William Dodson's Wild Deer | ITIS3135</h1>
      <p className="tagline"><em>Course home</em></p>
      
      {/* Primary menu: shortened to the core 4 standalone pages per assignment instructions */}
      <nav className="primary-nav" aria-label="Primary navigation">
        <a
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          href="#/home"
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
        >
          Home
        </a>
        <a
          className={`nav-link ${currentPage === 'introduction' ? 'active' : ''}`}
          href="#/introduction"
          onClick={(e) => { e.preventDefault(); onNavigate('introduction'); }}
        >
          Introduction
        </a>
        <a
          className={`nav-link ${currentPage === 'contract' ? 'active' : ''}`}
          href="#/contract"
          onClick={(e) => { e.preventDefault(); onNavigate('contract'); }}
        >
          Contract
        </a>
        <a
          className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
          href="#/about"
          onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
        >
          About
        </a>
      </nav>

      {/* Secondary menu: links to external project pages on the main course site */}
      <nav aria-label="Secondary navigation" className="secondary-nav">
        <a className="nav-link" href="https://webpages.charlotte.edu/wdodson5/itis3135/website_evaluations.html" target="_blank" rel="noopener">CRAP Websites</a>
        <a className="nav-link" href="https://webpages.charlotte.edu/wdodson5/itis3135/crap.html" target="_blank" rel="noopener">Bad Demo Page</a>
        <a className="nav-link" href="https://webpages.charlotte.edu/wdodson5/itis3135/hobby/index.html" target="_blank" rel="noopener">Hobby</a>
        <a className="nav-link" href="https://webpages.charlotte.edu/wdodson5/itis3135/wilddeer/index.html" target="_blank" rel="noopener">Wild Deer</a>
        <a className="nav-link" href="https://webpages.charlotte.edu/wdodson5/itis3135/">Original Course Site</a>
        <a className="nav-link" href="https://webpages.charlotte.edu/wdodson5/">Personal Home</a>
      </nav>
    </header>
  );
}
