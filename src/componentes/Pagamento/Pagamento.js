import React, { Component } from "react";
import FormaPagamento from "./FormaPagamento";
import Title from "../Title";
import { ProdutoConsumer } from "../../Contexto";

export default class Pagamento extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container py-5 px-5 background-white">
                    <Title name="SELECIONAR " title="PAGAMENTO" />
                    <div className="row">
                        <ProdutoConsumer>
                            {value => {
                                return value.formasPagamento.map(formaPagamento => {
                                    return <FormaPagamento key={formaPagamento.idFormaPagamento} value={value} formaPagamento={formaPagamento} />
                                })
                            }}
                        </ProdutoConsumer>
                    </div>
                </div>
            </React.Fragment>
        );

    };
}