import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './TUT.css';


export default class Landing extends Component {
   constructor() {
      super();
      this.state = {
         open: false,
         username: '',
      };
      this.login = this.login.bind(this);
   }

   //conditional on componentDidUpdate that looks to see if there is a username in the state, if not, render login page, if yes, render user home


   handleOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };

   login(e) {
      e.preventDefault();
      // if (this.refs.username.value === "joeuser" && this.refs.password.value === "bestpasswordever") {
      //    console.log('you logged in so good')
         this.setState({
            open: false
         })
         axios.post('http://localhost:8080/login', {username: this.refs.username.value, password: this.refs.password.value})
              .then(res=> {console.log(res); window.location="http://localhost:3000/home"})
              .catch(err=> console.log(err))
       
      // else {
         // alert('you did not log in so good')
      // }
   }


   render() {

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
            <MuiThemeProvider>
               <AppBar showMenuIconButton={!this.state.username ? false: true} title={<span style={{ cursor: 'pointer' }}>Team Up Travel</span>}
                  iconElementRight={
                     <span>
                        <FlatButton label="login" onClick={this.handleOpen} />
                        <Dialog
                           title="Login"
                           actions={actions}
                           modal={true}
                           open={this.state.open}
                        >
                           Username:<input ref="username" type="text" />
                           Password:<input ref="password" type="password" />
                        </Dialog>
                     </span>}
               />
            </MuiThemeProvider>         

            <div className="container">
                  {this.props.children}
               </div>

         </div>

            );
   }
}
