import React, { useState } from 'react'
import Heading from './Heading'
import { FaUserGraduate, FaHistory } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineAttractions } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";

export default function Resume() {
  const [vis, setVis] = useState("#")
  return (
    <div>
      <Heading main="Resume" sub="My Formal Bio Details" />
      <div className="row resume-div">
        <div className="col-md-5 col-12 p-0">
          <div className="resume-left">
            <div className="resume-icon-div">
              <span className="resume-icon"><a href="#education" onClick={() => { setVis("#") }}><FaUserGraduate /><span className={`resume-topic ${vis === '#' ? 'visible' : ''}`} >Education</span></a></span>
              <span className="resume-icon"><a href="#work" onClick={() => { setVis("work") }}><FaHistory /><span className={`resume-topic ${vis === 'work' ? 'visible' : ''}`} >Work History</span></a></span>
              <span className="resume-icon"><a href="#" onClick={() => { setVis("skill") }}><GiSkills /><span className={`resume-topic ${vis === 'skill' ? 'visible' : ''}`} >Skills</span></a></span>
              <span className="resume-icon"><a href="#" onClick={() => { setVis("proj") }}><AiOutlineFundProjectionScreen /><span className={`resume-topic ${vis === 'proj' ? 'visible' : ''}`}>Projects</span></a></span>
              <span className="resume-icon"><a href="#" onClick={() => { setVis("int") }}><MdOutlineAttractions /><span className={`resume-topic ${vis === 'int' ? 'visible' : ''}`} >Interests</span></a></span>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-12 p-0">
          <div className="resume-right">
            <div id='education' className="education">
              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <BsFillCircleFill /> &nbsp; Bachelor of Engineering, Pune
                  </p>
                  <span className="year">2011-2015</span>
                </div>
                <p className="resume-sub-points">First Class Mechanical Engineer from Sinhgad College of Engineering, Pune University</p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <BsFillCircleFill /> &nbsp; Higher Secondary Certificate, Jammu
                  </p>
                  <span className="year">2010-2011</span>
                </div>
                <p className="resume-sub-points">Scored 94% from Border Security Force Sr. Sec. School (CBSE) </p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <BsFillCircleFill /> &nbsp; Secondary School Certificate, Gwalior
                  </p>
                  <span className="year">2008-2009</span>
                </div>
                <p className="resume-sub-points">Scored 94% from Border Security Force Sr. Sec. School (CBSE) </p>
              </div>
            </div>
            <div id='work' className="work bg-success">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
