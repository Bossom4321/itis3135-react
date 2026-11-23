export default function About({ onNavigate }) {
  return (
    <main>
      <section className="card" aria-labelledby="about-heading">
        <h2 id="about-heading">About</h2>
        <figure className="intro-figure">
          <img src="/images/course_icon.svg" alt="Course icon representing the ITIS3135 web development course" width="220" height="220" />
        </figure>
        <p>
          This page is built in part to demonstrate work for the Charlotte class ITIS3135 - Front-End Web Application Development for those sections run by Mr. von Briesen. You may find additional information about this course at <a href="https://divonbriesen.github.io/teaching/itis3135/" target="_blank" rel="noopener">https://divonbriesen.github.io/teaching/itis3135/</a>.
        </p>

        <p>
          This course seeks to provide students relevant experience in front-end web application development by building multiple websites using a variety of tools and techniques.
        </p>

        <p><strong>The tools the course uses specifically include:</strong></p>
        <ul>
          <li>VS Code</li>
          <li>Emmet within VS Code</li>
          <li>SFTP via Filezilla</li>
          <li>Git via GitHub Desktop and GitHub.com</li>
          <li>Various Browser tools</li>
          <li>The Accumulus Validator</li>
        </ul>

        <p><strong>The sites students will build, and which this page links to, should include:</strong></p>
        <ul>
          <li>A personal home portfolio</li>
          <li>This course site</li>
          <li>A design firm site - representing a fictitious/aspirational design/consulting firm for the student and named after them.</li>
          <li>A Crappy page - intended to do all the bad things, so as to avoid them anywhere else</li>
          <li>A whimsical product company</li>
          <li>A student/colleague/peer management tool</li>
          <li>A client project website</li>
        </ul>

        <p>
          These projects together help students build a portfolio of practical web work while learning the reasoning behind good structure, cleaner code, and stronger user experience design.
        </p>
        <a className="home-link" href="#/home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
          Return to the course overview
        </a>
      </section>
    </main>
  );
}
