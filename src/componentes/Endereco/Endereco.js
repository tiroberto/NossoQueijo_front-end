import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Endereco(item) {
    const { idEndereco, rua, numero, bairro, cidade, cep, complemento } = item.item;
    const { handleEnderecoEditar, handleDeleteEndereco } = item.value;
    return (
        <EnderecoWrapper className="col-6">
            <div className="card">
                <div className="pt-3 container">
                    <div className="row">
                        <span>
                            {rua}, n. {numero}
                        </span>
                        <span>
                            {bairro}
                        </span>
                        <span>
                            {complemento}
                        </span>
                        <span>
                            {cep.replace(/\D/g, "")}
                        </span>
                        <span>
                            {cidade.nome} - {cidade.estado.nome}
                        </span>
                    </div>
                    <div className="row">
                        <div className="d-flex">
                            <Link to="/edit-address" className="ml-auto">
                                <button className="enderecoeditar-btn" onClick={() => { handleEnderecoEditar(idEndereco); }}>
                                    <span className="m-2">
                                        <i className="fa fa-pencil" />
                                    </span>
                                </button>
                            </Link>
                            <button className="enderecoexcluir-btn" onClick={() => { handleDeleteEndereco(idEndereco); }}>
                                <span className="m-2">
                                    <i className="fa fa-trash" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </EnderecoWrapper >
    );
}

const EnderecoWrapper = styled.div`
font-family: "Roboto Condensed";
margin-top: 6px;
padding: 2px;
.div-data{
    display: inline;
}
.card{
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--honeyDew);
    border-style:solid;
    transition:all 0.3s linear;
}
.enderecoeditar-btn{
    text-transform: capitalized;
    display: inline;
    margin: 2px 2px;
    padding:0.2rem 0.4rem;
    background: var(--mainGreen);
    color: var(--mainWhite);
    border:none;
    font-size: 1.2rem;
    border-radius:0.4rem;
    transition: all 0.5s linear;
}
.enderecoexcluir-btn{
    text-transform: capitalized;
    display: inline;
    margin: 2px 2px;
    padding:0.2rem 0.4rem;
    background: red;
    color: var(--mainWhite);
    border:none;
    font-size: 1.2rem;
    border-radius:0.4rem;
    transition: all 0.5s linear;
}
.buttons-endereco{
    margin: 6px 6px;
}
`;