import React, { Component } from 'react';
import './TUT.css';

class SampleUser extends Component {
   render() {
      return (
         <div className="row">
         <div className="col s8 offset-s3">
            <div className="card horizontal user-card">
               <div className="card-stacked">
                  <span className="card-title black-text">Sample User</span>
                  <span className="card-content">Current Location: Here</span>
                  <span className="card-content">Age: 23</span>
                  <span className="card-content">Perks: I speak 5 languages and I can start a fire with will power alone.</span>
                  <div className="card-action">
                     <span className="card-content">Wannagos:</span>
                     <ul>
                        <li>Tanzania</li>
                        <li>Bolivia</li>
                     </ul>
                  </div>
               </div>
               <div className="card-image">
                  <img src="images/user-photo.jpg" alt="Sample User Photo" />
               </div>
            </div>
         </div>

         </div >
      );
   }
}

export default SampleUser;