import { Link } from "react-scroll";

const Nav = () => {
    return (
      <nav className="nav" id="nav">
        <Link className="nav-brand" smooth spy to="home">Adam Nelson</Link>
        <div className="nav-links">
          <Link activeClass="active" smooth spy to="about">About</Link>
          <Link activeClass="active" smooth spy to="experience">Experience</Link>
          <Link activeClass="active" smooth spy to="contact">Contact</Link>
          <a className="nav-resume" href="Adam-Nelson-Resume-2026.pdf" download="Adam-Nelson-Resume-2026.pdf">Resume</a>
        </div>
      </nav>
    );
}


export default Nav;
