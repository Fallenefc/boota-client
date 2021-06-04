import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { Pricing } from '../Pricing/Pricing';
import ResetPassword from '../ResetPassword/ResetPassword';
import Signup from '../Signup/Signup';

const LoggedRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/about" exact component={About} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/resetPassword" exact component={ResetPassword} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default LoggedRoutes;
