import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '~screens/Login';
import Register from '~screens/Register';
import { PATHS } from '~utils/paths';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATHS.login} component={Login} />
        <Route exact path={PATHS.signUp} component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
