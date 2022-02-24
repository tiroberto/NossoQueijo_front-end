import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react/cjs/react.development";
import { ProdutoConsumer } from "../../../../Contexto";
import Title from "../../../Title";

export default class Relatorios extends Component {
    render() {
        return (
            <div className="mt-5">
                <ProdutoConsumer>
                    {value => {

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
                            <>
                                <div className="container">
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
                                    <Title name="RELATÓRIOS " title="ADMINISTRADOR" />
                                    <RelatoriosWrapper>
                                        <div className="row">
                                            <div className="col-3"></div>                                            
                                            <div className="col-6 card mt-5">
                                                <h4 className="text-center">Relatório de vendas</h4>
                                                <div>
                                                    <input onInput={() => { value.setFiltroListagem("rdCliente"); }} id="rdCliente" style={{ marginRight: "0.5rem " }} type="radio" />
                                                    <label htmlFor="rdCliente">Cliente</label>
                                                </div>
                                                <div>
                                                    <input onInput={() => { value.setFiltroListagem("rdStatus"); }} id="rdStatus" style={{ marginRight: "0.5rem " }} type="radio" />
                                                    <label htmlFor="rdStatus">Status</label>
                                                </div>
                                                <form onSubmit={send} style={{ marginTop: "0.7rem" }}>
                                                    <select defaultValue="" id="selectFiltro" name="selectFiltro">
                                                        <option disabled hidden>--Selecione--</option>
                                                    </select>
                                                    <ButtonWrapper>
                                                        <button type="submit" className="btn-submit">
                                                            <span className="m-2">
                                                                <i className="fas fa-users-cog"></i>
                                                            </span>
                                                            Confirmar
                                                        </button>
                                                    </ButtonWrapper>
                                                </form>
                                            </div>
                                            <div className="col-3"></div>
                                        </div>
                                    </RelatoriosWrapper>
                                </div>
                            </>
                        );
                    }}
                </ProdutoConsumer>
            </div>
        );
    }
}

const RelatoriosWrapper = styled.div`
margin: auto auto;
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
`;