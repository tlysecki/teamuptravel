import React, { Component } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import {red500} from 'material-ui/styles/colors';
import './TUT.css';

const iconStyles = {
   left: 214,
   top: 295
};

class WorldMap extends Component {

   render() {

      return (
         <div width={800}>
            <MuiThemeProvider>
               <Link to="/home/team">
                  <IconButton tooltip="Peru Sep 21-23" 
                              iconClassName="material-icons"
                              color={red500}
                              style={iconStyles} >place</IconButton>
               </Link>
            </MuiThemeProvider>
            <img width={800} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Winkel_triple_projection_SW.jpg" alt="World Map" />
         </div>
      );
   }
}


export default WorldMap;
