export default function Contract({ onNavigate }) {
  return (
    <main>
      <section className="card" aria-labelledby="contract-heading">
        <h2 id="contract-heading">Course Contract</h2>
        <figure className="intro-figure">
          <img src="/images/course_icon.svg" alt="Course icon used on the course contract page" width="220" height="220" />
        </figure>
        <p>
          I, <a href="#/introduction" onClick={(e) => { e.preventDefault(); onNavigate('introduction'); }}>William C. Dodson</a> agree to abide by the terms of the course contract in my Fall 2026, ITIS3135, Web Design and Development with my instructor, Professor D.I. von Briesen.
        </p>
        <p>
          I understand that all work that I do on publicly available online tools will be available to the world and will not put information there that is inappropriate for schoolwork, or that I wish to keep private. I also understand that it is my work that counts for attendance, not logins or showing up for class.
        </p>
        <p>
          As such, failure to turn in assignments may show as absences. I also understand that given the structure and content of this class it’s possible to find many examples online or even view my classmates’ code directly. I swear that I will only use these resources to learn and will not cut and paste code except where I have properly given credit and never from my classmates.
        </p>
        <p>Signed: <em>William C. Dodson</em>, <em>September 14, 2026</em></p>
        <a className="home-link" href="#/home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
          Return to the course overview
        </a>
      </section>
    </main>
  );
}
