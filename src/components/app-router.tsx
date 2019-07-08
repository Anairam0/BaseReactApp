import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Routes } from '../routes';

import { Login } from './login/login';
import { Home } from './home/home';

export const AppRouter: React.FunctionComponent = () => (
        <Switch>
            <Route path={Routes.Login} component={Login} />       
            <Route path={Routes.Root} component={Home} />
        </Switch>
);