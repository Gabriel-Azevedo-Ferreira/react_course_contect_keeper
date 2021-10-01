import React, {useContext} from 'react';
import AuthContext from "../context/auth/authContext";
import {Redirect, Route} from "react-router-dom";

function PrivateRoute({component: Component, ...rest}) {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, loading} = authContext
    console.log('rest',rest)
    return (
        <Route {...rest} render={
            props => isAuthenticated && !loading ?
                <Component {...props}/>
                :
                <Redirect to={'/login'}/>
        }/>
    );
}

export default PrivateRoute;