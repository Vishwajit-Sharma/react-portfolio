import React from 'react'
import { CgLoadbarAlt } from "react-icons/cg";

export default function Heading(props) {
  return (
    <div>
      <div className="heading-div">
        <p className='heading-main'>{props.main}</p>
        <p className="heading-sub">{props.sub}</p>
        <p className='heading-design'>
            <hr className='head-line' />
            <span className='head-icon'><CgLoadbarAlt/></span>
            <hr className='head-line' />
        </p>
      </div>
    </div>
  )
}
