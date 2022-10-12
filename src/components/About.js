import React from 'react'
import Heading from './Heading'
import about from '../assets/about.jpe'
import { AiFillCheckCircle } from "react-icons/ai";
import { Link} from 'react-scroll'

export default function About() {
  return (
    <div>
      <Heading main = "About Me" sub = "Why Choose Me"/>
      <div id="about" className="row about-div">
        <div className="col-md-5 col-12 p-0 d-md-flex align-items-md-center">
            <div className="about-left">
                <img src={about} alt="" />
            </div>
        </div>
        <div className="col-md-7 col-12 p-0">
            <div className="about-right">
                <p className="about-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit labore natus voluptates eius corporis commodi, modi id! Ad ducimus neque, officia sed, minus architecto dolores laborum deserunt accusantium, maiores commodi.
                    Consequatur sit ma! Nemo at, numquam officia corrupti esse temporibus hic alias, doloribus possimus delectus quae laboriosam excepturi cupiditate dignissimos dolor aliquid est quisquam asperiores?
                    Harum quidem, repudiandae sit ullam fugit tempora voluptates quia fuga cumque omnis nostrum libero sed consequatur, velit doloremque repellat eum eos ipsam porro temporibus explicabo? Fugiat molestias odio dicta aspernatur!
                </p>
                <h4 className='pt-3'>Here are few highlights: </h4>
                <p className="about-points mb-md-2 mb-1"><span><AiFillCheckCircle/> </span>Interactive Front End as per the design</p>
                <p className="about-points mb-md-2 mb-1"><span><AiFillCheckCircle/> </span>Interactive Front End as per the design</p>
                <p className="about-points mb-md-2 mb-1"><span><AiFillCheckCircle/> </span>Interactive Front End as per the design</p>
                <p className="about-points mb-md-2 mb-1"><span><AiFillCheckCircle/> </span>Interactive Front End as per the design</p>
                <p className="about-points mb-md-2 mb-1"><span><AiFillCheckCircle/> </span>Interactive Front End as per the design</p>
                <p className='d-flex mt-lg-4 mt-md-3 mt-3 justify-content-md-between justify-content-evenly'><Link to="contact"><button className="btn1">Contact Me</button></Link> <a href="#"><button className="btn3">Get Resume</button></a></p>
            </div>
        </div>
      </div>
    </div>
  )
}
