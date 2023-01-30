import React from "react";
import Landing from './Landing';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import TopButton from '../assets/TopButton'
import './Main.css';

class Main extends React.Component {
  state = {isBelowNav: false};

  hideButton = () => {
    const { isBelowNav } = this.state
    var rect = document.getElementById('nav').getBoundingClientRect();
    rect.y < 0 ?
    !isBelowNav && this.setState({ isBelowNav: true })
    :
    isBelowNav && this.setState({ isBelowNav: false });
  }

  componentDidMount(){
    window.addEventListener('scroll', this.hideButton);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideButton);
  }

  render() {
    const show = this.state.isBelowNav;
    return (
      <div className='main'>
          <Landing/>
          <Nav/>
          <About/>
          <Experience/>
          <Contact/>
          {show ?<TopButton/> : null}
      </div>
    );
  }
}

export default Main;
