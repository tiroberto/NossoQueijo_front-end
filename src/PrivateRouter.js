import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ProdutoContexto } from './Contexto';


export const PrivateRouter = ({ component: Component, ...rest }) => {
    const value = useContext(ProdutoContexto);    
    const isAuthenticated = () => value.resultLogin.token;
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated() != "")
                    return <Component {...props} />;
                else
                    return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
            }}
        />
    )
}