import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Pedido(item) {
    const { idPedido, formaPagamento, status, valorFrete, pedidoProdutos } = item.item;

    const valorTotal = () => {
        var valorTotal = 0;
        pedidoProdutos.forEach(item => {
            valorTotal += item.quantidade * item.produto.preco;
        });
        valorTotal += valorFrete;
        return valorTotal;
    }

    const totalProdutos = () => {
        var total = 0;
        pedidoProdutos.forEach(item => {
            total += item.quantidade;
        });
        return total;
    }

    return (
        <PedidoWrapper>
            <div className="card">
                <div className="container">
                    <div className="row align-items-center  text-center">
                        <div className="col-3">
                            <div className="m-1 protocol-order">
                                <span><strong>Pedido: #{idPedido}</strong></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <span>Valor total: {valorTotal()}</span>
                        </div>
                        <div className="col-3">
                            <span>Produtos: {totalProdutos()}</span>
                        </div>
                        <div className="col-3 detail-button-align-center">
                            <div onClick={() => item.value.handleDetalhePedido(idPedido)}>
                                <Link to="/order-detail">
                                    <button className="detalhes-btn">
                                        <span className="m-2">
                                            <i className="fas fa-plus" />
                                        </span>
                                        Detalhes
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PedidoWrapper >
    );
}

const PedidoWrapper = styled.div`
font-family: "Roboto Condensed";
margin-top: 6px;
padding: 2px;
.protocol-order{
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
.card{
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--honeyDew);
    border-style:solid;
    transition:all 0.3s linear;
}
.detail-button-align-center{
    text-align: center;
}
.detalhes-btn{
    text-transform: capitalized;
    margin: 2px 2px;
    padding: 0 0.8rem 0 0.8rem;
    background-color: #3D94F6;
    color: var(--mainWhite);
    border:none;
    font-size: 1.0rem;
    border-radius: 10px;
}
.detalhes-btn:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;