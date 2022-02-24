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
                        <div className="text-center">
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
text-align: center;
text-transform: capitalized;
background: transparent;
font-size: 1.2rem;
border: 0.05rem solid;
border-radius: 0.5rem;
padding: 0.2rem 2.4rem 0.2rem 2.4rem;
cursor: pointer;
margin: 0.8rem 5rem 0.2rem 5rem;
transition: all 0.5s ease-in-out;
border-color: var(--mainGreen);
color: var(--mainGreen);
:hover{
    background: var(--mainGreen);
    color: var(--mainWhite);
}
:focus{
    outline: none;
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

