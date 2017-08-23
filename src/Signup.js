import React, { Component } from 'react';
import './TUT.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { blueGrey800 } from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';

class Signup extends Component {
  constructor() {
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

  signup = d => {
    d.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:8080/signup', this.state)
      .then(res => {
        this.props.successfulSignup(this.state.username);
        browserHistory.push("/home")
      })
      .catch(err => {
        console.log(err)
        alert('Signup didn\'t work for some reason.')
      })

  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase()
    })
  }


  render() {
    return (
      <div className="Signup">
        <div className="container">
          <h3 className="center">
            Sign up with us
          </h3>
          <MuiThemeProvider>
            <Paper style={{paddingTop:15, paddingBottom:15}}>
              <div className="row">
                <form onSubmit={this.signup} className="col s10 offset-s1">
                  Username:<input onChange={this.change} name="username" type="text" required />
                  Profile Photo:<input placeholder="use an image URL" onChange={this.change} name="user_img" type="text" required />
                  First Name:<input onChange={this.change} name="first_name" type="text" required />
                  Last Name:<input onChange={this.change} name="last_name" type="text" required />
                  Age:<input onChange={this.change} name="age" type="text" required />
                  Current Location:<input onChange={this.change} name="location" type="text" placeholder="city, country" required />
                  Perks:<input onChange={this.change} name="perks" type="text" placeholder="what makes you a great team member? What makes you you?" required />
                  Email:<input onChange={this.change} name="email" type="email" required />
                  Password:<input onChange={this.change} name="password" type="password" required />
                  <RaisedButton fullWidth={true} style={{color:"#FFF"}} backgroundColor={blueGrey800} type="submit">Submit</RaisedButton>
                </form>
              </div>
            </Paper>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default Signup;