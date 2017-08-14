import React, { Component } from 'react';
import './TUT.css';

class Signup extends Component {
   render() {
      return (
         <div className="Signup">
            <div className="container">
               <p>
                  Sign Up
               </p>
               <div className="row">
                  <form className="col s10 offset-s1">
                     <input type="text" placeholder="Username" required />
                     <input type="text" placeholder="First Name" required />
                     <input type="text" placeholder="Last Name" required />
                     <input type="email" placeholder="Email Address" required />
                     <input type="password" placeholder="Password" required />
                     <input type="password" placeholder="Confirm Password" required />
                     <button type="submit">Submit</button>
                  </form>
               </div>

            </div>


         </div>
      );
   }
}

export default Signup;