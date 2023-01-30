import Particles from "react-tsparticles";
import particleConfig from "./particleConfig.json";
import { Link } from "react-scroll";

const headShot = "wed.jpg";

const Landing = () => {
  return (
    <section className="landing page" id="home">
        <Particles className="particles"
            params={particleConfig}/>
      <header className="App-header">
        <img src={headShot} alt="logo" />
        <h2>
          Hi I'm Adam Nelson!
        </h2>
        <h4>I am a Software Engineer, with experience in <br/> Computer Hardware, and Multimedia Firmware <br/> Development and Testing.</h4>
        <h4>Always learning, and open to new challenges.</h4>
        <span><Link smooth spy to="nav">Learn More</Link></span>
      </header>
    </section >
  );
}

export default Landing;
