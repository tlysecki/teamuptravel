import React, { Component } from 'react';
import { Link } from 'react-router';
import { amber400, blueGrey800 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './TUT.css';

class Home extends Component {

   render() {

      return (
         <div className="hero-image">
            <div className="hero-body">
               <MuiThemeProvider>
                  <div>
                     <h1 style={{ fontSize:"3.7em" }}>find friends and get lost.</h1>
                     <div>
                        <Link to="/signup">
                           <RaisedButton className="large" 
                                         backgroundColor={amber400} 
                                         style={{ marginTop: 35 }} labelStyle={{ fontSize:33, color:blueGrey800 }} 
                                         label="Sign Up Now" />
                        </Link>
                     </div>
                     <div>
                        <Link to="/about">
                           <RaisedButton className="right" style={{ marginTop:150, marginRight:-50, opacity: 0.7 }} labelStyle={{ fontSize: 12 }} label="Find Out More"></RaisedButton>
                        </Link>
                     </div>
                  </div>
               </MuiThemeProvider>
            </div>
         </div>
      );
   }
}

//Make this component a modal

/*

class Signup extends Component {
   constructor(){
      super();
      this.state = {
         username: '',
         user_img: '',
         first_name: '',
         last_name: '',
         age: 0,
         location: '',
         perks: '',
         email: '',
         password: '',
   
      }
      this.signup = this.signup.bind(this)
      this.change = this.change.bind(this)
   }
   
      signup=d=> {
         d.preventDefault();
         console.log(this.state);
         axios.post('http://localhost:8080/signup', this.state)
              .then(res => {
               this.props.successfulSignup(this.state.username);
               browserHistory.push("/home")
               })
              .catch(err=>{
                 console.log(err)
                 alert('Signup didn\'t work for some reason.')
        })
      }
   
      change=e=> {
         this.setState({
            [e.target.name]: e.target.value.toLowerCase()
         })
      }
   
   
      render() {
         return (
            <div className="Signup">
               <div className="container">
                  <p>
                     Sign Up
                  </p>
                  <div className="row">
                     <form onSubmit={this.signup} className="col s10 offset-s1">
                        Username:<input onChange={this.change} name="username" type="text" required />
                        Image URL:<input onChange={this.change} name="user_img" type="text" required />
                        First Name:<input onChange={this.change} name="first_name" type="text" required />
                        Last Name:<input onChange={this.change} name="last_name" type="text" required />
                        Age:<input onChange={this.change} name="age" type="text" required />
                        Current Location:<input  onChange={this.change} name="location" type="text" placeholder="City, Country" required />
                        Perks:<input onChange={this.change} name="perks" type="text" placeholder="What makes you a great team member? What makes you you?" required />
                        Email:<input  onChange={this.change} name="email" type="email" required />
                        Password:<input onChange={this.change} name="password" type="password" required />
                        <button type="submit">Submit</button>
                     </form>
                  </div>
               </div>
            </div>
         );
      }
   }

   */

export default Home;
