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
                    const { carrinho, openModalMensagem, calculaTotal, confirmPedido } = value;

                    const valorTotal = () => {
                        var valorTotal = 0;
                        carrinho.forEach(item => {
                            valorTotal += item.preco;
                        });
                        return valorTotal;
                    }

                    return (
                        <React.Fragment>
                            <PedidoTotalWrapper>
                                <div className="container-fluid text-left d-none d-lg-block">
                                    <div className="row">
                                        <div className="col-3 mx-auto  mt-4">
                                            <h4>Forma de pagamento: {descricao}</h4>
                                        </div>
                                        <div className="col-3 mx-auto  mt-4">
                                            <h4>Frete: //</h4>
                                            <h4>Total: {valorTotal().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</h4>
                                        </div>
                                        <div className="col-3 mx-auto  mt-4">
                                            <ButtonWrapper>
                                                <button className="btn-confirmar" onClick={() => { confirmPedido(); }}>Confirmar pedido</button>
                                            </ButtonWrapper>
                                        </div>
                                    </div>
                                </div>
                            </PedidoTotalWrapper>
                        </React.Fragment>
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
    width: 17rem;
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