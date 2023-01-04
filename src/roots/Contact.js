import NavBar from "./NavBar";

export default function Contact() {
  return (
    <div className="contact">
      <NavBar />

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
