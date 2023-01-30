import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import portfolio from "../assets/portfolio.json"

const Card = (item) => {
  return (
    <div className="subcontent card">
      <h5>{item.title}</h5>
      {item.isJob == true ?
        <h5>Company: {item.company}</h5>
        : <></>}
      <h5>{item.date}</h5>
      {item.links.linkType == "YouTube"? <div className="vid-container"><iframe className="responsive-iframe"
src={item.links.url}></iframe></div>:<></>}
      <h6>{item.description}</h6>
      <ul>
        {item.points.map((point) => ( <div>
          <li className="point">{point}</li><br/>
          </div>
        ))}
      </ul>
    </div>
  );
}

const Experience = () => {
    return (
      <section className="page" id="experience">
        <header className="App-header">
          <h3>
            Experience
          </h3>
        </header>
        <div className="content experience">
          {portfolio.projects.map(Card)}
        </div>
      </section>
    );
  }
  
  export default Experience;