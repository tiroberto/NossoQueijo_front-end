import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../../../Contexto";
import { Link, RouteComponentProps } from "react-router-dom";
import BotaoVoltar from "../../../ButtonVoltar";
import styled from "styled-components";

export default class DetalhesProdutoAdmin extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    var precoFormatado = value.detalhesProdutoAdmin.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",");
                    return (
                        <DetailsWrapper className="container py-5 background-white">
                            <div className="container">
                                <Link to="/admin-produtos" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                    <BotaoVoltar />
                                </Link>
                            </div>
                            <div className="row mt-5">
                                <div className="col-6 mx-auto text-center text-slanted">
                                    <img src={value.detalhesProdutoAdmin.imagem} alt="produto" className="img-fluid" />
                                </div>
                                <div className="col-4 mx-auto text-slanted text-blue">
                                    <h3 className="pb-5">{value.detalhesProdutoAdmin.nome}</h3>
                                    <h3 className="text-title text-uppercase text-muted">Estoque: <strong>{value.detalhesProdutoAdmin.qntdEstoque} peças</strong></h3>
                                    <h3 className="text-title text-uppercase text-muted">
                                        Peso: <strong><span className="text-lowercase">
                                            {value.detalhesProdutoAdmin.peso}kg
                                        </span></strong>
                                    </h3>
                                    <h3 className="text-title text-uppercase text-muted">
                                        Preço: <strong><span>{precoFormatado}/peça</span></strong>
                                    </h3>
                                    <div className="row mt-5">
                                        <div className="col-6">
                                            <Link to="/edit-produto-admin" style={{ textDecoration: "none" }}>
                                                <button className="editar-btn" onClick={() => { }}>
                                                    <i className="fa fa-pencil mx-2" />Editar
                                                </button>
                                            </Link>
                                            <button className="excluir-btn" onClick={() => { value.openModalExcluir(value.detalhesProdutoAdmin.idProduto, "produtoAdmin") }}>
                                                <i className="fa fa-trash mx-2" />Excluir
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DetailsWrapper>
                    );
                }}
            </ProdutoConsumer>
        );
    }
}

const DetailsWrapper = styled.div`
.editar-btn{
    text-transform: capitalized;
    display: inline;
    margin: 2px 2px;
    padding:0.5rem;
    background: var(--mainGreen);
    color: var(--mainWhite);
    border:none;
    font-size: 1.2rem;
    border-radius: 10px;
}
.editar-btn:hover{
    background: #006600;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
.excluir-btn{
    text-transform: capitalized;
    display: inline;
    margin: 2px 2px;
    padding: 0.5rem;
    background: var(--mainRed);
    color: var(--mainWhite);
    border:none;
    font-size: 1.2rem;
    border-radius: 10px;
}
.excluir-btn:hover {
    background: #BD0202;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
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
