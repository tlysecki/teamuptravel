import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import './TUT.css';



class SampleUser extends Component {
   render() {

      return (
         <div className="sample-user">
            <MuiThemeProvider>
               <div className="row">
               <Card className="col s10 offset-s1">
                  <CardMedia overlay={<CardTitle title="User Name" />}>
                     <img src="./images/another-user-photo.jpg" alt="Sample User" />
                  </CardMedia>

                  <CardText>
                        <List>
                           <ListItem primaryText="Current Location: Cityville, Canada" />
                           <ListItem primaryText="Age: 23" />
                           <ListItem primaryText="Perks: I fit inside of carry-on so we save on plane tickets." />
                           <Divider />
                           <Subheader>Wannagos</Subheader>
                              <Wannago />
                        </List>
                  </CardText>
               </Card>
               </div>
            </MuiThemeProvider>
         </div>
      );
   }
}

class Wannago extends React.Component {
      
         constructor(props) {
            super(props);
            this.state = { open: false };
         }
      
         handleTouchTap = (event) => {
            event.preventDefault();
            this.setState({
              open: true,
              anchorEl: event.currentTarget,
            });
          };
        
          handleRequestClose = () => {
            this.setState({
              open: false,
            });
          };
      
         render() {
            return (
               <div>
                  <FlatButton
                     label="Name of Wannago 1"
                     onTouchTap={this.handleTouchTap}
                  />
                  <Popover
                     open={this.state.open}
                     anchorEl={this.state.anchorEl}
                     anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                     targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                     onRequestClose={this.handleRequestClose}
                  >
                     <MenuItem>Where: Tanzania</MenuItem>
                     <MenuItem>Style: adventure/fitness</MenuItem>
                     <MenuItem>Budget: moderate</MenuItem>
                     <MenuItem>When: May 12 - May 26</MenuItem>
                     <MenuItem>Why: I want to climb Killimanjaro!</MenuItem>
                     <FlatButton fullWidth={true} label="Message me!"/>
                  </Popover>
               </div>
            );
         }
      }


export default SampleUser;