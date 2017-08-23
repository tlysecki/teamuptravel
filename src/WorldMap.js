import React, { Component } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { red500 } from 'material-ui/styles/colors';
import './TUT.css';

const iconStyles = {
  left: 214,
  top: 295
};

class WorldMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openType: false,
      openStyle: false,
      openBudget: false,
    };
  }

  typeTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      openType: true,
      anchorEl: event.currentTarget,
    });
  };

  styleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      openStyle: true,
      anchorEl: event.currentTarget,
    });
  };

  budgetTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      openBudget: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      openType: false,
      openStyle: false,
      openBudget: false,
    });
  };

  render() {

    return (
      <div className="container">
        <MuiThemeProvider>
          <div className="center">
            <FlatButton
              onClick={this.typeTouchTap}
              label="Filter by Type"
            />
            <Popover
              open={this.state.openType}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="All" />
                <MenuItem primaryText="Your Teams & Wannagos" />
                <MenuItem primaryText="Teams" />
                <MenuItem primaryText="Wannagos" />
              </Menu>
            </Popover>

            <FlatButton
              onClick={this.styleTouchTap}
              label="Filter by Style"
            />
            <Popover
              open={this.state.openStyle}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="Adventure/Fitness" />
                <MenuItem primaryText="Backpacking" />
                <MenuItem primaryText="Culture/Education" />
                <MenuItem primaryText="Leisure" />
                <MenuItem primaryText="Party Travel" />
              </Menu>
            </Popover>

            <FlatButton
              onClick={this.budgetTouchTap}
              label="Filter by Budget"
            />
            <Popover
              open={this.state.openBudget}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="Shoestring" />
                <MenuItem primaryText="Midrange" />
                <MenuItem primaryText="Luxury" />
              </Menu>
            </Popover>
          </div>
        </MuiThemeProvider>
        <div width={800}>
          <MuiThemeProvider>
            <Link to="/home/team">
              <IconButton tooltip="Peru Sep 21-23"
                iconClassName="material-icons"
                color={red500}
                style={iconStyles} >place</IconButton>
            </Link>
          </MuiThemeProvider>
          <img width={800} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Winkel_triple_projection_SW.jpg" alt="World Map" />
        </div>
      </div>

    );
  }
}


export default WorldMap;
