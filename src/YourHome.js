import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import './TUT.css';



class YourHome extends Component {
   render() {

      return (
         <div className="sample-user">
            <MuiThemeProvider>
               <div className="row">
                  <Card className="col s10 offset-s1">
                     <List>
                        <ListItem
                           disabled={true}
                           leftAvatar={
                              <Avatar src="./images/homeuser.jpg" />
                           }
                        >
                           Welcome, Home User
                        </ListItem>
                     </List>

                     <CardText>
                        <List>
                           <ListItem primaryText="You don't have any trips planned - get inspired! Check out some wannagos on the map." />
                           <Divider />
                           <Subheader>Your Wannagos</Subheader>
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

export default YourHome;