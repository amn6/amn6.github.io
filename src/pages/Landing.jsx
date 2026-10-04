import Particles from "react-tsparticles";
import particleConfig from "./particleConfig.json";
import { Link } from "react-scroll";

const headShot = "wed.jpg";
const highlights = [
  { value: "16", label: "engineers led directly and indirectly" },
  { value: "200+", label: "engineers enabled with shared AI workflows" },
  { value: "40%", label: "test creation targeted for AI automation" },
];

const Landing = () => {
  return (
    <section
      className="landing page"
      id="home"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(247, 244, 239, 0.96), rgba(237, 242, 238, 0.9)), url(${headShot})`,
      }}
    >
        <Particles className="particles"
            params={particleConfig}/>
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Display diagnostics, firmware, and AI enablement</p>
          <h1>Adam Nelson builds systems that help hardware teams validate faster.</h1>
          <p className="hero-summary">
            Section Manager, Software Development at AMD, leading Display Diagnostics and building agentic AI,
            MCP, and RAG workflows for engineering teams.
          </p>
          <div className="hero-actions">
            <Link className="button primary" smooth spy to="experience">View Work</Link>
            <a className="button secondary" href="AdamNelson-Resume.pdf" download="AdamNelson-Resume.pdf">Download Resume</a>
          </div>
        </div>
        <div className="hero-profile" aria-label="Profile summary">
          <img src={headShot} alt="Adam Nelson" />
          <div>
            <span className="profile-name">Section Manager</span>
            <span className="profile-role">AMD Display Diagnostics</span>
          </div>
        </div>
        <div className="impact-strip">
          {highlights.map((highlight) => (
            <div className="impact-item" key={highlight.label}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </header>
    </section >
  );
}

export default Landing;
