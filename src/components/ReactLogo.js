import React from 'react'
import {ReactComponent as ReactSvg} from './reactlogo.svg';
import './reactLogo.css'


function ReactLogo() {
  return (
    <div className="react-wrapper">
      <ReactSvg className="react-logo"/>
    </div>
  )
}

export default ReactLogo