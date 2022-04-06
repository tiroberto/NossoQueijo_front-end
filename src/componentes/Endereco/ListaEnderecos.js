import React, { useState, Component, useDebugValue } from "react";
import Endereco from "./Endereco";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ListaEnderecos({ value }) {
    const { enderecos } = value.resultLogin;
    return (
        <ListaEnderecosWrapper>
            <div className="card">
                <div className="div-title mt-2"><h5>Meus endereços</h5></div>
                <div className="container p-2">
                    <div className="row align-items-center">
                        <div className="text-end">
                            <Link to="/new-endereco" style={{ textDecoration: "none" }}>
                                <ButtonWrapper>
                                    <span className="m-2">
                                        <i className="fas fa-plus" />
                                    </span>
                                    Novo
                                </ButtonWrapper>
                            </Link>
                        </div>
                        {enderecos.map(item => {
                            return <Endereco key={item.idEndereco} item={item} value={value} />
                        })}
                    </div>
                </div>
            </div>
        </ListaEnderecosWrapper>
    );
}

const ButtonWrapper = styled.button`
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
color: #FFFFFF;
font-size: 20px;
font-weight: 100;
padding: 0.4rem 0.6rem;
margin: 0.2rem 0.5rem 0.2rem 0;
background-color: #3D94F6;
border: solid #337FED 0;
text-decoration: none;
display: inline-block;
cursor: pointer;
text-align: center;
:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;

const ListaEnderecosWrapper = styled.div`
.card{
    padding: 4px;
    border-style:solid;
    transition:all 0.3s linear;
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
`;

