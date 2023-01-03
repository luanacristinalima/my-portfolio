import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Work() {
  return (
    <div className="work">
      <NavBar />

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

      <Footer />
    </div>
  );
}
