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
                I'm originally from Brazil, but now I'm based in Portugal. I
                hold a degree in architecture and urban design, and over the
                past year, I've embarked on a dynamic journey into coding. I've
                actively pursued frontend development, taking on freelance
                projects to apply and enhance my skills. This transition has
                ignited my passion for information technology, and I'm eager to
                continue learning and forge a new career in this field.
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
