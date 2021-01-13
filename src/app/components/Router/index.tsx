import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '~screens/Login';
import Register from '~screens/Register';
import { PATHS } from '~constants/paths';
import Home from '~screens/Home';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATHS.login} component={Login} />
        <Route exact path={PATHS.signUp} component={Register} />
        <Route exact path={PATHS.home} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
