import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {

  const linkStyle = {
    textDecoration:"none",
    color:"#22262A",
    fontFamily:"myFont"
  };

  const linkStyle2 = {
    textDecoration:"none",
    color:"#22262A",
 
  }


  return (

      <div className = "nav-content">

        <ul>
          <NavLink to = "/"><li><i class="fa-brands fa-apple"></i></li></NavLink>
          <NavLink to = "/" style = {linkStyle}><li>Home</li></NavLink>
          <NavLink to = "/store" style = {linkStyle}><li>Store</li></NavLink>
          <NavLink to = "/iphone" style = {linkStyle}><li>iPhone</li></NavLink>
          <NavLink to = "/ipad" style = {linkStyle}><li>iPad</li></NavLink>
          <NavLink to = "/login" style = {linkStyle2}><li>SignUp</li></NavLink>
          <NavLink to = "/login2" sytle={linkStyle2}>Login In</NavLink>

        </ul>  

        
      </div> 
 
  )
}
