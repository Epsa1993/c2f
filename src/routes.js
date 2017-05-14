import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from './components/App';
import Login from './component/account/Login';
import App from './component/App';
import Home from './component/Home/home';
import coursePage from './component/course/coursePage';
import aboutPage from './component/about/aboutPage';
import manageCoursePage from './component/course/manageCoursePage';

export default (
     <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="course" component={coursePage}/>
      <Route path="managecourse" component={manageCoursePage}/>
      <Route path="courses:id" component={manageCoursePage}/>
      <Route path="about" component={aboutPage}/>
   </Route>

);
