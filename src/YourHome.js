import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { amber700 } from 'material-ui/styles/colors';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
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
import axios from 'axios';
import './TUT.css';



class YourHome extends Component {
   constructor() {
      super();
      this.state = {
         addWannago: false,
         wannagos: [{ location: '' }],
         user: {},
         open: false,
         openSnack: false,
      }
      this.openAddWannago = this.openAddWannago.bind(this)
   }

   componentWillMount() {
      const getUser = axios.get('http://localhost:8080/home/' + this.props.username)
      getUser.then((userObj) => {
         const found = userObj.data.found.filter(e => e !== null);
         this.setState({
            user: userObj.data.user,
            wannagos: found
         })
      })
         .catch(err => { console.log(err) })
   }

   openAddWannago() {
      this.setState({
         addWannago: !this.state.addWannago
      });
   }

   handleOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };

   render() {
      let wannagosJSX;
      if (this.state.wannagos.length > 0) {
         wannagosJSX = this.state.wannagos.filter(e => e !== null).map((wannago, i) => {
            let dateStart = moment(wannago.date_start).format('LL')
            let dateEnd = moment(wannago.date_end).format('LL')
            return (<FlatButton key={i} onClick={this.handleOpen}>
               {wannago.location}
               <Dialog title={wannago.location}
                  modal={false}
                  contentStyle={{ maxWidth: '70%' }}
                  open={this.state.open}
                  onRequestClose={this.handleClose}>
                  {dateStart} to {dateEnd}
                  <Divider />
                  why: {wannago.why}
                  <Divider />
                  budget: {wannago.budget}
                  <Divider />
                  style: {wannago.style}

               </Dialog>
            </FlatButton>)
         })

      }

      return (
         <MuiThemeProvider>
            <div style={{ marginTop: "5vh" }} className="row">
               <Card className="col s10 offset-s1 m8 offset-m2">
                  <List>
                     <ListItem
                        disabled={true}
                        style={{ fontSize: "2em" }}
                        leftAvatar={
                           <Avatar src={this.state.user.user_img} />
                        }
                     >
                        Welcome, {this.state.user.username}
                        <Link to="/worldmap">
                           <IconButton tooltip="World Map" iconClassName="material-icons">
                              public
                        </IconButton>
                        </Link>
                     </ListItem>
                  </List>

                  <CardText>
                     <List>
                        <Divider />
                        <Subheader>
                           Your Team
                           </Subheader>
                        <Link to="/peru2017">
                           <ListItem primaryText="Peru 2017" />
                        </Link>
                        <Divider />
                        <ListItem disabled={true} primaryText="Your Wannagos">
                           <FloatingActionButton backgroundColor={amber700} style={{ marginTop: -10 }} onClick={this.openAddWannago} className="right" mini={true} >
                              <ContentAdd />
                           </FloatingActionButton>
                        </ListItem>
                        {wannagosJSX}
                        <ListItem primaryText="Add a new wannago! --->" style={{ display: (this.state.wannagos.length < 1) ? 'inline-block' : 'none' }} />
                     </List>
                  </CardText>
                  <NewWannago username={this.props.username} addWannago={this.state.addWannago} openAddWannago={this.openAddWannago} style={this.state.style} budget={this.state.budget} />
               </Card>
               <Snackbar
                  open={this.state.openSnack}
                  message="Wannago Saved!"
                  autoHideDuration={3000}
               />
            </div>
         </MuiThemeProvider>
      );
   }
}

class NewWannago extends Component {
   constructor() {
      super()
      this.state = {
         location: '',
         style: 'style',
         budget: 'budget',
         date_start: '',
         date_end: '',
         why: '',
      }
      this.change = this.change.bind(this)
      this.dateStart = this.dateStart.bind(this)
      this.dateEnd = this.dateEnd.bind(this)
      this.budgetChange = this.budgetChange.bind(this)
      this.styleChange = this.styleChange.bind(this)

   }

   change = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   dateStart = (nothing, date) => {
      this.setState({
         date_start: date
      })
   }

   dateEnd = (nothing, date) => {
      this.setState({
         date_end: date
      })
   }

   styleChange = (e, i, value) => {
      this.setState({
         style: value
      })
   }

   budgetChange = (e, i, value) => {
      this.setState({
         budget: value
      })
   }

   newWannago = () => {
      axios.post('http://localhost:8080/newwannago', { state: this.state, username: this.props.username });
      this.props.openAddWannago();
   }

   render() {

      const style = {
         marginLeft: 20,
      }

      return (
         <MuiThemeProvider>
            <div style={{ display: this.props.addWannago ? "block" : "none" }}>
               <Paper zDepth={1}>
                  <TextField name="location" hintText="Where" underlineShow={false} style={style} onChange={this.change} />
                  <Divider />
                  <DropDownMenu name="style" value={this.state.style} onChange={this.styleChange}>
                     <MenuItem value={"style"} primaryText="Travel Style" disabled={true} />
                     <MenuItem value={"adventure"} primaryText="Adventure/Fitness" />
                     <MenuItem value={"backpacking"} primaryText="Backpacking" />
                     <MenuItem value={"education"} primaryText="Culture/Education" />
                     <MenuItem value={"leisure"} primaryText="Leisure" />
                     <MenuItem value={"party"} primaryText="Party Travel" />
                  </DropDownMenu>
                  <DropDownMenu name="budget" value={this.state.budget} onChange={this.budgetChange}>
                     <MenuItem value={"budget"} primaryText="Travel Budget" disabled={true} />
                     <MenuItem value={"low"} primaryText="Shoestring" />
                     <MenuItem value={"med"} primaryText="Midrange" />
                     <MenuItem value={"high"} primaryText="Luxury" />
                  </DropDownMenu>
                  <DatePicker name="date_start" hintText="Start Date" underlineShow={false} style={style} container="inline" mode="landscape" onChange={this.dateStart} />
                  <DatePicker name="date_end" hintText="End Date" underlineShow={false} style={style} container="inline" mode="landscape" onChange={this.dateEnd} />
                  <TextField name="why" hintText="Why" underlineShow={false} style={style} onChange={this.change} />
                  <RaisedButton label="Submit" fullWidth={true} onClick={this.newWannago} />
               </Paper>
            </div>
         </MuiThemeProvider>
      )
   }
}

export default YourHome;