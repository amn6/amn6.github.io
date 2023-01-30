import { Link } from "react-scroll";

const Nav = () => {
    return (
      <nav className="nav" id="nav">
        <span>
        <Link activeClass="active" smooth spy to="home">Home</Link>
        </span>
        <span>
        <Link activeClass="active" smooth spy to="about">About</Link>
        </span>
        <span>
        <Link activeClass="active" smooth spy to="experience">Experience</Link>
        </span>
        <span>
        <Link activeClass="active" smooth spy to="contact">Contact</Link>
        </span>
      </nav>
    );
}


export default Nav;