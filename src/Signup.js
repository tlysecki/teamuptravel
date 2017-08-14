import React, { Component } from 'react';
import './TUT.css';

class Signup extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Teamup Travel</h1>
          <h3>Find Friends and Get Lost</h3>
        </header>
        <p className="App-intro">
          Sign Up
        </p>
        <form>
         <input type="text" placeholder="Username" required/>
         <input type="text" placeholder="First Name" required/>
         <input type="text" placeholder="Last Name" required/>
         <input type="email" placeholder="Email Address" required/>
         <input type="password" placeholder="Password" required/>
         <input type="password" placeholder="Confirm Password" required/>
         <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default Signup;