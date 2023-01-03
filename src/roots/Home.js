import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Hero />

      <p className="text-center m-5 featured-projects">Featured Projects</p>

      <Projects />
      <Footer />
    </div>
  );
}
