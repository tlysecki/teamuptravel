import React, { Component } from 'react';
import { Link } from 'react-router';
import { lightBlue900 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './TUT.css';

class About extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:"3vh"}}>
        <MuiThemeProvider>
          <Card>
          <CardMedia style={{opacity:0.8}}
          overlay={<CardTitle titleStyle={{fontSize:35}} title="What We Do" />}>
            <img style={{maxHeight:"60vh"}} src="https://static.pexels.com/photos/297755/pexels-photo-297755.jpeg" alt="Travel Plans" />
          </CardMedia>
            <CardText>
              Team Up Travel is the best place to find travel companions. Define the type of traveller you are, your budget, and where you want to go. People like you can see your wannago and message you. Or, check out the world map to find others, create a team, and live out any adventure you can dream up.
          </CardText>
            <CardActions>

              <MuiThemeProvider>
                <Link className="button-text" to="/signup">
                  <RaisedButton fullWidth={true} backgroundColor={lightBlue900} labelStyle={{fontSize:26, color:"#FFF"}} label="Sign Up Now" />
                </Link>
              </MuiThemeProvider>

            </CardActions>
          </Card>
        </MuiThemeProvider>
        <div>

        </div>
      </div>
    );
  }
}

export default About;
