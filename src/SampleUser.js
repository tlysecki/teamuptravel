import React, { Component } from 'react';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import axios from 'axios';
import './TUT.css';

class SampleUser extends Component {
   constructor() {
      super();
      this.state = {
         user: {},
         wannagos: []
      }
   }

   componentWillMount() {
      const getUser = axios.get('http://localhost:8080/user/' + this.props.params.username)
      console.log(this.props.params)
      getUser.then((userObj) => {
         console.log(userObj);
         const found = userObj.data.found.filter(e => e !== null);
         this.setState({
            user: userObj.data.user,
            wannagos: found
         })
      })
         .catch(err => { console.log(err) })
   }

   render() {

      const user = this.state.user;

      return (

            <MuiThemeProvider>
               <div style={{marginTop:"5vh"}} className="row">
                  <Card className="col s10 offset-s1">
                     <CardMedia style={{paddingTop: 10 }} overlay={<CardTitle title={this.state.user.username} />}>
                        <img src={user.user_img} alt="Sample User" />
                     </CardMedia>

                     <CardText>
                        <List>
                           <ListItem style={{fontSize:"1.6em"}}>{user.first_name} {user.last_name} </ListItem >
                           <ListItem>Current Location: {user.location} </ListItem >
                           <ListItem>Age: {user.age} </ListItem >
                           <ListItem>Perks: {user.perks} </ListItem >
                           <Divider />
                           <Subheader>Wannagos</Subheader>
                           <Wannago wannagos={this.state.wannagos} />
                        </List>
                     </CardText>
                  </Card>
               </div>
            </MuiThemeProvider>

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

   handleOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

   render() {

      const wannagos = this.props.wannagos;

      let wannagosJSX;
      if (wannagos.length > 0) {
         wannagosJSX = wannagos.filter(e => e !== null).map((wannago, i)=> {
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
                  <FlatButton fullWidth={true}>Message me!</FlatButton>
               </Dialog>
            </FlatButton>)
         })

      } else {
         wannagosJSX = <p>This user has no wannagos!</p>
      }

      return (
         <div>
            {wannagosJSX}

         {/*}
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
               <FlatButton fullWidth={true} label="Message me!" />
      </Popover>  */}
         </div>
      );
   }
}


export default SampleUser;