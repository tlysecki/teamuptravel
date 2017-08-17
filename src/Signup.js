import React, { Component } from 'react';
// import DatePicker from 'material-ui/DatePicker';
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
                     Username:<input type="text" required />
                     First Name:<input type="text" required />
                     Last Name:<input type="text" required />
                     Age:<input type="text" required />
                     Current Location:<input type="text" placeholder="City, Country" required />
                     Perks:<input type="text" placeholder="What makes you a great team member? What makes you you?" required />
                     Email:<input type="email" required />
                     Password:<input type="password" required />
                     <button type="submit">Submit</button>
                  </form>
               </div>

            </div>


         </div>
      );
   }
}

export default Signup;