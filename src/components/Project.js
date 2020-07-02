import React from 'react'
import './Project.css'

class Project extends React.Component {
  
  state = {
    isActive: false
  }

  activate = () => { this.setState({ isActive: true })}

  deActivate = () => { this.setState({ isActive: false })}

  render() {

    let style = {
      backgroundImage: `url(${this.props.imgURL})`
    }
    
    return (
      <a href={this.props.link} target="blank">
        <div 
          className="project-square" 
          style={style} 
          onMouseEnter={this.activate} 
          onMouseLeave={this.deActivate}>
          
          <div className="project-overlay">
            <h6>{this.props.title}</h6>
 
              <div className="body-animation">
                <p>{this.props.description}</p>
                <p className="project-overlay--keyword">Keywords:</p>
                <p>{this.props.keyword}</p>  
              </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Project