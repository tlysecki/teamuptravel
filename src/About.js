import React, { Component } from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './TUT.css';

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="row">
          <div className="col s5 offset-s1">
            <div className="about-card card blue-grey lighten-3">
              <div className="card-content black-text">
                <span className="card-title">About Team Up Travel</span>
                <p>Here's all the About stuff. Blah blah blah</p>
              </div>
            </div>
          </div>
          <div>
             <MuiThemeProvider>
              <Link className="button-text" to="/signup">
                <RaisedButton primary={true} label="Sign Up Now" />
              </Link>
              </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
