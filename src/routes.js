import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from './components/App';
import Login from './component/account/Login';
import App from './component/App';
import Home from './component/Home/home';

export default (
     <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}/>
   </Route>

);
