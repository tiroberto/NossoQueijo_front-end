import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function EnderecoEntregaPedido(item) {
    const { idEndereco, rua, numero, bairro, cep, cidade } = item.enderecoEntrega;
    return (
        <EnderecoEntregaPedidoWrapper>
            <div className="card pb-2">
                <div className="div-title mt-2"><h5>Endereço de entrega</h5></div>
                <div className="container mt-4">
                    <div className="row aling-items-center">
                        <span>{rua}, n. {numero}</span>
                        <span>{bairro}</span>
                        <span>{cep}</span>
                        <span>{cidade.nome} - {cidade.estado.nome}</span>
                    </div>
                </div>
            </div>
        </EnderecoEntregaPedidoWrapper>
    );
}

const EnderecoEntregaPedidoWrapper = styled.div`
font-family: "Roboto Condensed";
margin-top: 6px;
padding: 2px;
font-family: "Bebas Neue", sans-serif !important;
.div-data{
    display: inline;
}
.card{
    border-color:transparent;
    transition:all 0.3s linear;
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
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