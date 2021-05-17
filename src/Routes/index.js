import * as React from "react";
import { Route } from 'react-router-dom';
import { RouteWithoutLayout } from 'react-admin';
import Foo from '../Footer';
// import Register from './Register';

export default [
    <Route exact path="/foo" component={Foo} />,
    // <RouteWithoutLayout exact path="/register" component={Register} />,
];