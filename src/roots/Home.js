export default function Home() {
  return (
    <div className="Home">
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
                <a href="/" title="Homepage" className="nav-link active">
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
                <a href="/contact" title="Luana's contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>Hi! I'm</p>
              <h1>Luana Lima</h1>
              <h2>Frontend Developer, based in Portugal.</h2>
              <a href="/about.html" title="About Luana Lima">
                read more about me
              </a>
            </div>
            <div className="col-lg-3">
              <img
                src="../../images/Img-hero-1.png"
                alt="Luana Lima"
                className="img-fluid rounded-0 d-none d-lg-block"
              />
            </div>
            <div className="col-lg-3">
              <img
                src="/images/Img-hero-2.png"
                alt="Luana Lima"
                className="img-fluid rounded-0 mb-4 img-hero d-none d-lg-block"
              />
              <img
                src="/images/Img-hero-3.png"
                alt="Luana Lima"
                className="img-fluid rounded-0 img-hero d-none d-lg-block"
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <p className="text-center m-5 featured-projects">Featured Projects</p>
      <div className="projects">
        <div className="container">
          <div className="row project-description">
            <div className="col-md-6">
              <h2 className="mt-4 mb-4">
                <i className="fa-solid fa-circle-chevron-right icons"></i>{" "}
                Weather App
              </h2>
            </div>
            <div className="col-md-6">
              <p className="mt-4 mb-4">
                A weather application created for SheCodes Plus. I used the
                SheCodes Weather API to get the daily forecast and the weather
                condition.
              </p>
              <p>Build with HTML, CSS and JavaScript</p>
              <div className="mb-4">
                <a
                  href="https://www.shecodes.io/workshops/shecodes-plus-d2fb7eb5-d6b6-4406-b660-45c4286a097b/projects/1255629"
                  target="_blank"
                  title="Weather App"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <i className="fa-solid fa-angles-right icons"></i>
              </div>
            </div>
            <img
              src="/images/Weather-App.png"
              alt="Weather project preview"
              className="img-fluid shadow-sm p-2 mb-5"
            />
            <hr />
          </div>
          <div className="row project-description">
            <div className="col-md-6">
              <h2 className="mt-4 mb-4">
                <i className="fa-solid fa-circle-chevron-right icons"></i>{" "}
                Watercolor painting App
              </h2>
            </div>
            <div className="col-md-6">
              <p className="mt-4 mb-4">
                A simple landing page created for SheCodes Basics Add-On. This
                page is about one of my favorite hobbies and has a Dark/Light
                Theme change.
              </p>
              <p>Build with HTML, CSS and JavaScript</p>
              <div className="mb-4">
                <a
                  href="https://www.shecodes.io/workshops/shecodes-basics-add-on-f72fd28e-9087-49e9-8163-cb5a50de7ca9/projects/1246934"
                  target="_blank"
                  title="Watercolor painting App"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <i className="fa-solid fa-angles-right icons"></i>
              </div>
            </div>
            <img
              src="/images/Watercolor-painting.png"
              alt="Watercolor painting project preview"
              className="img-fluid shadow-sm p-2 mb-5"
            />
            <hr />
          </div>
          <div className="row project-description">
            <div className="col-md-6">
              <h2 className="mt-4 mb-4">
                <i className="fa-solid fa-circle-chevron-right icons"></i> World
                Clock App
              </h2>
            </div>
            <div className="col-md-6">
              <p className="mt-4 mb-4">
                A World Clock application created for SheCodes Plus Add-On. this
                page uses a diversity of javascript functionalities to display
                the date and time of different cities.
              </p>
              <p>Build with HTML, CSS and JavaScript</p>
              <div className="mb-4">
                <a
                  href="https://bejewelled-maamoul-ed6a16.netlify.app/"
                  target="_blank"
                  title="World Clock App"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <i className="fa-solid fa-angles-right icons"></i>
              </div>
            </div>
            <img
              src="/images/World-Clock.png"
              alt="World Clock project preview"
              className="img-fluid shadow-sm p-2 mb-5"
            />
            <hr />
          </div>
          <div className="row project-description">
            <div className="col-md-6">
              <h2 className="mt-4 mb-4">
                <i className="fa-solid fa-circle-chevron-right icons"></i> Lina
                Bo Bardi App
              </h2>
            </div>
            <div className="col-md-6">
              <p className="mt-4 mb-4">
                A simple landing page created for SheCodes Basics. This page is
                about my favorite architect and uses simple JS functionalities
                to create user interaction.
              </p>
              <p>Build with HTML, CSS and JavaScript</p>
              <div className="mb-4">
                <a
                  href="https://www.shecodes.io/workshops/shecodes-basics-c358a359-7059-4a9a-a004-9114a5f889cf/projects/1225556"
                  target="_blank"
                  title="Lina Bo Bardi App"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <i className="fa-solid fa-angles-right icons"></i>
              </div>
            </div>
            <img
              src="/images/Lina-Bo-Bardi.png"
              alt="Lina Bo Bardi project preview"
              className="img-fluid shadow-sm p-2 mb-5"
            />
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
