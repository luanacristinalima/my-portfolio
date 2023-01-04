import NavBar from "./NavBar";
import Footer from "./Footer";
import WorkProjects from "./WorkProjects";

export default function Work() {
  return (
    <div className="work">
      <NavBar />

      <div className="content">
        <div className="container">
          <p>Take a look at what</p>
          <h1 className="mb-5">I've been workin on!</h1>
          <WorkProjects />
        </div>
      </div>

      <Footer />
    </div>
  );
}
