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
    width: 10rem;
    text-transform: capitalized;
    background: transparent;
    font-size: 1.6rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--lightBlue);
    color: var(--lightBlue);
}
.btn-selecionar:hover{
    background: var(--lightBlue);
    color: var(--mainWhite);
}
.btn-selecionar:focus{
    outline: none;
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