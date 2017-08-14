import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import SampleUser from './SampleUser';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path='/' component={Landing} >
         <IndexRoute component={Home} />
         <Route path='/about' component={About} />
         <Route path='/login' component={Login} />
         <Route path='/signup' component={Signup} />
         <Route path='/sample-user' component={SampleUser} />
      </Route>
   </Router>
, document.getElementById('root'));
registerServiceWorker();
