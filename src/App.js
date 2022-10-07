import React, {useState} from 'react';
import './App.css';
import './MediaQuery.css';
import Heading from './components/Heading';
import Nav from './components/Nav';
import Top from './components/Top';



function App() {
  // const[display, setDisplay] = useState("none")

  // document.addEventListener("scroll", function(){   
  //   if(document.documentElement.scrollTop>100){
  //     setDisplay("flex")
  //   }
  //   else if(document.documentElement.scrollTop<100){
  //     setDisplay("none")
  //   }
  // })

  // const moveToTop = ()=>{
  //   document.documentElement.scrollTop = 0
  //   setDisplay("none")
  // }

  return (
    <div>
      <Top/>
      <Heading/>
      <Nav/>
    </div>
  );
}

export default App;
