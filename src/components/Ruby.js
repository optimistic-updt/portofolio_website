import React from 'react'
import {ReactComponent as RubyLogo} from './ruby.svg';
import './ruby.css'

function Ruby() {
  return (
    <div className="ruby-wrapper">
      <RubyLogo className="ruby-logo" />
    </div>
  )
}

export default Ruby