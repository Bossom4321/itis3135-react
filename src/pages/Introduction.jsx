export default function Introduction({ onNavigate }) {
  return (
    <main>
      <section className="card" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Introduction</h2>
        <p>This is a public page and I agree not to put anything on it I wouldnt want others to see - WCD 9/21/26</p>
        <h6 className="display-name">William C.Dodson ~ Wild Deer</h6>

        <figure className="intro-figure">
          <img src="/images/profilepicture_optimized.jpg" alt="Portrait of William Dodson" width="220" height="220" />
          <figcaption><em>In the library getting work done</em></figcaption>
        </figure>

        <p>My name is William Dodson. I have been programming for a good decade of my life, and I continue to learn more about computers every day. Every time I feel like I understand computing, I discover more to learn. I hope one day I can develop a broad understanding of technology and how it shapes the world.</p>
        <p><strong>Personal Background:</strong> I have lived in North Carolina for most of my life, with a short time spent in Washington state.</p>
        <p><strong>Professional Background:</strong> I worked at CVS for a year before starting college.</p>
        <p><strong>Academic Background:</strong> I am studying Computer Science with a focus on Cyber Security.</p>
        <p><strong>Primary Work Computer:</strong> Dual-booting laptop, Windows 11 and Linux.</p>
        <p><strong>Primary Work Location:</strong> Atkins Library at the university.</p>
        <p><strong>Alternate Computer &amp; Location:</strong> Desktop computer at home.</p>

        <ol>
          <li><strong>Courses I'm Taking, &amp; Why:</strong>
            <ol>
              <li><strong>MATH1242 - Calculus II:</strong> Required for graduation.</li>
              <li><strong>ITSC2600 - Computer Science Program, Identity, Career:</strong> It helps me understand career paths and how to approach the software field.</li>
              <li>
                <strong>
                  <a href="#/contract" onClick={(e) => { e.preventDefault(); onNavigate('contract'); }}>
                    ITIS3135 - Front-End Web Application Development
                  </a>
                </strong>: It gives me practical experience building and organizing websites.
              </li>
              <li><strong>ITIS3130 - Introduction to Human-Centered Computing:</strong> It helps me keep user experience and usability in mind while coding.</li>
              <li><strong>ITSC3155 - Software Engineering:</strong> It gives me a stronger foundation in how software projects are designed and maintained.</li>
            </ol>
          </li>
        </ol>

        <p><strong>Favorite Reminder:</strong> I am a very tall man.</p>
        <blockquote>
          <p>"Nothing is impossible for the person who is not doing it."</p>
        </blockquote>
        <p>~ Clifford Dodson (My grandfather)</p>

        <a className="home-link" href="#/home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
          Return to the course overview
        </a>
      </section>
    </main>
  );
}
