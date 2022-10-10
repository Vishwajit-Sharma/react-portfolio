import React, {useState} from 'react';
import './App.css';
import './MediaQuery.css';
import Nav from './components/Nav';
import Top from './components/Top';
import MoveToTop from './components/MoveToTop';
import About from './components/About';
import Resume from './components/Resume';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';



function App() {
  const[display, setDisplay] = useState("none")

  document.addEventListener("scroll", function(){   
    if(document.documentElement.scrollTop>100){
      setDisplay("flex")
    }
    else if(document.documentElement.scrollTop<100){
      setDisplay("none")
    }
  })

  const moveToTop = ()=>{
    document.documentElement.scrollTop = 0
    setDisplay("none")
  }

  return (
    <div>
      <Nav/>
      <MoveToTop moveToTop={moveToTop} display={display}/>
      <Top/>
      <About/>
      <Resume/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
