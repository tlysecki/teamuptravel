import React, { Component } from 'react';
import './TUT.css';
import axios from 'axios';

class Signup extends Component {
constructor(){
   super();
   this.state = {
      username: '',
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
   }

   change=e=> {
      this.setState({
         [e.target.name]: e.target.value
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

export default Signup;