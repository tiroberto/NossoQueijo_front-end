import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function StatusPedido(item) {
    const { idStatus, descricao, imagem } = item.status;
    return (
        <StatusPedidoWrapper>
            <div className="card">
                <div className="div-title mt-2"><h5>Status pedido</h5></div>
                <div className="container mt-4">
                    <div className="row align-items-center">
                        <div className="col-6 p-4 text-center">
                            <h4>{descricao}</h4>
                        </div>
                        <div className="col-6 p-4 text-center">
                            <img src={imagem} alt="status" />
                        </div>
                    </div>
                </div>
            </div>
        </StatusPedidoWrapper>
    );
}

const StatusPedidoWrapper = styled.div`
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