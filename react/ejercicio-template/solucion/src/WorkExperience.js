import React, { Component } from 'react';

class WorkExperience extends Component {
  render () {
    return (
      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
          <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
          <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br/>
        </div>
      </div>
    )
  }
}

export default WorkExperience;