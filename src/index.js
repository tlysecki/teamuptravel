import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './About';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import {Router, Route, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path='/' component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      
   </Router>
, document.getElementById('root'));
registerServiceWorker();
