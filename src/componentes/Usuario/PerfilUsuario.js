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
import MenuAdmin from "./MenuAdmin";


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
                                        <MenuAdmin />
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
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 0.6rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    background-color: var(--mainRed);
    color: var(--mainWhite);
}
.btn-sair:hover{
    background: #BD0202;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
.btn-admin {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 0.6rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    color: #FFFFFF;
    background-color: #3D94F6;
 }
 
 .btn-admin:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #3D94F6;
}
button[name=admin-option]:hover{    
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;