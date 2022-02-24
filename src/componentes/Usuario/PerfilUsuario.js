import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProdutoConsumer } from "../../Contexto";
import PropTypes from "prop-types";
import Usuario from "./Usuario";
import ListaEnderecos from "../Endereco/ListaEnderecos";
import { useContext } from "react/cjs/react.development";
import ProdutoContexto from "../../Contexto";
import Title from "../Title";
import ListaPedidos from "../Pedido/ListaPedidos";
import Login from "./Login";


export default class PerfilUsuario extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { menuAdmin, menuAdminShow, detalhesPedidoAdmin } = value;
                    const { logado, token } = value.resultLogin;
                    if (logado && token != "") {
                        return (
                            <div className="container background-white py-5">
                                <div className="row">
                                    <div className="col-6">
                                        {menuAdminShow ?
                                            <ButtonWrapper>
                                                <button onClick={() => { value.showMenuAdmin(); }} className="btn-admin dropdown-toggle">
                                                    <span className="m-2">
                                                        <i className="fas fa-users-cog"></i>
                                                    </span>
                                                    Área administrador
                                                </button>
                                                {menuAdmin ?
                                                    (<div className="div-list">
                                                        <Link to="/admin-pedidos" style={{ textDecoration: "none" }} className="col-6">
                                                            <button name="admin-option" onClick={() => { value.showMenuAdmin(); }}>
                                                                <span>Pedidos</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/admin-fichasproducao" style={{ textDecoration: "none" }} className="col-6">
                                                            <button name="admin-option" onClick={() => { value.showMenuAdmin(); }}>
                                                                <span>Fichas de produção</span>
                                                            </button>
                                                        </Link>
                                                    </div>)
                                                    : null}
                                            </ButtonWrapper>
                                            : null
                                        }
                                    </div>
                                    <div className="col-6">
                                        <Link to="/" style={{ textDecoration: "none", textAlign: "right" }}>
                                            <ButtonWrapper>
                                                <button onClick={() => { value.handleLogOut(); }} className="btn-sair">
                                                    <span className="m-2">
                                                        <i className="fas fa-sign-out-alt"></i>
                                                    </span>
                                                    Sair
                                                </button>
                                            </ButtonWrapper>
                                        </Link>
                                    </div>
                                </div>
                                <Title name="MEU " title="PERFIL" />
                                <div className="row">
                                    <div className="col-6">
                                        <Usuario value={value} />
                                        <ListaPedidos value={value} />
                                    </div>
                                    <div className="col-6">
                                        <ListaEnderecos value={value} />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    else {
                        return <Login />
                    }
                }}
            </ProdutoConsumer>
        );
    }
}

const ButtonWrapper = styled.div`
button[name=admin-option]{
    text-transform: capitalized;
    text-align: center;
    font-size: 1rem;
    width: 8rem;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    margin: 0.3rem 0.1rem 0.3rem 0.1rem;
    text-align: left;
    border: none;
    border-radius: 0.5rem;
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--lightBlue);
    color: var(--mainWhite);
}
button[name=admin-option]:hover{    
    background: transparent;
    border: 0.05rem solid;
    color: var(--lightBlue);
}
.div-list{
    border: 0.05rem solid;
    border-radius: 0.5rem;
    border-color: var(--lightBlue);
    //width: 25rem;
    padding: 0 0.3rem;
    position: absolute;
    display: inline;
}
.btn-sair{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.6rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainRed);
    color: var(--mainRed);
}
.btn-sair:hover{
    background: var(--mainRed);
    color: var(--mainWhite);
}
.btn-sair:focus{
    outline: none;
}
.btn-admin{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.6rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-color: var(--lightBlue);
    color: var(--lightBlue);
}
.btn-admin:hover{
    background: var(--lightBlue);
    color: var(--mainWhite);
}
.btn-admin:focus{
    outline: none;
}
`;