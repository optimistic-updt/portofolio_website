import React from 'react'
import './SectionAbout.css'


class AboutCategories extends React.Component {
  state = {
    // activeKey: 0,
    categories: [
      "who am i?",
      "what do i believe in?",
      "currently learning",
      "my story"
    ]
  }

  handleClick = (e) => {
    let { categories } = this.state
    //when it's click
    let index = categories.indexOf(e.target.textContent)

    this.setState({
      activeKey: index
    })
  }


  render() {
    let { categories } = this.state
    let activeKey = this.props.activeKey

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