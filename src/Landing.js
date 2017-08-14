import React, { Component } from 'react';
import { Link } from 'react-router'
import './TUT.css';

class Landing extends Component {
   constructor() {
      super();
      this.state = {
         login: true
      }
   }

   render() {

      return (
         <div className="App">
            <nav className="App-header">
               <Link className="signup-text right-align" to="/login">Login</Link>
               <h1 className="heading center">Teamup Travel</h1>
               <h3 className="tagline center">find friends and get lost</h3>
            </nav>
            <div className="row">
               <div className="col s3 navpanel">
                  <div className="container">
                     <table className="collection">
                        <tr className="collection-item">Your Teams
                        <ul>
                              <li>• Itinerary</li>
                              <li>• Message Board</li>
                              <li>• Make A New Team</li>
                           </ul>
                        </tr>
                        <tr className="collection-item">World Map</tr>
                        <tr className="collection-item">Wannagos</tr>
                        <tr className="collection-item">Home</tr>
                     </table>
                  </div>
               </div>
            </div>

            {this.props.children}

         </div>
      );
   }
}

export default Landing;

/*
 <p className="App-intro">
               Here's the landing page
        </p>
            <Link to="/about">About</Link><br />
            <Link to="/signup">Sign Up</Link> <br />
            <Link to="/login">Login</Link>  */