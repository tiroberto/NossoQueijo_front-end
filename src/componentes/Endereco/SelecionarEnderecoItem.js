import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SelecionarEnderecoItem(item) {
    const { idEndereco, rua, numero, bairro, cidade, cep, complemento } = item.endereco;
    const { handleEnderecoPedido } = item.value;
    return (
        <EnderecoWrapper className="col-3">
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
                            {cep}
                        </span>
                        <span>
                            {cidade.nome} - {cidade.estado.nome}
                        </span>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <ButtonWrapper>
                            <Link to="/order-summary" style={{ textDecoration: "none" }}>
                                <button className="btn-selecionar" onClick={() => { handleEnderecoPedido(idEndereco); }}>
                                    Selecionar
                                </button>
                            </Link>
                        </ButtonWrapper>
                    </div>
                </div>
            </div>
        </EnderecoWrapper >
    );
}

const ButtonWrapper = styled.div`
display: flex;
.btn-selecionar{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #3D94F6;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 1rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
}
.btn-selecionar:hover{
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;

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