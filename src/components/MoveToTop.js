import React from 'react'
import { FaArrowUp } from "react-icons/fa";

export default function MoveToTop(props) {


  return (
    <div>
      <div className={`top d-${props.display}`} onClick={props.moveToTop}><FaArrowUp/></div>
    </div>
  )
}
