import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
    const { carrinho } = value;
    return (
        <div className="container-fluid">
            {carrinho.map(item => {
                return <CartItem key={item.idProduto} item={item} value={value} />
            })}
        </div>
    );
}