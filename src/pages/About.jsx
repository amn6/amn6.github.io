const capabilities = [
  {
    title: "Low-Level Systems",
    items: ["C/C++", "Firmware", "DMA", "GPU and APU validation", "DisplayPort 2.1", "HDMI 2.1"],
  },
  {
    title: "AI & Automation",
    items: ["Agentic AI tools", "MCP integrations", "RAG workflows", "Python", "Bash", "Jenkins CI/CD"],
  },
  {
    title: "Leadership",
    items: ["People management", "Technical strategy", "Code review", "Team development", "Cross-functional delivery"],
  },
];

const About = () => {
  return (
    <section className="page section-band" id="about">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Engineering leadership with a systems foundation.</h2>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <p>
              I lead AMD's Display Diagnostics software team, building on hands-on experience in firmware,
              hardware validation, multimedia pipelines, and automation for GPU and APU products.
            </p>
            <p>
              My current work focuses on scaling engineering productivity with shared AI workflows,
              including agentic tooling, MCP integrations, RAG systems, and internal learning platforms.
            </p>
            <div className="education">
              <span>Education</span>
              <strong>Bachelor of Engineering, Software</strong>
              <small>McMaster University, Hamilton ON | 2021</small>
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.title}>
                <h3>{capability.title}</h3>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default About;
