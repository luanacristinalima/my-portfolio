export default function Contact() {
  return (
    <div className="contact">
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
                <a href="/about" title="About Luana" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/work" title="Luana's work" className="nav-link">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/contact"
                  title="Luana's contact"
                  className="nav-link active"
                >
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
            <div className="col-md-6">
              <p>Let's work together</p>
              <h1 className="mb-5">Contact Me</h1>
              <h2 className="mb-2 contact">Contact</h2>
              <p className="about-text mb-0">+351 914951329</p>
              <a
                href="mailto:luana.arqeurb@gmail.com"
                className="email"
                title="Email Luana Lima"
              >
                luana.arqeurb@gmail.com
              </a>
              <h2 className="mb-2 contact">Social</h2>
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
      </div>
    </div>
  );
}
