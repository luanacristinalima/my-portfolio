import hero1 from "../images/Img-hero-1.png";
import hero2 from "../images/Img-hero-2.png";
import hero3 from "../images/Img-hero-3.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>Hi! I'm</p>
            <h1>Luana Lima</h1>
            <h2>Frontend Developer, based in Portugal.</h2>
            <a href="/about" title="About Luana Lima">
              read more about me
            </a>
          </div>
          <div className="col-lg-3">
            <img
              src={hero1}
              alt="Luana Lima"
              className="img-fluid rounded-0 d-none d-lg-block"
            />
          </div>
          <div className="col-lg-3">
            <img
              src={hero2}
              alt="Luana Lima"
              className="img-fluid rounded-0 mb-4 img-hero d-none d-lg-block"
            />
            <img
              src={hero3}
              alt="Luana Lima"
              className="img-fluid rounded-0 img-hero d-none d-lg-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
