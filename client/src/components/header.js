import React from 'react'
import { NavLink} from 'react-router-dom'


export default function Header() {
  return (
    <>
      <nav class = "header-div">
          <NavLink to = '/'>HOME</NavLink>
          <NavLink to  = 'store'>STORE</NavLink> 
          <NavLink to = 'iphone'>IPHONE</NavLink>
          <NavLink to = 'ipad'>IPAD</NavLink>
          <NavLink to = 'about'>ABOUT US</NavLink>

      </nav>
    </>


    /* 
    
    <ul> // similar to above code 
        <li href = ''></li>
        <li href = ''></li>
        <li href = ''></li>
    </ul>
    
    
    */
  )
}
