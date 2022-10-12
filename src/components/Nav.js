import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { Link} from 'react-scroll'


export default function Nav() {

    const [active, setActive] = useState("#")


  return (
    <div>
      <div className="nav-container">
        <ul>
            <li>
                <Link to="home" activeClass="active active1" smooth={true} offset={50} duration={500} onClick={()=>setActive("#")}>
                    <span className={`nav-icon ${active === '#' ? 'active' : ''}`}><IoHomeOutline/></span>
                    <span className={`nav-text home ${active === '#' ? 'active1' : ''}`}>Home</span>
                </Link>
            </li>
            <li>
                <Link to="about" activeClass="active active1" smooth={true} offset={-150} duration={500} onClick={()=>setActive("#about")}>
                    <span className={`nav-icon ${active === '#about' ? 'active' : ''}`}><IoPersonAddOutline/></span>
                    <span className={`nav-text about ${active === '#about' ? 'active1' : ''}`}>About Me</span>
                </Link>
            </li>
            <li>
                <Link to="resume" smooth={true} offset={-100} duration={500} onClick={()=>setActive("#res")}>
                    <span className={`nav-icon ${active === '#res' ? 'active' : ''}`}><IoDocumentAttachOutline/></span>
                    <span className={`nav-text ${active === '#res' ? 'active1' : ''}`}>Resume</span>
                </Link>
            </li>
            <li>
                <Link to="testimonial" smooth={true} offset={-150} duration={500} onClick={()=>setActive("#pf")}>
                    <span className={`nav-icon ${active === '#pf' ? 'active' : ''}`}><FaPeopleArrows/></span>
                    <span className={`nav-text testi ${active === '#pf' ? 'active1' : ''}`}>Testimonials</span>
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} offset={-150} duration={500} onClick={()=>setActive("#cont")}>
                    <span className={`nav-icon ${active === '#cont' ? 'active' : ''}`}><IoCallOutline/></span>
                    <span className={`nav-text ${active === '#cont' ? 'active1' : ''}`}>Contact</span>
                </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}
