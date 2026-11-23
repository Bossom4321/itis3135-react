export default function Home({ onNavigate }) {
  return (
    <main>
      <section className="card" aria-labelledby="course-overview">
        <h2 id="course-overview">Course Overview</h2>
        <figure>
          <img src="/images/course_icon.svg" alt="ITIS3135 course illustration" width="220" height="220" />
        </figure>
        <p>Welcome to my ITIS3135 course site. This page is dedicated to my work in front-end web development, and it is intended to help visitors navigate the course pages I have created.</p>
        <p>This site includes my course introduction, contract, and overview pages so visitors can navigate my work clearly and consistently.</p>
        <ul>
          <li>
            <a href="#/introduction" onClick={(e) => { e.preventDefault(); onNavigate('introduction'); }}>
              Open the course introduction page
            </a>
          </li>
          <li>
            <a href="#/contract" onClick={(e) => { e.preventDefault(); onNavigate('contract'); }}>
              Open the course contract page
            </a>
          </li>
          <li>
            <a href="#/about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
              Open the about page
            </a>
          </li>
        </ul>
        <a className="home-link" href="https://webpages.charlotte.edu/wdodson5/">
          Return to my personal home page
        </a>
      </section>
    </main>
  );
}
