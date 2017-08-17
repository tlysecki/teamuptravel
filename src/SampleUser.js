import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
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
                              <ListItem key={1} primaryText="Somewhere Else" />
                              <ListItem key={2} primaryText="Another Place" />
                        </List>
                  </CardText>
               </Card>
               </div>
            </MuiThemeProvider>
         </div>
      );
   }
}

export default SampleUser;