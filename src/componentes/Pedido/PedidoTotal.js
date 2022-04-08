import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProdutoConsumer } from "../../Contexto";

export default class PedidoTotal extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { idFormaPagamento, descricao } = value.formaPagamentoSelecionada;
                    const { carrinho, openModalMensagem, calculaTotal, confirmPedido, resultadoConsultaCorreios } = value;

                    const valorFrete = parseFloat(resultadoConsultaCorreios.Valor);
                    const valorTotal = () => {
                        var valorTotal = 0;
                        carrinho.forEach(item => {
                            valorTotal += item.preco;
                        });
                        valorTotal += valorFrete;
                        return valorTotal;
                    }

                    return (
                        <PedidoTotalWrapper className="col-lg-8 my-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8 mx-auto">
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Forma de pagamento:</h4>
                                            </div>
                                            <div className="col-6">
                                                <h4>{descricao}</h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Frete:</h4>
                                            </div>
                                            <div className="col-6">
                                                <h4>{valorFrete.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Total:</h4>
                                            </div>
                                            <div className="col-6">
                                                <h4>{valorTotal().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 mx-auto">
                                        <ButtonWrapper>
                                            <button className="btn-confirmar" onClick={() => { confirmPedido(); }}>Confirmar pedido</button>
                                        </ButtonWrapper>
                                    </div>
                                </div>
                            </div>
                        </PedidoTotalWrapper>
                    )
                }
                }
            </ProdutoConsumer>
        );
    }
}

const ButtonWrapper = styled.div`
display: flex;
#inputCEP{
    font-family: "Roboto Condensed";
    width: 8rem;
}
.btn-confirmar{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: #3D94F6;
    font-size: 1.4rem;
    display: inline;
    border: solid #337FED 0;
    cursor: pointer;
    padding: 0.4rem 1.2rem;
    margin: 0 0.5rem 0.5rem 0;
    color: var(--mainWhite);
}
.btn-confirmar:hover{
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;

const PedidoTotalWrapper = styled.div`
.btn-confirm{
    text-transform: capitalized;
    fon-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    align: right;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainGreen);
    color: var(--mainGreen);
}
.btn-confirm:hover{
    background: var(--mainGreen);
    color: var(--mainWhite);
}
.btn-confirm:focus{
    outline: none;
}
`;