import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react/cjs/react.development";
import { ProdutoConsumer } from "../../../../Contexto";
import Title from "../../../Title";
import ListaPedidos from "./ListaPedidos";
import { CSVLink } from "react-csv";

export default class Pedidos extends Component {
    render() {
        return (
            <>
                <ProdutoConsumer>
                    {value => {
                        const { statusList, dataCSV, formasPagamento, filtroPedidosAdmin, usuariosList, listarPedidosFiltro, pedidosListadosFiltro } = value;

                        const filtroSelecionado = () => {
                            if (filtroPedidosAdmin == "cliente") {
                                return usuariosList.map(usuario => {
                                    return <option key={usuario.idUsuario} value={usuario.idUsuario}>{usuario.nome}</option>
                                })
                            }
                            else if (filtroPedidosAdmin == "status") {
                                return statusList.map(status => {
                                    return <option key={status.idStatus} value={status.idStatus}>{status.descricao}</option>
                                })
                            }
                            else if (filtroPedidosAdmin == "formaPagamento") {
                                return formasPagamento.map(formaPagamento => {
                                    return <option key={formaPagamento.idFormaPagamento} value={formaPagamento.idFormaPagamento}>{formaPagamento.descricao}</option>
                                })
                            }
                        }

                        const send = (event) => {
                            event.preventDefault();
                            var select = document.querySelector("select[id=selectFiltro]");
                            console.log(select.value);

                            if (select.value != null || select.value != "" || typeof select.value != "undefined") {
                                listarPedidosFiltro(selectFiltro.value);
                            }
                            else
                                console.log("erro");
                        }

                        return (
                            <div className="container py-5 background-white">
                                <div className="col-6 ml-auto">
                                    <ButtonWrapper>
                                        <Link to="/user" style={{ textDecoration: "none" }}>
                                            <button className="btn-voltar">
                                                <span className="m-2">
                                                    <i className="fas fa-arrow-left" />
                                                </span>
                                                Voltar
                                            </button>
                                        </Link>
                                    </ButtonWrapper>
                                </div>
                                <Title name="PEDIDOS " title="ADMINISTRADOR" />
                                <div className="container px-5 py-5">
                                    <PedidosWrapper>
                                        <div className="card">
                                            <p>Selecione tipo de filtro para os pedidos.</p>
                                            <div>
                                                <input onInput={() => { value.setFiltroListagem("rdCliente"); }} id="rdCliente" style={{ marginRight: "0.5rem " }} type="radio" />
                                                <label htmlFor="rdCliente">Cliente</label>
                                            </div>
                                            <div>
                                                <input onInput={() => { value.setFiltroListagem("rdStatus"); }} id="rdStatus" style={{ marginRight: "0.5rem " }} type="radio" />
                                                <label htmlFor="rdStatus">Status</label>
                                            </div>
                                            <div>
                                                <input onInput={() => { value.setFiltroListagem("rdFormaPagamento"); }} id="rdFormaPagamento" style={{ marginRight: "0.5rem " }} type="radio" />
                                                <label htmlFor="rdFormaPagamento">Forma de pagamento</label>
                                            </div>
                                            <form onSubmit={send} style={{ marginTop: "0.7rem" }}>
                                                <select className="form-control" defaultValue="" id="selectFiltro" name="selectFiltro">
                                                    <option disabled hidden>--Selecione--</option>
                                                    {filtroSelecionado()}
                                                </select>
                                                <ButtonWrapper>
                                                    <button type="submit" className="btn-submit">
                                                        Confirmar
                                                    </button>
                                                </ButtonWrapper>
                                            </form>
                                        </div>
                                        {(pedidosListadosFiltro.length > 0) ?
                                            <ListaPedidos value={value} />
                                            : "Vazio"
                                        }
                                    </PedidosWrapper>
                                </div>
                            </div>
                        );
                    }}
                </ProdutoConsumer>
            </>
        );
    }
}

const PedidosWrapper = styled.div`
margin: auto auto;
font-family: "Roboto Condensed";
.card{
    padding: 1.5rem 1.5rem;
    border-style:solid;
    transition:all 0.3s linear;
}
`;

const ButtonWrapper = styled.div`
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
.btn-submit{
    width: 9rem;
    text-transform: capitalized;
    background: var(--mainWhite);
    font-size: 1.2rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.8rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--lightBlue);
    color: var(--lightBlue);
}
.btn-submit:hover{
    background: var(--lightBlue);
    color: var(--mainWhite);
}
.btn-submit:focus{
    outline: none;
}
`;