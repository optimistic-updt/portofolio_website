import React from 'react'
import './SectionAbout.css'


class AboutCategories extends React.Component {

  render() {
    let { activeKey, categories }  = this.props

    let listItems = categories.map( (category, idx ) => (
      <li 
        key={idx}
        onClick={this.props.handleClick} 
        className={activeKey === idx ? "active" : ""}
      >{ category }</li>
    ))

    return (
      <ul className="sub-categories">
        { listItems }
      </ul>
    )
  }
}

export default AboutCategories