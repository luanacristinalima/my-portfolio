import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  let activeStyle = {
    color: "#341918",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <div className="logo d-none d-md-block">
          <h3>
            <a href="/" title="Homepage">
              Luana Lima
            </a>
          </h3>
        </div>
        <div className="logo d-block d-md-none">
          <h3>
            <a href="/" title="Homepage">
              LL
            </a>
          </h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                title="Homepage"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                title="About Luana"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/work"
                title="Luana's work"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                title="Luana's contact"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://www.dropbox.com/s/q2mgvme0mkfexo2/Luana_Lima_Resume.pdf?dl=0"
                target="_blank"
                rel="noreferrer"
                title="Luana's resume"
                className="nav-link"
              >
                My Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
