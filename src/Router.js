import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
// components
import Layout from "./component/pages/Layout";
import LoginPage from "./component/pages/Login";
import Add from "./component/pages/Add";
import List from "./component/pages/List";

import {firebaseApp} from "./api"

const Routes = () => (

    <Switch>
        <Route exact path="/login" render={() => <LoginPage />} />
        <Layout>
            <Route exact path="/" render={() => <Add />} />
            <Route exact path="/list" render={() => <List />} />
        </Layout>
        <Redirect from="/" to="/login" />
    </Switch>

);

export default withRouter(({ history, location }) => {

    return (
        <Routes />
    );
});
