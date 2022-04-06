import React, { Component } from "react";
import styled from "styled-components";
import { ProdutoConsumer } from "../Contexto";
import { Link } from "react-router-dom";

export default function ModalExcluir() {
    return (
        <ProdutoConsumer>
            {(value) => {
                const { modalExcluirOpen, modalIdExcluir, modalExcluirNomeEntidade, handleDeletePedido, closeModalExcluir, handleDeleteFichaProducao, handleDeleteEndereco, handleDeleteProdutoAdmin } = value;

                function handleDelete() {
                    switch (modalExcluirNomeEntidade) {
                        case "fichaProducao":
                            handleDeleteFichaProducao(modalIdExcluir);
                            break;
                        case "endereco":
                            handleDeleteEndereco(modalIdExcluir);
                            break;
                        case "produtoAdmin":
                            handleDeleteProdutoAdmin(modalIdExcluir);
                            break;
                        case "pedidoAdmin":
                            handleDeletePedido(modalIdExcluir);
                            break;
                        default:
                            closeModalExcluir();
                    }
                    closeModalExcluir();
                };

                if (!modalExcluirOpen) {
                    return null;
                }
                else {
                    return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modalMensagem" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalizer">
                                        <h5>Certeza que deseja excluir?</h5>
                                        <ButtonContainer>
                                            <button className="btn-excluir" onClick={() => handleDelete()}>
                                                    <i className="fas fa-trash mx-2" />
                                                Excluir
                                            </button>
                                            <button className="btn-cancelar" onClick={() => closeModalExcluir()}>
                                                Cancelar
                                            </button>
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    );
                }
            }}
        </ProdutoConsumer>
    );
}

const ButtonContainer = styled.div`
.btn-excluir{
    text-transform: capitalized;
    display: inline;
    margin: 2px 5px;
    padding:0.2rem 0.6rem;
    background: red;
    color: var(--mainWhite);
    border:none;
    font-size: 1.2rem;
    border-radius: 10px;
}
.btn-excluir:hover{
    background: #BD0202;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
.btn-cancelar{
    text-transform: capitalized;
    display: inline;
    margin: 2px 5px;
    padding:0.2rem 0.6rem;
    background: #3D94F6;
    color: var(--mainWhite);
    border:none;
    font-size: 1.2rem;
    border-radius: 10px;
}
.btn-cancelar:hover{
    background: #BD0202;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.6);
display: flex;
align-items: center;
justify-content: center;
#modalMensagem{
    padding: 1rem 1rem;
    background: var(--mainWhite);
    border-radius: 1rem;
}
`;