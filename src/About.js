import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './TUT.css';

class About extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Card>
            <CardTitle title="About Our Site" subtitle=""/>
            <CardText>
              Team Up Travel is the best place to find travel companions. Define the type of traveller you are, your budget, and where you want to go to locate others like you. Or, check out the world map to find others, create a team, and live out any adventure you can dream up.
          </CardText>
            <CardActions>

              <MuiThemeProvider>
                <Link className="button-text" to="/signup">
                  <RaisedButton fullWidth={true} label="Sign Up Now" />
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
