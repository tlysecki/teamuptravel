import React, { Component } from 'react';
import {Link} from 'react-router';
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
            <button className="col s2 offset-s1 signup btn waves-effect waves-light orange-darken4"> 
              <Link className="signup-text" to="/signup">Sign Up Now</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
