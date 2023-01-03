export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="row project-description">
          <div className="col-md-6">
            <h2 className="mt-4 mb-4">
              <i className="fa-solid fa-circle-chevron-right icons"></i>
              Weather App React
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
              Dictionary App
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
              page uses a diversity of javascript functionalities to display the
              date and time of different cities.
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
      </div>
    </div>
  );
}
