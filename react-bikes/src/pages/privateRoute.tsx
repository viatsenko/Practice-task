import React from 'react';
import { Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {Store} from "../store/types";

type PrivateRouteProps = {
    children: React.ReactNode
}
const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
    const isUserLoggedIn = useSelector((state: Store) => state.auth.isUserLoggedIn);
    return (isUserLoggedIn ? <>{props.children}</> : <Redirect to = '/login'/>);
};

export default PrivateRoute;
