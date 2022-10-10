import React, { useState } from 'react'
import Heading from './Heading'
import { FaUserGraduate, FaHistory, FaBookReader, FaGraduationCap, FaUniversity, FaSchool, FaNetworkWired } from "react-icons/fa";
import { GiSkills, GiOfficeChair } from "react-icons/gi";
import { AiOutlineFundProjectionScreen, AiOutlineFileUnknown } from "react-icons/ai";
import { MdOutlineAttractions } from "react-icons/md";
import { CgMore } from "react-icons/cg";
import { MdTravelExplore, MdOutlineSportsCricket, MdWorkOutline } from "react-icons/md";
import { IoIosCodeWorking } from "react-icons/io";

export default function Resume() {
  const proj = [
    {
        name: "ECommerce Website",
        description: "Fully responsive ECommerce Project using React" 
    },
    {
        name: "ECommerce Website",
        description: "Fully responsive ECommerce Project using React" 
    },
    {
        name: "ECommerce Website",
        description: "Fully responsive ECommerce Project using React" 
    },
    {
        name: "ECommerce Website",
        description: "Fully responsive ECommerce Project using React" 
    },
    {
        name: "ECommerce Website",
        description: "Fully responsive ECommerce Project using React" 
    },
    {
        name: "ECommerce Website",
        description: "Fully responsive ECommerce Project using React" 
    }
]
  const [vis, setVis] = useState("#")
  return (
    <div>
      <Heading main="Resume" sub="My Formal Bio Details" />
      <div id="resume" className="row resume-div">
        <div className="col-md-5 col-12 p-0 mb-4 mb-md-0 res-col">
          <div className="resume-left">
            <div className="resume-icon-div">
              <span className="resume-icon"><a href="#education" onClick={() => { setVis("#") }}><FaUserGraduate /><span className={`resume-topic ${vis === '#' ? 'visible1' : ''}`} >Education</span></a></span>
              <span className="resume-icon"><a href="#work" onClick={() => { setVis("work") }}><FaHistory /><span className={`resume-topic ${vis === 'work' ? 'visible1' : ''}`} >Work History</span></a></span>
              <span className="resume-icon"><a href="#skill" onClick={() => { setVis("skill") }}><GiSkills /><span className={`resume-topic ${vis === 'skill' ? 'visible1' : ''}`} >Skills</span></a></span>
              <span className="resume-icon"><a href="#project" onClick={() => { setVis("proj") }}><AiOutlineFundProjectionScreen /><span className={`resume-topic ${vis === 'proj' ? 'visible1' : ''}`}>Projects</span></a></span>
              <span className="resume-icon"><a href="#interest" onClick={() => { setVis("int") }}><MdOutlineAttractions /><span className={`resume-topic ${vis === 'int' ? 'visible1' : ''}`} >Interests</span></a></span>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-12 p-0 mt-2 mt-md-0 res-col">
          <div className="resume-right">
            <div id='education' className="education">
              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <FaGraduationCap/> &nbsp; Bachelor of Engineering, Pune
                  </p>
                  <span className="year">2011-15</span>
                </div>
                <p className="resume-sub-points">First Class Mechanical Engineer from Sinhgad College of Engineering, Pune University</p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <FaUniversity /> &nbsp; Higher Secondary Certificate, Jammu
                  </p>
                  <span className="year">2010-11</span>
                </div>
                <p className="resume-sub-points">Scored 94% from Border Security Force Sr. Sec. School (CBSE) </p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <FaSchool /> &nbsp; Secondary School Certificate, Gwalior
                  </p>
                  <span className="year">2008-09</span>
                </div>
                <p className="resume-sub-points">Scored 94% from Border Security Force Sr. Sec. School (CBSE) </p>
              </div>
            </div>
            <div id='work' className="work">
              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <GiOfficeChair /> &nbsp; A2N Academy Pvt. Ltd
                  </p>
                  <span className="year">Apr'22-Oct'22</span>
                </div>
                <p className="resume-sub-points">Internship in React Js <a href="#" className='know-more'> know More...</a> </p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <MdWorkOutline /> &nbsp; ABC Company Pvt. Ltd
                  </p>
                  <span className="year">Oct'20-Apr'22</span>
                </div>
                <p className="resume-sub-points">Junior Developer <a href="#" className='know-more'> know More...</a> </p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <IoIosCodeWorking /> &nbsp; Freelance Work
                  </p>
                  <span className="year">Oct'20-Oct'22</span>
                </div>
                <p className="resume-sub-points">Web Development Projects <a href="#" className='know-more'> know More...</a> </p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <FaNetworkWired/> &nbsp; eBIZ.com Pvt. Ltd.
                  </p>
                  <span className="year">2015-2019</span>
                </div>
                <p className="resume-sub-points">Sales and Marketing Leader <a href="#" className='know-more'> know More...</a> </p>
              </div>
            </div>
            <div id='skill' className="skill">
              <div class="tech">
                            <h3 class="">Hard Skills</h3>
                            <div class="progress-bar-container">
                              <h2 class=""><span>StartUp Ecosystm</span> <span class="percent">90%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage t1"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Financial Quotient</span> <span class="percent">85%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage t2"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Marketing Skills</span> <span class="percent">95%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage t3"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Web Development</span> <span class="percent">75%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage t4"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Event Management</span> <span class="percent">65%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage t5"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Training & Development</span> <span class="percent">90%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage t6"></span>
                              </div>
                            </div>
              </div>
              <div class="soft">
                            <h3 class="">Soft Skills</h3>
                            <div class="progress-bar-container">
                              <h2 class=""><span>Communication</span> <span class="percent">90%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage s1"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Leadership</span> <span class="percent">85%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage s2"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Problem Solving</span> <span class="percent">80%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage s3"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Public Speaking</span> <span class="percent">90%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage s4"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Team Management</span> <span class="percent">85%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage s5"></span>
                              </div>
                            </div>
                        
                            <div class="progress-bar-container">
                              <h2 class=""><span>Negotiation</span> <span class="percent">75%</span></h2>
                              <div class="progress-bar">
                                <span class="percentage s6"></span>
                              </div>
                            </div>
              </div>
            </div>
            <div id='project' className="project">
            {
                proj.map(({name, description}) =>(
                <div className="project-number">
                    <p className="project-name">{name}</p>
                    <p className="project-description">{description}</p>
                    <span><CgMore/></span>
                    <a href="#" className='know-more'>know more <AiOutlineFileUnknown/></a>
                </div>
              ))
            }
            </div>
            <div id='interest' className="interest">
            <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <MdTravelExplore /> &nbsp; Traveling 
                  </p>
                </div>
                <p className="resume-sub-points">I am a travel freak. I love exploring new places and have craving for the local food.</p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <FaBookReader /> &nbsp; Reading & Watching Historical Content 
                  </p>
                </div>
                <p className="resume-sub-points">I have fascination towards History. I want to know more and more about our past. Watching content related to our Mythology and History is always on the cards.</p>
              </div>

              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="resume-main-points">
                    <MdOutlineSportsCricket /> &nbsp; Cricket
                  </p>
                </div>
                <p className="resume-sub-points">Cricket is something i can always play and talk about. I used to play on grounds during my childhood. But, now whenever i get time, I play on turf and enjoy batting and bowling both.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
