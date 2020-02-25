import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './utils/BrowserHistory';

import Home from './app/container/views/Home/index';
import Product from './app/container/views/Product/index';
import Homes from './app/container/views/Homes/index';

export default function Routes(): JSX.Element {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/product' component={Product} />
                <Route path='/test' component={Homes} />
            </Switch>
        </Router>
    )
}
