import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
   Table,
   TableBody,
   TableHeaderColumn,
   TableRow,
   TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import './TUT.css';


class YourTeam extends Component {
   constructor() {
      super();
      this.state = {
         expanded: false,
         team: {},
         convos: []
      }
      this.messageExpand = this.messageExpand.bind(this);
   }

   componentWillMount() {
      const getTeam = axios.get('http://localhost:8080' + this.props.location.pathname);
      getTeam.then((teamObj) => {
         const convo = teamObj.data.convo.filter(e => e !== null);
         this.setState({
            team: teamObj.data.team,
            convos: convo
         })
      })
         .catch(err => { console.log(err) })
   }

   messageExpand = () => {
      this.setState({ expanded: !this.state.expanded });
   };

   render() {
      return (
         <div style={{ paddingTop: "5vh" }}>
            <div className="row" >
               <MuiThemeProvider>
                  <Card className="col s10 offset-s1 m8 offset-m2" expanded={this.state.expanded}>
                     <CardHeader
                        title={this.state.team.team_name}
                        subtitle="You, Jane User, Joe User"
                        actAsExpander={false}
                     />
                     <CardText>
                        Sept 21: Arrive at hotel
                        <Divider />
                        Sept 22: Salt flats, Dinner with locals
                        <Divider />
                        Sept 23: Flight out!
                     </CardText>
                     <CardActions>
                        <FlatButton label="Messages" onTouchTap={this.messageExpand} />
                        <FlatButton className="right" label="Add to Itinerary" disabled={true} />
                     </CardActions>
                     <CardText expandable={true}>
                        <Table height="200px" >
                           <TableBody displayRowCheckbox={false} stripedRows={true}>
                              <TableRow>
                                 <TableHeaderColumn>Teammate</TableHeaderColumn>
                                 <TableHeaderColumn>Message</TableHeaderColumn>
                              </TableRow>
                              <TableRow>
                                 <TableRowColumn>Jane User</TableRowColumn>
                                 <TableRowColumn>I'm so excited</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                 <TableRowColumn>Joe User</TableRowColumn>
                                 <TableRowColumn>Me too!</TableRowColumn>
                              </TableRow>
                           </TableBody>
                        </Table>
                        <Divider />
                        <TextField
                           fullWidth={true}
                           hintText="send a message"
                           multiLine={true}
                           rows={1}
                           rowsMax={3}
                        />
                     </CardText>

                  </Card>
               </MuiThemeProvider>
            </div>
         </div>
      );
   }
}

export default YourTeam;
