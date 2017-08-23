import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { yellow800, blueGrey900 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import './TUT.css';


export default class Landing extends Component {
   constructor() {
      super();
      this.state = {
         open: false,
         openLocker: false,
         username: localStorage.username,
      };
      this.login = this.login.bind(this);
      this.signOut = this.signOut.bind(this);
      this.successfulSignup = this.successfulSignup.bind(this);
   }

   handleOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };

   lockerToggle = () => this.setState({ openLocker: !this.state.openLocker });

   lockerClose = () => this.setState({ openLocker: false });

   signOut = () => {
      this.lockerClose();
      this.setState({
         open: false,
         username: ''
      })
      localStorage.username = '';
      
   }

   successfulSignup(username) {
      this.setState({
         username: username
      }, ()=> {
            localStorage.username = this.state.username            
      });
   }

   login(e) {
      e.preventDefault();

      axios.post('http://localhost:8080/login', { username: this.refs.username.value, password: this.refs.password.value })
         .then(res => {
            this.setState({
               username: this.refs.username.value,
               open: false
            })
            browserHistory.push("/home")
         })
         .catch(err=>{
            console.log(err)
            alert('Do not pass GO; do not collect $200')
         })
      localStorage.username = this.refs.username.value;
   }


   render() {

      const muiTheme = getMuiTheme({
         palette: {

         },
         appBar: {
            height: 100,
            color: yellow800,
         },
      })

      const actions = [
         <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
         />,
         <FlatButton
            label="Submit"
            primary={true}
            disabled={false}
            onClick={this.login}
         />,
      ];

      return (
         <div>
            <MuiThemeProvider muiTheme={muiTheme}>
               <AppBar showMenuIconButton={false} title={<Link to="/home" style={{ paddingLeft:25, fontSize:45, fontFamily:"'Righteous', cursive", color: blueGrey900 }}>Team Up Travel</Link>}
                  iconElementRight={
                     <span>
                        <RaisedButton label="Your Locker"
                           onTouchTap={this.lockerToggle}
                           style={{ display: this.state.username ? '' : 'none' }}
                        />
                        <FlatButton label="login"
                           onTouchTap={this.handleOpen}
                           style={{ display: !this.state.username ? '' : 'none' }} />
                        <Dialog
                           title="Login"
                           actions={actions}
                           modal={true}
                           open={this.state.open}>
                           Username:<input ref="username" type="text" />
                           Password:<input ref="password" type="password" />
                        </Dialog>
                     </span>}
               />
            </MuiThemeProvider>
            <MuiThemeProvider>
               <div>
                  <Drawer
                     docked={false}
                     width={200}
                     open={this.state.openLocker}
                     onRequestChange={(openLocker) => this.setState({ openLocker })}
                  >
                     <Link to="/home"><MenuItem style={{padding:10,fontSize:20}} onTouchTap={this.lockerClose}>Your Home</MenuItem></Link>
                     <Link to="/worldmap"><MenuItem onTouchTap={this.lockerClose}>World Map</MenuItem></Link>
                     <Link to="/home"><MenuItem disabled={true} onTouchTap={this.lockerClose}>Inbox</MenuItem></Link>
                     <Link to="/"><MenuItem onTouchTap={this.signOut}>Sign Out</MenuItem></Link>
                  </Drawer>
               </div>
            </MuiThemeProvider>

            <div>
               {React.cloneElement(this.props.children, { username: this.state.username, successfulSignup: this.successfulSignup })}
            </div>

         </div>

      );
   }
}
