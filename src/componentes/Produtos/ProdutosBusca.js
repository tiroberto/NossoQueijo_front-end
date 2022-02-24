import React, { useState, Component } from "react";
import Produto from "./Produto";
import Title from "../Title";
import { ProdutoConsumer } from "../../Contexto";
import BuscaIncompleta from "./BuscaIncompleta";

export default class ProdutosBusca extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container py-5 background-white">
                    <Title name="RESULTADO DA " title="BUSCA" />
                    <div className="row my-5 mx-5">
                        <ProdutoConsumer>
                            {value => {
                                const { produtosListaBusca } = value;


                                if (produtosListaBusca.length > 0) {
                                    return value.produtosListaBusca.map(produto => {
                                        return <Produto key={produto.idProduto} produto={produto} />
                                    });
                                }
                                else{
                                    return <BuscaIncompleta />
                                }
                            }}
                        </ProdutoConsumer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}