import React, { Component } from 'react'

class Education extends Component {
  render () {
    return (
      <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
          <p>Web Development! All I need to know in one place</p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>London Business School</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
          <p>Master Degree</p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>School of Coding</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>
          <p>Bachelor Degree</p><br/>
        </div>
      </div>
    )
  }
}

export default Education