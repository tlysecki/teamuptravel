import React, { Component } from 'react';
import './TUT.css';

class Login extends Component {
   render() {
      return (
         <div className="Login">

            <div className="container">
               <p>Here's the login page</p>
               <div className="row">
                  <div className="col s8 offset-s2">
                     <form>
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button className="mdc-button mdc-button--raised mdc-button--primary" type="submit">Submit</button>
                     </form>

                  </div>
               </div>

            </div>


         </div>
      );
   }
}

export default Login;