import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Pedido(pedido) {
    const { idPedido, formaPagamento, status, valorFrete, pedidoProdutos } = pedido.pedido;
    const { handleDetalhePedidoAdmin } = pedido.value;

    function calcularValorTotalPedido() {
        var total = 0;
        for (var i = 0; i < pedidoProdutos.length; i++)
            total += pedidoProdutos[i].quantidade * pedidoProdutos[i].produto.preco;
        return total;
    }

    function calcularTotalProdutosPedido() {
        var totalProdutos = 0;
        for (var i = 0; i < pedidoProdutos.length; i++)
            totalProdutos += pedidoProdutos[i].quantidade;
        return totalProdutos;
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
                            <span>Valor total: {calcularValorTotalPedido()}</span>
                        </div>
                        <div className="col-3">
                            <span>Produtos: {calcularTotalProdutosPedido()}</span>
                        </div>
                        <div className="col-3 detail-button-align-center">
                            <div onClick={() => { handleDetalhePedidoAdmin(idPedido) }}>
                                <Link to="/order-detail-admin">
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
    background: var(--lightBlue);
    color: var(--mainWhite);
    border:none;
    font-size: 1.0rem;
    border-radius:0.4rem;
    transition: all 0.5s linear;
}
`;