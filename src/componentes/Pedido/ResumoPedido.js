import React, { Component } from "react";
import FormaPagamento from "../Pagamento/FormaPagamento";
import Title from "../Title";
import { ProdutoConsumer } from "../../Contexto";
import CartList from "../Cart/CartList";
import PedidoColunas from "./PedidoColunas";
import ListaProdutosPedido from "./ListaProdutosPedido";
import PedidoTotal from "./PedidoTotal";
import EnderecoSelecionado from "../Endereco/EnderecoSelecionado";

export default class ResumoPedido extends Component {
    render() {
        return (
            <div className="py-5 container background-white">
                <div className="row">
                    <ProdutoConsumer>
                        {value => {
                            return (
                                <React.Fragment>
                                    <Title name="RESUMO DO " title="PEDIDO" />
                                    <PedidoColunas />
                                    <ListaProdutosPedido value={value} />
                                    <div className="container">
                                        <div className="row d-flex">
                                                <EnderecoSelecionado value={value} />
                                                <PedidoTotal value={value} />
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        }}
                    </ProdutoConsumer>
                </div>
            </div>
        );

    };
}