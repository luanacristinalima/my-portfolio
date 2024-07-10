import NavBar from "./NavBar";
import Footer from "./Footer";
import portrait from "../images/Luana-photo.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <NavBar />

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>About</p>
              <h1>Luana Lima</h1>
              <h2 className="mb-4">Frontend Developer, based in Portugal.</h2>
              <p className="about-text mb-4">
                I hold a degree in architecture and urban design, and over the
                past year, I have transitioned into the field of software
                development. During this period, I have worked on front-end
                development freelance projects and co-founded the platform
                "Amigos do Miles," where I serve as a Frontend Developer. This
                journey has not only reinforced my passion for information
                technology but also solidified my commitment to continuous
                learning.
              </p>
              <Link to="/work" title="Luana's work">
                View my Projects
              </Link>
              <i className="fa-solid fa-angles-right icons"></i>
            </div>
            <div className="col-md-6">
              <img
                src={portrait}
                alt="Luana Lima"
                className="img-fluid shadow"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
