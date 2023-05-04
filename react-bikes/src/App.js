import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Bikes from "./pages/Bikes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import PrivateRoute from "./pages/privateRoute";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact><Redirect to={'/login'}/></Route>
                <Route path={'/login'}><Login/></Route>
                <Route path={'/bikes'}><PrivateRoute><Bikes/></PrivateRoute></Route>
                <Route path={'*'}><NotFound/></Route>
            </Switch>
        </Layout>
    );
};

export default App;