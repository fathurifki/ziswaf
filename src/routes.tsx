import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from "@/app/infrastructures/misc/BrowserHistory";

import Product from './app/container/views/Product/index';
import Home from './app/container/views/Home/View';

export default function Routes(): JSX.Element {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/product' component={Product} />
            </Switch>
        </Router>
    )
}
