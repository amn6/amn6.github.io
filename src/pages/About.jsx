const About = () => {
    return (
      <section className="page" id="about">
        <header className="App-header">
          <h3>
            About
          </h3>
        </header>
        <div className="content">
          <div className="subcontent">
            <h4>
              Bio
            </h4>
            <ul>
              <li>Software Engineer graduate from McMaster University.</li>
              <br/>
              <li>Originally self taught programmer starting from the age of 12 years old.</li>
              <br/>
              <li>Quick learner, working as a Firmware engineer with no formal computer hardware education.</li>
              <br/>
              <li>Enjoy developing software from scratch but easily jump into existing projects.</li>
              <br/>
            </ul>
          </div>
          <div className="subcontent">
            <h4>
              Skills
            </h4>
            <ul>
              <li>Programming Languages</li>
                <ul>
                  <li>C++</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Kotlin</li>
                  <li>HTML, CSS, JS</li>
                </ul>
              <br/>
              <li>Video Encoding and Decoding</li>
                <ul>
                  <li>AVC</li>
                  <li>HEVC</li>
                  <li>VP9</li>
                </ul>
              <br/>
              <li>Display Standards</li>
                <ul>
                  <li>HDMI</li>
                  <li>Display Port</li>
                </ul>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;