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
                                            <h5>Selecione o novo status do pedido #{idPedido}</h5>
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
.btn-confirmar{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.2rem;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.8rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainGreen);
    color: var(--mainGreen);
}
.btn-confirmar:hover{
    background: var(--mainGreen);
    color: var(--mainWhite);
}
.btn-confirmar:focus{
    outline: none;
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
    background: var(--mainWhite);
}
`;