import React, { useContext } from 'react';
import { Redirect, Route, useHistory, useNavigate } from 'react-router-dom';
import { ProdutoContexto } from './Contexto';
import Default from './componentes/Default';


export const AdminRouter = ({ component: Component, ...rest }) => {
    const value = useContext(ProdutoContexto);
    const isAuthenticated = () => value.resultLogin.token;
    const isAdmin = () => {
        if(value.resultLogin.usuario.tipoUsuario == 1)
            return true;
        else
            return false;
    };
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated() != "" && isAdmin)
                    return <Component {...props} />;
                else
                    return Default;
            }}
        />
    )
}