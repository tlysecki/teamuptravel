import React from 'react';
import Drawer from 'material-ui/Drawer';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default class Wannago extends React.Component {

   constructor(props) {
      super(props);
      this.state = { open: false };
   }

   handleTouchTap = (event) => {
      // This prevents ghost click.
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

   render() {
      return (
         <div>
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
               <FlatButton fullWidth={true} label="Message me!"/>
            </Popover>
         </div>
      );
   }
}