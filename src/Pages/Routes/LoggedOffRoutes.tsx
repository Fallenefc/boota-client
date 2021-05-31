import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import { Pricing } from '../Pricing/Pricing';
import ResetPassword from '../ResetPassword/ResetPassword';
import Signup from '../Signup/Signup';

const LoggedRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/resetPassword" exact component={ResetPassword} />
    </Switch>
  </BrowserRouter>
);

export default LoggedRoutes;
