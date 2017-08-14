import React, { Component } from 'react';
import {Link} from 'react-router'
import './TUT.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Teamup Travel</h1>
          <h3 className='tagline'>find friends and get lost</h3>
        </header>
        <p className="App-intro">
          Here's the landing page
        </p>
        <Link to="/about">About</Link><br/>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default Landing;