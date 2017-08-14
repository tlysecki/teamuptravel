import React, { Component } from 'react';
import './TUT.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Teamup Travel</h1>
          <h3>Find Friends and Get Lost</h3>
        </header>
        <p className="App-intro">
          Here's the login page
        </p>
        <form>
         <input type="text" placeholder="username"/>
         <input type="password" placeholder="password"/>
         <button className="mdc-button mdc-button--raised mdc-button--primary"type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default Login;