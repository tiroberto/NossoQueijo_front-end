import React, { useState, Component } from "react";
import Produto from "./Produto";
import Title from "../Title";
import { ProdutoConsumer } from "../../Contexto";

export default class ListaProdutos extends Component {
    render() {
        return (
            <div className="container background-white py-5">
                <Title name="NOSSOS " title="PRODUTOS" />
                <div className="row my-5 mx-5">
                    <ProdutoConsumer>
                        {value => {
                            return value.produtos.map(produto => {
                                return <Produto key={produto.idProduto} produto={produto} />
                            })
                        }}
                    </ProdutoConsumer>
                </div>
            </div>
        );
    }
}