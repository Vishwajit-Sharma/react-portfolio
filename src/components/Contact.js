import React, {useState} from 'react'
import Heading from './Heading'
import handShake from '../assets/hand-shake.png'
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import TextField from '@mui/material/TextField';
import mail from '../assets/mailz.jpeg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const [value, setValue] = useState("")
  const submitHandle = ()=>{
    toast.success("Your Form is Submitted")
  }
  return (
    <div className='pt-4'>
      <Heading main="Contact Me" sub="Let's Keep In Touch" />
      <div id="contact" className="row contact-div">
        <div className="col-md-4 col-12">
          <div className="con-left d-flef flex-column">
            <div className="con-img text-center"><img src={handShake} alt="" /></div>
            <div className="con-text">
              <h3>Vishwajit Sharma</h3>
              <p className="">I am available for freelance work. Connect with me via call or email, or else submit the form.</p>
              <p className="">+91-8087287984</p>
              <p className="">vishwajit123sharma@gmail.com</p>
              <div className="con-social"><a href="#"><BsFacebook/></a><a href="#"><BsGithub/></a><a href="#"><BsLinkedin/></a></div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-12">
          <div className="con-right">
            <div className="mail-img"><img src={mail} alt="" /></div>
            <form action="https://public.herotofu.com/v1/fa243bc0-48c1-11ed-8970-6943e4ac8982" method="POST" onSubmit={submitHandle}>
              <div className="input-div">
              <TextField id="fullWidth" label="Name" variant="outlined" color="warning" margin="dense"  name="name" className='input' onChange={(e)=>setValue(e.target.value)}/>
              <TextField id="fullWidth" label="Mobile" variant="outlined" color="warning" margin="dense"   name="mobile" className='input' onChange={(e)=>setValue(e.target.value)}/></div>
              <TextField id="fullWidth" label="Email" variant="outlined" color="warning" margin="dense" fullWidth  name="email" onChange={(e)=>setValue(e.target.value)}/>
              <TextField id="outlined-textarea" label="Message" rows="4" color="warning" margin="dense" multiline fullWidth  name="msg" onChange={(e)=>setValue(e.target.value)}/>
              <span><button type="submit" className='btn-send'>Send Message <IoIosSend/></button></span>
              <ToastContainer position="top-center" theme="colored"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
