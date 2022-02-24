import React from "react";
import PedidoItem from "./PedidoItem";

export default function ListaProdutosPedido({ value }) {
    const { carrinho } = value;
    return (
        <div className="container-fluid">
            {carrinho.map(item => {
                return <PedidoItem key={item.idProduto} item={item} value={value} />
            })}
        </div>
    );
}