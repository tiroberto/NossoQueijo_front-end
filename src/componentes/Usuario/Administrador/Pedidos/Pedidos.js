import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react/cjs/react.development";
import { ProdutoConsumer } from "../../../../Contexto";
import Title from "../../../Title";
import ListaPedidos from "./ListaPedidos";
import { CSVLink } from "react-csv";
import BotaoVoltar from "../../../ButtonVoltar";

export default class Pedidos extends Component {
    render() {
        return (
            <>
                <ProdutoConsumer>
                    {value => {
                        const { statusList, dataCSV, formasPagamento, filtroPedidosAdmin, usuariosList, listarPedidosFiltro, pedidosListadosFiltro } = value;

                        const filtroSelecionado = () => {
                            if (filtroPedidosAdmin.filtro == "cliente") {
                                return usuariosList.map(usuario => {
                                    return <option key={usuario.idUsuario} value={usuario.idUsuario}>{usuario.nome}</option>
                                })
                            }
                            else if (filtroPedidosAdmin.filtro == "status") {
                                return statusList.map(status => {
                                    return <option key={status.idStatus} value={status.idStatus}>{status.descricao}</option>
                                })
                            }
                            else if (filtroPedidosAdmin.filtro == "formaPagamento") {
                                return formasPagamento.map(formaPagamento => {
                                    return <option key={formaPagamento.idFormaPagamento} value={formaPagamento.idFormaPagamento}>{formaPagamento.descricao}</option>
                                })
                            }
                        }

                        const send = (event) => {
                            event.preventDefault();
                            var select = document.querySelector("select[id=selectFiltro]");
                            var dataInicial = document.querySelector("input[id=PeriodoInicio]");
                            var dataFinal = document.querySelector("input[id=PeriodoFim]");

                            if (filtroPedidosAdmin.filtro == "periodo")
                                var data = {
                                    idFiltro: 0,
                                    dataInicial: dataInicial.value,
                                    dataFinal: dataFinal.value,
                                    pagina: 1
                                };
                            else
                                var data = {
                                    idFiltro: select.value,
                                    dataInicial: "",
                                    dataFinal: "",
                                    pagina: 1
                                };

                            if (data.idFiltro != null || data.idFiltro != "" || typeof data.idFiltro != "undefined" ||
                                data.dataInicial != null || data.dataInicial != "" || typeof data.dataInicial != "undefined" ||
                                data.dataFinal != null || data.dataFinal != "" || typeof data.dataFinal != "undefined") {
                                listarPedidosFiltro(data);
                            }
                            else
                                console.log("erro");
                        }

                        return (
                            <div className="container py-5 background-white">
                                <div className="col-6 ml-auto">
                                    <ButtonWrapper>
                                        <Link to="/user" style={{ textDecoration: "none" }}>
                                            <BotaoVoltar />
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
                                            <div>
                                                <input onInput={() => { value.setFiltroListagem("rdPeriodo"); }} id="rdPeriodo" style={{ marginRight: "0.5rem " }} type="radio" />
                                                <label htmlFor="rdPeriodo">Período</label>
                                            </div>
                                            <form onSubmit={send} style={{ marginTop: "0.7rem" }}>
                                                {(filtroPedidosAdmin.filtro != "periodo") ?
                                                    <select className="form-control" defaultValue="" id="selectFiltro" name="selectFiltro">
                                                        <option disabled hidden>--Selecione--</option>
                                                        {filtroSelecionado()}
                                                    </select>
                                                    :
                                                    <div className="my-3">
                                                        <div className="form-group">
                                                            <label htmlFor="PeriodoInicio">Período inicial</label>
                                                            <input className="form-control" id="PeriodoInicio" style={{ marginRight: "0.5rem " }} type="date" />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="PeriodoFim">Período fim</label>
                                                            <input className="form-control" id="PeriodoFim" style={{ marginRight: "0.5rem " }} type="date" />
                                                        </div>
                                                    </div>
                                                }


                                                <ButtonWrapper>
                                                    <button type="submit" className="btn-submit">
                                                        Confirmar
                                                    </button>
                                                </ButtonWrapper>
                                            </form>
                                        </div>
                                        {(pedidosListadosFiltro.items.length > 0) ?
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
.btn-submit {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #3D94F6;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 1rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
 } 
 .btn-submit:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;