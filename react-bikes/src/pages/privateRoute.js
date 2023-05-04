import React from 'react';
import { Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = (props) => {
    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    return (isUserLoggedIn ? props.children : <Redirect to = '/login'/>);
};

export default PrivateRoute;