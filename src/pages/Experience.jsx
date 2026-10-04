import portfolio from "../assets/portfolio.json"

const ExperienceItem = (item) => {
  return (
    <article className={item.isJob ? "timeline-card" : "timeline-card project-card"}>
      <div className="timeline-meta">
        <span>{item.date}</span>
        {item.company && <strong>{item.company}</strong>}
      </div>
      <div className="timeline-content">
        <h3>{item.title}</h3>
        {item.description && <p>{item.description}</p>}
        {item.links.linkType === "YouTube" && (
          <div className="vid-container">
            <iframe className="responsive-iframe" src={item.links.url} title={item.title}></iframe>
          </div>
        )}
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const Experience = () => {
  const jobs = portfolio.projects.filter((item) => item.isJob);
  const projects = portfolio.projects.filter((item) => !item.isJob);

  return (
    <section className="page section-band muted" id="experience">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>From firmware validation to AI-enabled engineering systems.</h2>
        </div>
        <div className="timeline">
          {jobs.map((item) => (
            <ExperienceItem key={`${item.title}-${item.date}`} {...item} />
          ))}
        </div>
        <div className="section-heading compact">
          <p className="eyebrow">Selected Project</p>
        </div>
        <div className="timeline projects">
          {projects.map((item) => (
            <ExperienceItem key={`${item.title}-${item.date}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
  
export default Experience;
