import React, { Component } from "react";
import Title from "../Title";
import CartColunas from "./CartColunas";
import CartVazio from "./CartVazio";
import { ProdutoConsumer } from "../../Contexto";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { carrinho } = value;
                    if (carrinho.length > 0) {
                        return (
                            <div className="container py-5 background-white">
                                <Title name="MEU " title="CARRINHO" />
                                <CartColunas />
                                <CartList value={value} />
                                <CartTotal value={value} />
                            </div>
                        );
                    }
                    else {
                        return <CartVazio />
                    }
                }}
            </ProdutoConsumer>
        );
    }
}