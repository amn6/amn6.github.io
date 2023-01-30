const Contact = () => {
    return (
      <section className="page" id="contact">
        <header className="App-header">
          <h3>
            Contact
          </h3>
        </header>
        <div className="content contact">
          <div className="subcontent">
            <span>Email: <span className="cLink">nels123159@gmail.com</span></span>
          </div>
          <div className="subcontent">
            <span>LinkedIn: <a href="https://www.linkedin.com/in/adam-nelson-b32324153/"><span className="cLink">Here</span></a></span>
          </div>
          <div className="subcontent">
            <span>Resume: <a href="AdamNelson_Resume2023.pdf" download="AdamNelson_Resume2023.pdf"><span className="cLink">Download</span></a></span>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;