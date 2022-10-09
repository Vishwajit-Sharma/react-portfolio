import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";


export default function Nav() {

    const [active, setActive] = useState("#")


  return (
    <div>
      <div className="nav-container">
        <ul>
            <li>
                <a href="#" onClick={()=>setActive("#")}>
                    <span className={`nav-icon ${active === '#' ? 'active' : ''}`}><IoHomeOutline/></span>
                    <span className={`nav-text home ${active === '#' ? 'active1' : ''}`}>Home</span>
                </a>
            </li>
            <li>
                <a href="#about" onClick={()=>setActive("#about")}>
                    <span className={`nav-icon ${active === '#about' ? 'active' : ''}`}><IoPersonAddOutline/></span>
                    <span className={`nav-text about ${active === '#about' ? 'active1' : ''}`}>About Me</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={()=>setActive("#pf")}>
                    <span className={`nav-icon ${active === '#pf' ? 'active' : ''}`}><IoBriefcaseOutline/></span>
                    <span className={`nav-text ${active === '#pf' ? 'active1' : ''}`}>Portfolio</span>
                </a>
            </li>
            <li>
                <a href="#resume" onClick={()=>setActive("#res")}>
                    <span className={`nav-icon ${active === '#res' ? 'active' : ''}`}><IoDocumentAttachOutline/></span>
                    <span className={`nav-text ${active === '#res' ? 'active1' : ''}`}>Resume</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={()=>setActive("#cont")}>
                    <span className={`nav-icon ${active === '#cont' ? 'active' : ''}`}><IoCallOutline/></span>
                    <span className={`nav-text ${active === '#cont' ? 'active1' : ''}`}>Contact</span>
                </a>
            </li>
        </ul>
      </div>
    </div>
  )
}
