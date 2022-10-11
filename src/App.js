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
import Copyright from './components/Copyright';
// import {Routes, Route} from 'react-router-dom'



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
      {/* <Routes>
        <Route exactpath='/' element={<Top/>}/>
        <Route exactpath='/about' element={<About/>}/>
        <Route exactpath='/resume' element={<Resume/>}/>
        <Route exactpath='/testimonial' element={<Testimonial/>}/>
        <Route exactpath='/contact' element={<Contact/>}/> */}
      <Top/>
      <About/>
      <Resume/>
      <Testimonial/>
      <Contact/>
      {/* </Routes> */}
      <Copyright/>
    </div>
  );
}

export default App;
