export default function About() {
  return (
    <div className="about">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <div className="logo d-none d-md-block">
            <h3>
              <a href="/" title="Homepage">
                Luana Lima
              </a>
            </h3>
          </div>
          <div className="logo d-block d-md-none">
            <h3>
              <a href="/" title="Homepage">
                LL
              </a>
            </h3>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" title="Homepage" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about"
                  title="About Luana"
                  className="nav-link active"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/work" title="Luana's work" className="nav-link">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" title="Luana's contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>About</p>
              <h1>Luana Lima</h1>
              <h2 className="mb-4">Frontend Developer, based in Portugal.</h2>
              <p className="about-text mb-4">
                I'm originally from Brazil, but now I'm based in Portugal. I
                graduated in architecture and urban design, but recently I
                started to learn code. Since then, I haven't stopped and I'm
                excited to keep learning and perhaps start a new career in
                information technology.
              </p>
              <a href="/work.html" title="Luana's work">
                View my Projects
              </a>
              <i className="fa-solid fa-angles-right icons"></i>
            </div>
            <div className="col-md-6">
              <img
                src="/images/Luana-photo.jpg"
                alt="Luana Lima"
                className="img-fluid shadow"
              />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <h2>
            Get in touch.
            <br />
            Let's work together.
          </h2>
          <div className="row">
            <div className="col-md-6">
              <p className="contact">Contact</p>
              <p>+351 914951329</p>
              <a
                href="mailto:luana.arqeurb@gmail.com"
                className="email"
                title="Email Luana Lima"
              >
                luana.arqeurb@gmail.com
              </a>
            </div>
            <div className="col-md-6 mb-5">
              <p className="contact">Social</p>
              <a
                href="https://www.linkedin.com/in/luana-lima-50a70619b/"
                target="_blank"
                className="social-links"
                title="LinkedIn Profile"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/luanacristinalima"
                target="_blank"
                className="social-links"
                title="GitHub Profile"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/luanacristina_lima/"
                target="_blank"
                className="social-links"
                title="Instagram Profile"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-5">
          This project was coded by Luana Lima, and it is
          <a
            href="https://github.com/luanacristinalima/Portfolio-Project"
            target="_blank"
            title="GitHub Portfolio Project"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </p>
      </footer>
    </div>
  );
}
