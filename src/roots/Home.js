import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="Home">
      <NavBar />

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

      <Footer />
    </div>
  );
}
