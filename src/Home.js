import React, { Component } from 'react';
import { Link } from 'react-router';
import {blueGrey500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './TUT.css';

class Home extends Component {

   render() {

      return (
            <div className="hero-image">
               <div className="hero-body">
                  <MuiThemeProvider>
                     <div>
                        <Link to="/about">
                           <RaisedButton style={{marginLeft:-15}} label="About Us"></RaisedButton>
                        </Link>

                        <Link to="/signup">
                           <RaisedButton backgroundColor={blueGrey500} style={{marginLeft:15}} label="Sign Up Now"></RaisedButton>
                        </Link>
                     </div>
                  </MuiThemeProvider>
               </div>
            </div>
      );
   }
}


export default Home;
