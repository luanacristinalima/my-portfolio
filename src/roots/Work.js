export default function Work() {
  return (
    <div className="work">
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
                <a
                  href="/work"
                  title="Luana's work"
                  className="nav-link active"
                >
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
          <p>Take a look at what</p>
          <h1 className="mb-5">I've been workin on!</h1>
          <div className="row projects mt-5">
            <div className="col-md-4">
              <h2 className="mt-5 mb-4 text-center">Weather Project</h2>
              <div className="work-container">
                <img
                  src="/images/Work page/Weather-project.png"
                  alt="Weather app project preview"
                  className="img-fluid"
                />
                <div className="work-overlay">
                  <div className="work-content">
                    <p className="mt-4">Build with HTML, CSS and JavaScript</p>
                    <div className="work-icons">
                      <a
                        href="https://www.shecodes.io/workshops/shecodes-plus-d2fb7eb5-d6b6-4406-b660-45c4286a097b/projects/1255629"
                        target="_blank"
                        title="Weather app project"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                      <a
                        href="https://github.com/luanacristinalima/weather-app"
                        target="_blank"
                        title="GitHub Weather app project"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h2 className="mt-5 mb-4 text-center">World Clock Project</h2>
              <div className="work-container">
                <img
                  src="/images/Work page/World-Clock-project.png"
                  alt="World Clock project preview"
                  className="img-fluid"
                />
                <div className="work-overlay">
                  <div className="work-content">
                    <p className="mt-4">Build with HTML, CSS and JavaScript</p>
                    <div className="work-icons">
                      <a
                        href="https://bejewelled-maamoul-ed6a16.netlify.app/"
                        target="_blank"
                        title="World Clock Project"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                      <a
                        href="https://github.com/luanacristinalima/World-Clock"
                        target="_blank"
                        title="GitHub World Clock project"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h2 className="mt-5 mb-4 text-center">Lina Bo Bardi Project</h2>
              <div className="work-container">
                <img
                  src="/images/Work page/Lina-project.png"
                  alt="Lina Bo Bardi project preview"
                  className="img-fluid"
                />
                <div className="work-overlay">
                  <div className="work-content">
                    <p className="mt-4">Build with HTML, CSS and JavaScript</p>
                    <div className="work-icons">
                      <a
                        href="https://www.shecodes.io/workshops/shecodes-basics-c358a359-7059-4a9a-a004-9114a5f889cf/projects/1225556"
                        target="_blank"
                        title="Lina Bo Bardi project"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h2 className="mt-5 mb-4 text-center">Watercolor Project</h2>
              <div className="work-container">
                <img
                  src="/images/Work page/Watercolor-project.png"
                  alt="watercolor project preview"
                  className="img-fluid"
                />
                <div className="work-overlay">
                  <div className="work-content">
                    <p className="mt-4">Build with HTML, CSS and JavaScript</p>
                    <div className="work-icons">
                      <a
                        href="https://www.shecodes.io/workshops/shecodes-basics-add-on-f72fd28e-9087-49e9-8163-cb5a50de7ca9/projects/1246934"
                        target="_blank"
                        title="Watercolor project"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
