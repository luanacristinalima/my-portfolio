import NavBar from "./NavBar";
import Footer from "./Footer";

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
                excited to keep learning and perhaps start a new career in
                information technology.
              </p>
              <a href="/work.html" title="Luana's work">
                View my Projects
              </a>
              <i className="fa-solid fa-angles-right icons"></i>
            </div>
            <div className="col-md-6">
              <img
                src="/images/Luana-photo.jpg"
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
