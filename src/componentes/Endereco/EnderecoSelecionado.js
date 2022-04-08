import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function EnderecoSelecionado(value) {
    const { idEndereco, rua, numero, bairro, cidade, cep, complemento } = value.value.enderecoPedidoSelecionado;
    return (
        <EnderecoSelecionadoWrapper className="col-lg-4 my-3">
            <div className="card">
                <div className="div-title mt-2"><h5>Endereço para entrega</h5></div>
                <div className="pt-3 container">
                    <div className="row dados">
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
                </div>
            </div>
        </EnderecoSelecionadoWrapper >
    );
}

const EnderecoSelecionadoWrapper = styled.div`
display: flex;
minWidth: auto;
.dados{
    font-family: "Roboto Condensed";
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
.card{
    padding: 4px;
    border-style:solid;
    transition:all 0.3s linear;
}
`;