import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function StatusPedido(item) {
    const { idStatus, descricao, imagem } = item.status;
    const { openEditarModal } = item.value;
    const { idPedido } = item.value.detalhesPedidoAdmin;

    return (
        <StatusPedidoWrapper>
            <div className="card container px-2">
                <div className="div-title mt-2">
                    <h5>Status pedido</h5>
                </div>
                <div className="row">
                    <div className="col-12 d-flex align-items-center flex-column">
                        <button className="edit-btn" onClick={() => { openEditarModal(); }}>
                            <span className="m-2">
                                <i className="fa fa-pencil" />
                            </span>
                            Editar
                        </button>
                    </div>
                </div>
                <div className="row my-2 align-items-center">
                    <div className="col-6 p-4 text-center">
                        <h4>{descricao}</h4>
                    </div>
                    <div className="col-6 p-4 text-center">
                        <img src={imagem} alt="status" />
                    </div>
                </div>
            </div>
        </StatusPedidoWrapper>
    );
}

const StatusPedidoWrapper = styled.div`
font-family: "Roboto Condensed";
padding: 2px;
font-family: "Bebas Neue", sans-serif !important;
.card{
    transition:all 0.3s linear;
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
.edit-btn{
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #3D94F6;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 0.6rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    cursor: pointer;
    text-align: center; 
}
.edit-btn:hover{
    background: #1E62D0;
    border: solid #337FED 0;
    border-radius: 10px;
    text-decoration: none;
}
`;