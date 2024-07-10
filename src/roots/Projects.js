import weather from "../images/Weather-App.png";
import dictionary from "../images/Dictionary-App.png";
import worldClock from "../images/World-Clock.png";
import blog from "../images/Blog-site.png";
import store from "../images/store-app.png";
import storeReview from "../images/store-app-review.png";
import Miles1 from "../images/amigos-do-miles-1.png";
import Miles2 from "../images/dashboard.jpg";
import Miles3 from "../images/calendar.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="row project-description">
          <div className="col-md-6">
            <h2 className="mt-4 mb-4">
              <i className="fa-solid fa-circle-chevron-right icons"></i> Amigos
              do Miles
            </h2>
          </div>
          <div className="col-md-6">
            <p className="mt-4 mb-4">
              As a Co-Founder and Frontend Developer at Amigos do Miles, I have
              played a key role in shaping the vision and technical execution of
              our platform. My responsibilities include project ideation and
              design, development and implementation of new features, code
              maintenance and optimization, problem-solving, quality assurance,
              user experience optimization, and managing version control and
              documentation using Git.
            </p>
            <p>Build with HTML, CSS, React.js, Typescript, and supabase</p>
            <div className="mb-4">
              <a
                href="https://www.amigosdomiles.com/"
                target="_blank"
                title="Amigos do Miles"
                rel="noreferrer"
              >
                View Project
              </a>
              <i className="fa-solid fa-angles-right icons"></i>
            </div>
          </div>
          <img
            src={Miles1}
            alt="amigos do Miles preview"
            className="img-fluid shadow-sm p-2 mb-5"
          />
          <img
            src={Miles2}
            alt="amigos do Miles preview"
            className="img-fluid shadow-sm p-2 mb-5"
          />
          <img
            src={Miles3}
            alt="amigos do Miles preview"
            className="img-fluid shadow-sm p-2 mb-5"
          />
          <hr />
        </div>

        <div className="row project-description">
          <div className="col-md-6">
            <h2 className="mt-4 mb-4">
              <i className="fa-solid fa-circle-chevron-right icons"></i> Store
              management Project
            </h2>
          </div>
          <div className="col-md-6">
            <p className="mt-4 mb-4">
              This custom store management application was developed for our
              client, offering seamless integration with Shopify's API and the
              shipping company's interface. It enables addition of new stores,
              provides real-time updates on order statuses and offers detailed
              revenue reports categorized by status. In addition to this, a
              custom-built backend was implemented to efficiently store and
              manage all relevant data for the project.
            </p>
            <p>
              Build with HTML, CSS, React.js, Typescript, Tailwind and supabase
            </p>
          </div>
          <img
            src={store}
            alt="store project preview"
            className="img-fluid shadow-sm p-2 mb-5"
          />
          <img
            src={storeReview}
            alt="store project preview"
            className="img-fluid shadow-sm p-2 mb-5"
          />
          <hr />
        </div>

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
