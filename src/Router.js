import React, { useContext } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
// components
import Layout from "component/pages/Layout";
import LoginPage from "component/pages/Login";
import Add from "component/pages/Add";
import List from "component/pages/List";

import { firebaseApp } from "Api"
import { ContextStore } from "reducer"
import { abstractAccount } from "Utils/tools"


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
    const { dispatch } = useContext(ContextStore);
    const pathName = location.pathname
    firebaseApp.auth().onAuthStateChanged((user) => {
        if (!!user) dispatch({ type: "INIT_USER", value: abstractAccount(user.email) })
        if (!!user && pathName === "/login") {
            history.push('/list')
        } else if (!user && pathName !== "/login") {
            history.push('/login')
        }
    })
    return (
        <Routes />
    );
});
