const Contact = () => {
  return (
    <section className="page section-band contact-section" id="contact">
      <div className="section-shell contact-shell">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let's talk about engineering systems, validation, and AI enablement.</h2>
        </div>
        <div className="contact-actions">
          <a className="contact-card" href="mailto:nels123159@gmail.com">
            <span>Email</span>
            <strong>nels123159@gmail.com</strong>
          </a>
          <a className="contact-card" href="https://www.linkedin.com/in/adam-mark-nelson/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>adam-mark-nelson</strong>
          </a>
          <a className="contact-card" href="Adam-Nelson-Resume-2026.pdf" download="Adam-Nelson-Resume-2026.pdf">
            <span>Resume</span>
            <strong>Download PDF</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
  
export default Contact;
