import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '~screens/Login';
import Register from '~screens/Register';
import { PATHS } from '~constants/paths';
import Home from '~screens/Home';
import { isAutenticated } from '~utils/auth';

function Router() {
  const isAuth = isAutenticated();

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={PATHS.principal}
          exact
          render={() => {
            if (isAuth) {
              return <Home />;
            }
            return <Login />;
          }}
        />
        <Route
          path={PATHS.signUp}
          exact
          render={() => (isAuth ? <Redirect to={PATHS.principal} /> : <Register />)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
