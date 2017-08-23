import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import YourHome from './YourHome';
import YourTeam from './YourTeam';
import WorldMap from './WorldMap';
import About from './About';
import Landing from './Landing';
import Signup from './Signup';
import SampleUser from './SampleUser';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path='/' component={Landing} >
         <IndexRoute component={Home} />
         <Route path='/about' component={About} />
         <Route path='/home' component={YourHome} />
         <Route path='/worldmap' component={WorldMap} />
            <Route path='/home/team' component={YourTeam} />
         <Route path='/signup' component={Signup} />
         <Route path='/user/:username' component={SampleUser} />
      </Route>
   </Router>
, document.getElementById('root'));
registerServiceWorker();
