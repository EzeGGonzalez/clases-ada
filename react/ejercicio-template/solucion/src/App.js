import React, { Component } from 'react';

import Footer from './Footer';
import Sidebar from './Sidebar';
import WorkExperience from './WorkExperience'
import Education from './Education'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="w3-content w3-margin-top" style={ { maxWidth: '1400px' } }>
          <div className="w3-row-padding">
            <Sidebar />
            <div className="w3-twothird">
              <WorkExperience />
              <Education />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
