import "./Footer.css";

export default function Footer() {
  return (
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
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        This project was coded by Luana Lima, and it is {""}
        <a
          href="https://github.com/luanacristinalima/my-portfolio"
          target="_blank"
          title="GitHub Portfolio Project"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </p>
    </footer>
  );
}
