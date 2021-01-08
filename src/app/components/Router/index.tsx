import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '~screens/Login';
import Register from '~screens/Register';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign_up" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
