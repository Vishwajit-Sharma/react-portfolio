import React from 'react'
import imageBg from '../assets/shape-bg.png'
import Typical from 'react-typical'
// import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

export default function Top() {
  return (
    <div>
      <div id='home' className="top-container">
        <div className="row">
            <div className="col-md-6 col-12">
                <div className="top-left">
                    <p className="hello">Hi, I'm <span>Vishwajit Sharma</span></p>
                    <p className="typical"><Typical steps={['Web Developer ✔', 1000, 'React Developer ✔', 1000, 'Professional Coder ✔', 1000]} loop={Infinity}/></p>
                    <p className="tagline">Knack of building applications with beautiful UI designs</p>
                    <p className='d-flex my-lg-5 my-md-4 my-4 justify-content-around'><a href="#contact"><button className="btn1">Contact Me</button></a> <a href="#"><button className="btn2">Get Resume</button></a></p>
                </div>
            </div>
            <div className="col-md-6 col-12">
                <div className="top-right">
                    <div className="profile-container">
                        <div className="profile-pic"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-design"><img src={imageBg} alt="" /></div>
      </div>
    </div>
  )
}
