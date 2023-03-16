import weather from "../images/Weather-App.png";
import dictionary from "../images/Dictionary-App.png";
import worldClock from "../images/World-Clock.png";
import blog from "../images/Blog-site.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="row project-description">
          <div className="col-md-6">
            <h2 className="mt-4 mb-4">
              <i className="fa-solid fa-circle-chevron-right icons"></i> Blog
              Project
            </h2>
          </div>
          <div className="col-md-6">
            <p className="mt-4 mb-4">
              A blog website with dynamic pages, pagination, and search engine
              by category and words contained in title and excerpt.
            </p>
            <p>Build with HTML, CSS, Next.js, Typescript and GraphQL</p>
            <div className="mb-4">
              <a
                href="https://www.luanalimablog.com/"
                target="_blank"
                title="Blog Project"
                rel="noreferrer"
              >
                View Project
              </a>
              <i className="fa-solid fa-angles-right icons"></i>
            </div>
          </div>
          <img
            src={blog}
            alt="Blog project preview"
            className="img-fluid shadow-sm p-2 mb-5"
          />
          <hr />
        </div>

        <div className="row project-description">
          <div className="col-md-6">
            <h2 className="mt-4 mb-4">
              <i className="fa-solid fa-circle-chevron-right icons"></i>
              Weather App
            </h2>
          </div>
          <div className="col-md-6">
            <p className="mt-4 mb-4">
              A weather application created for SheCodes React. I used the
              SheCodes Weather API to get the daily forecast and the weather
              condition.
            </p>
            <p>Build with HTML, CSS and React</p>
            <div className="mb-4">
              <a
                href="https://lustrous-dasik-a2c3a2.netlify.app/"
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
            src={weather}
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
              A dictionary application created for SheCodes React Add-On. It was
              created using API integration to display word definitions and a
              gallery.
            </p>
            <p>Build with HTML, CSS and React</p>
            <div className="mb-4">
              <a
                href="https://shimmering-mousse-aa3d92.netlify.app/"
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
            src={dictionary}
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
            src={worldClock}
            alt="World Clock project preview"
            className="img-fluid shadow-sm p-2 mb-5"
          />
          <hr />
        </div>
      </div>
    </div>
  );
}
