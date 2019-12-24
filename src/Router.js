import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// components
import Layout from "./component/pages/Layout";
import LoginPage from "./component/pages/Login";
import Add from "./component/pages/Add";
import Total from "./component/pages/Total";

// contexts


const Routes = () => (
    <Switch>
        <Route exact path="/login" render={() => <LoginPage />} />

        <Layout>
            <Route exact path="/" render={() => <Add />} />
            <Route exact path="/total" render={() => <Total />} />
        </Layout>

        {/* <Redirect from="/" to="/main" /> */}
    </Switch>
);

export default withRouter(({ location: { pathname } }) => {
    return (
        <Routes />
    );
});
