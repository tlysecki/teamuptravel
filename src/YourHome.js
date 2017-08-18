import React, { Component } from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import './TUT.css';



class YourHome extends Component {
   constructor() {
      super();
      this.state = {
         addWannago: false,
      }
      this.openAddWannago = this.openAddWannago.bind(this)
   }

   openAddWannago() {
      this.setState({
         addWannago: !this.state.addWannago
      })
   }



   render() {

      const style = {
         marginRight: 0
      };

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
                           Welcome, Sample User
                        </ListItem>
                     </List>

                     <CardText>
                        <List>
                           <ListItem primaryText="You don't have any trips planned - get inspired! Check out some wannagos on the map." />
                           <Link to="/map">
                              <IconButton tooltip="to the map">
                                 <FontIcon className="muidocs-icon-public"/>
                              </IconButton>
                           </Link>
                           <Divider />
                           <Subheader>
                              Your Team
                           </Subheader>
                           <Link  to="/home/team">
                              <ListItem primaryText="Peru 2017"/>
                           </Link>
                           <Divider />
                           <Subheader>
                              Your Wannagos
                              <FloatingActionButton zDepth={0} onClick={this.openAddWannago} className="right" mini={true} style={style}>
                                 <ContentAdd />
                              </FloatingActionButton>
                           </Subheader>
                           <ListItem key={1} primaryText="Somewhere Else" />
                        </List>
                     </CardText>
                     <NewWannago addWannago={this.state.addWannago} style={this.state.style} budget={this.state.budget}/>
                  </Card>
               </div>
            </MuiThemeProvider>
         </div>
      );
   }
}

class NewWannago extends Component {
   constructor(){
      super()
      this.state = {
         location: '',
         style: '',
         budget: '',
         date_start: '',
         date_end: '',
         why: ''
      }
      this.change = this.change.bind(this)
      this.dateStart = this.dateStart.bind(this)
      this.dateEnd = this.dateEnd.bind(this)
      this.budgetChange = this.budgetChange.bind(this)
      this.styleChange = this.styleChange.bind(this)

   }
   
   change=e=> {
      console.log(e.target.value)
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   dateStart=(nothing,date)=> {
      console.log(date)
      this.setState({
         date_start: date               
      })
   }

   dateEnd=(nothing,date)=> {
      console.log(date)
      this.setState({
         date_end: date               
      })
   }

   styleChange=(e,i,value)=> {
      console.log(value)
      this.setState({
         style: value
      })
   }

   budgetChange=(e,i,value)=> {
      console.log(value)
      this.setState({
         budget: value
      })
   }

   newWannago=f=> {
      f.preventDefault();
      console.log(this.state);
      // axios.post('http://localhost:8080/signup', this.state)
   }

   render() {

      const style = {
         marginLeft: 20,
      }

      return (
         <MuiThemeProvider>
            <div style={{display: this.props.addWannago ? "block" : "none"}}>
               <Paper zDepth={1}>
                  <TextField name="location" hintText="Where" underlineShow={false} style={style} onChange={this.change} />
                  <Divider />
                  <DropDownMenu name="style" value={"style"} onChange={this.styleChange}>
                     <MenuItem value={"style"} primaryText="Travel Style" disabled={true} />
                     <MenuItem value={"adventure"} primaryText="Adventure/Fitness" />
                     <MenuItem value={"backpacking"} primaryText="Backpacking" />
                     <MenuItem value={"education"} primaryText="Culture/Education" />
                     <MenuItem value={"leisure"} primaryText="Leisure" />
                     <MenuItem value={"party"} primaryText="Party Travel" />
                  </DropDownMenu>  
                  <DropDownMenu name="budget" value={"budget"} onChange={this.budgetChange}>
                     <MenuItem value={"budget"} primaryText="Travel Budget" disabled={true} />
                     <MenuItem value={"low"} primaryText="Shoestring" />
                     <MenuItem value={"med"} primaryText="Midrange" />
                     <MenuItem value={"high"} primaryText="Luxury" />
                  </DropDownMenu> 
                  <DatePicker name="date_start" hintText="Start Date" underlineShow={false} style={style} container="inline" mode="landscape" onChange={this.dateStart} />
                  <DatePicker name="date_end" hintText="End Date" underlineShow={false} style={style} container="inline" mode="landscape" onChange={this.dateEnd} />
                  <TextField name="why" hintText="Why" underlineShow={false} style={style} onChange={this.change} />
                  <RaisedButton label="Submit" fullWidth={true} onClick={this.newWannago}/>
               </Paper>
            </div>
         </MuiThemeProvider>
      )
   }
}

export default YourHome;