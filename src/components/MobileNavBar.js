import React, { useState } from 'react'
import './MobileNavBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as MyLogo} from './KGF_logo.svg';


function MobileNavBar() {
  return (
    <NavBarWrapper>
      <a href="#home" className="logo-container"><MyLogo className="my-logo-mobile" /></a>
      <NavItem>
        <MobileDropdown />
      </NavItem>
    </NavBarWrapper>
  )
}



function NavBarWrapper(props) {
  return (
    <nav className="mobile-nav-bar">     
      <ul className="mobile-nav-bar-nav">{ props.children }</ul>
    </nav>
  )
}



const NavItem = (props) => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)
  return (
    <li className="mobile-nav-item">
      <button 
        className="mobile-nav-icon-button" 
        onClick={toggleMenu}
      >
        { open 
        ? <FontAwesomeIcon icon={faTimes} size="2x" />
        : <FontAwesomeIcon icon={faBars} size="2x" /> 
        }  
      </button>
      {open && props.children}
    </li>
  )
}


function MobileDropdown(props) {
  return (
    <div className="mobile-nav-bar-dropdown">
      <a href="#projects" className="links mobile-menu-item" onClick={props.toggleMenu}>projects</a>      
      <a href="#about" className="links mobile-menu-item">about</a>
      <a href="#contact" className="links mobile-menu-item"><span className="button-text">contact</span></a>
    </div>
  )
}




export default MobileNavBar
