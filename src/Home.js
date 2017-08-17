import React, { Component } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './TUT.css';

class Home extends Component {
 
   render() {

      return (
         <div>
            <MuiThemeProvider>
                  <div className="row">

                     <Link to="/about">
                        <RaisedButton label="About Us"></RaisedButton>
                     </Link>

                     <Link to="/signup">
                        <RaisedButton primary={true} label="Sign Up Now"></RaisedButton>
                     </Link>

                  </div>
            </MuiThemeProvider>

         </div>
      );
   }
}


export default Home;
