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
                graduated in architecture and urban design, but recently I
                started to learn code. Since then, I haven't stopped and I'm
                excited to keep learning and start a new career in information
                technology.
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
