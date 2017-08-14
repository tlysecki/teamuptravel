import React, { Component } from 'react';
import { Link } from 'react-router';
import './TUT.css';

class Home extends Component {
   render() {
      return (
         <div className="home-page">
            <button className="col s2 offset-s1 signup btn waves-effect waves-light orange-darken4">
               <Link className="signup-text" to="/signup">Sign Up Now</Link>
            </button>
            <button className="col s2 offset-s1 signup btn waves-effect waves-light orange-darken4">
               <Link className="signup-text" to="/about">About Team Up Travel</Link>
            </button>
         </div>
      );
   }
}

export default Home;
