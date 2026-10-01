import "./About.css";

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-main">
          <h2 className="section-title">About me</h2>

          <p className="about-text">
            I'm a final-year BCA student (Computer application) student at SHEAT College of
            Engineering, Varanasi. I enjoy turning ideas into working websites,
            and I've spent the last year building projects with the MERN stack.
          </p>

          <a
            href="#"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>

        <ul className="about-facts">
          <li>
            <span className="fact-label">Location</span>
            <span>Varanasi, India</span>
          </li>

          <li>
            <span className="fact-label">Email</span>
            <a href="mailto:pandeyhimanshu4111@gmail.com">pandeyhimanshu4111@gmail.com</a>
          </li>

          <li>
            <span className="fact-label">GitHub</span>
            <a
              href="https://github.com/Himanshupandey9935"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Himanshupandey
            </a>
          </li>

          <li>
            <span className="fact-label">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/himanshu-pandey-0508a4402?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/Himanshupandey
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;