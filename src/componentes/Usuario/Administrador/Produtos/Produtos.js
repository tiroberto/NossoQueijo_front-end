import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react/cjs/react.development";
import { ProdutoConsumer } from "../../../../Contexto";
import Title from "../../../Title";
import { CSVLink } from "react-csv";
import BotaoVoltar from "../../../ButtonVoltar";
import ListaProdutos from "./ListaProdutos";

export default class Produtos extends Component {
    render() {
        return (
            <>
                <ProdutoConsumer>
                    {value => {
                        const { produtos, dataCSV, formasPagamento, filtroProdutosAdmin, usuariosList, listarProdutosFiltro, ProdutosListadosFiltro } = value;

                        const send = (event) => {
                            event.preventDefault();
                            var select = document.querySelector("select[id=selectFiltro]");
                            console.log(select.value);

                            if (select.value != null || select.value != "" || typeof select.value != "undefined") {
                                listarProdutosFiltro(selectFiltro.value);
                            }
                            else
                                console.log("erro");
                        }

                        return (
                            <div className="container py-5 background-white">
                                <div className="col-6 ml-auto">
                                    <Link to="/user" style={{ textDecoration: "none" }}>
                                        <BotaoVoltar />
                                    </Link>
                                </div>
                                <Title name="PRODUTOS " title="ADMINISTRADOR" />
                                <div className="container px-5 py-5">
                                    <ProdutosWrapper>
                                        <div className="card">
                                            <div className="mx-5 my-4">
                                                <Link to="/new-produto" style={{ textDecoration: "none" }}>
                                                    <button className="btn-novo">
                                                        <span className="m-2">
                                                            <i className="fas fa-plus" />
                                                        </span>
                                                        Novo
                                                    </button>
                                                </Link>
                                            </div>
                                            {(produtos.length > 0) ?
                                                <ListaProdutos value={value} />
                                                : "Vazio"
                                            }
                                        </div>
                                    </ProdutosWrapper>
                                </div>
                            </div>
                        );
                    }}
                </ProdutoConsumer>
            </>
        );
    }
}

const ProdutosWrapper = styled.div`
margin: auto auto;
font-family: "Roboto Condensed";
.card{
    border-style:solid;
    transition:all 0.3s linear;
}
.btn-novo{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 0.2rem 0.5rem 2rem 0;
    background-color: #3D94F6;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
}
.btn-novo:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
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
 .btn-novo{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 0.2rem 0.5rem 2rem 0;
    background-color: #3D94F6;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
}
.btn-novo:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;