import React from 'react'
import { CgLoadbarAlt } from "react-icons/cg";

export default function Heading() {
  return (
    <div>
      <div className="heading-div">
        <p className='heading-main'>About Me</p>
        <p className="heading-sub">Why Choose Me</p>
        <p className='heading-design'>
            <hr className='head-line' />
            <span className='head-icon'><CgLoadbarAlt/></span>
            <hr className='head-line' />
        </p>
      </div>
    </div>
  )
}
