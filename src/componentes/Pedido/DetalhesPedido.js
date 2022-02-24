import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../Contexto";
import styled from "styled-components";
import Title from "../Title";
import PedidoColunas from "./PedidoColunas";
import PedidoItemDetail from "./PedidoItemDetail";
import { Link } from "react-router-dom";
import StatusPedido from "./StatusPedido";
import EnderecoEntregaPedido from "./EnderecoEntregaPedido";
import FormaPagamentoPedido from "./FormaPagamentoPedido";

export default class DetalhesPedido extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { idPedido, valorFrete, formaPagamento, status, pedidoProdutos, enderecoEntrega } = value.detalhesPedido;
                    const { calcularValorTotalPedido, calcularTotalProdutosPedido } = value;
                    //var freteFormatado = valorFrete.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",");
                    return (
                        <DetalhesPedidoWrapper className="py-5 container background-white">
                            <div className="container">
                                <Link to="/user" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                    <button className="btn-voltar">
                                        <span className="m-2">
                                            <i className="fas fa-arrow-left" />
                                        </span>
                                        Voltar
                                    </button>
                                </Link>
                            </div>
                            <Title name="PEDIDO " title={`#${idPedido}`} />
                            <div className="col-12 text-center mt-4 border-top p-4">
                                <h4>total pedido: R$ {calcularValorTotalPedido(idPedido)}</h4>
                                <h4>quantidade de produtos: {calcularTotalProdutosPedido(idPedido)}</h4>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <FormaPagamentoPedido formaPagamento={formaPagamento} value={value} />
                                        <EnderecoEntregaPedido enderecoEntrega={enderecoEntrega} value={value} />
                                    </div>
                                    <div className="col-6">
                                        <StatusPedido status={status} value={value} />
                                        <div className="card mt-2 pb-2">
                                            <div className="div-title mb-4 mt-2"><h5>Produtos</h5></div>
                                            <PedidoColunas />
                                            {pedidoProdutos.map(item => {
                                                return (
                                                    <PedidoItemDetail key={item.produto.idProduto} item={item} value={value} />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DetalhesPedidoWrapper>
                    );
                }
                }
            </ProdutoConsumer >
        );
    }
}

const DetalhesPedidoWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 0.3s linear;
}
.btn-voltar{
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
.btn-voltar:hover{
    background: var(--lightBlue);
    color: var(--mainWhite);
}
.btn-voltar:focus{
    outline: none;
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
.card-footer{
    background: var(--honeyDew);
    border-color:transparent;
    transition:all 1s linear;
}
.img-container{
    position:relative;
    overflow:hidden;
}
img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
}
`;
