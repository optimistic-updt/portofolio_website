import React, { useState } from 'react'
import onClickOutside from "react-onclickoutside";
import './MobileNavBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const NavItem = (props) => {
  const [open, setOpen] = useState(false)
  NavItem.handleClickOutside = () => setOpen(false)

  return (
    <li className="mobile-nav-item">
      <button 
        className="mobile-nav-icon-button" 
        onClick={() => setOpen(!open)}
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

const clickOutsideConfig = {
  handleClickOutside: () => NavItem.handleClickOutside
}

export default onClickOutside(NavItem, clickOutsideConfig)