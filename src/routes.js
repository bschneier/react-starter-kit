import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/home';

const Routes = () => {
  return(
    <main className="row credit-cards-main-content">
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Routes;