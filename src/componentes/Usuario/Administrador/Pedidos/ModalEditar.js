import React, { Component } from "react";
import styled from "styled-components";
import { ProdutoConsumer } from "../../../../Contexto";
import { Link } from "react-router-dom";

export default class ModalEditar extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {(value) => {
                    const { openSpinner, closeSpinner, openEditarModal, closeEditarModal, statusList, editarStatusPedido, modalEditarStatusOpen } = value;
                    const { idPedido, usuario, formaPagamento, status, valorFrete, pedidoProdutos, enderecoEntrega } = value.detalhesPedidoAdmin;

                    const send = (event) => {
                        event.preventDefault();
                        var select = document.querySelector("select[id=selectStatus]");

                        if (select.value > 0) {
                            const pedidoEditar = {
                                idPedido: idPedido,
                                usuario: usuario,
                                valorFrete: valorFrete,
                                formaPagamento: formaPagamento,
                                status: { idStatus: select.value },
                                pedidoProdutos: pedidoProdutos,
                                enderecoEntrega: enderecoEntrega
                            };
                            editarStatusPedido(pedidoEditar);
                            closeEditarModal();
                        }
                        else
                            console.log("erro");
                    }

                    if (!modalEditarStatusOpen)
                        return null;
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modalEditarStatus" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalizer">
                                            <h5 className="mt-3">Selecione o novo status do pedido #{idPedido}</h5>
                                            <form onSubmit={send}>
                                                <select id="selectStatus" name="selectStatus">
                                                    <option value="" selected disabled hidden>--Selecione--</option>
                                                    {statusList.map(status => {
                                                        return <option value={status.idStatus}>{status.descricao}</option>
                                                    })}
                                                </select>
                                                <ButtonWrapper>
                                                    <button className="btn-confirmar" type="submit">
                                                        <span className="m-2">
                                                            <i className="fas fa-check"></i>
                                                        </span>
                                                        Confirmar
                                                    </button>
                                                    <button className="btn-cancelar" onClick={() => { closeEditarModal(); }}>
                                                        <span className="m-2">
                                                            <i className="fas fa-times"></i>
                                                        </span>
                                                        Cancelar
                                                    </button>
                                                </ButtonWrapper>
                                            </form>
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
}

const ButtonWrapper = styled.div`
text-align: center;
.btn-confirmar {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #3D94F6;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 1rem 0.5rem 1rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
 } 
 .btn-confirmar:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
 .btn-cancelar {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: var(--mainRed);
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 1rem 0.5rem 1rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
 } 
 .btn-cancelar:hover {
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
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modalEditarStatus{
    border-radius: 1rem;
    background: var(--mainWhite);
}
`;