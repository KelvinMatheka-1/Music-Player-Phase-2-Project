import React from 'react'
import {  FaHome, FaHeart, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="side">
      <Link to= '/liblary' >Developer <FaGithub /></Link>
      <Link to= '/home'>Home <FaHome/></Link>
      <Link to= '/like'>About my page <FaHeart/></Link>
     </div>
  )
}

export default SideBar