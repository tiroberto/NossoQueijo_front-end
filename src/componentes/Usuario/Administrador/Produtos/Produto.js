import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Produto(produto) {
    const { idProduto, nome, qntdEstoque } = produto.produto;
    const { handleDetalheProdutoAdmin, openModalExcluir } = produto.value;

    return (
        <ProdutoWrapper>
            <div className="card">
                <div className="container">
                    <div className="row align-items-center  text-center">
                        <div className="col-3">
                            <div className="m-1 protocol-order">
                                <span><strong>Id: #{idProduto}</strong></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <span>{nome}</span>
                        </div>
                        <div className="col-3">
                            <span>{qntdEstoque}</span>
                        </div>
                        <div className="col-3 detail-button-align-center">
                            <div className="d-inline">
                                <Link to="/detail-produto-admin">
                                    <button className="detalhes-btn" onClick={() => { handleDetalheProdutoAdmin(idProduto) }}>
                                        <span className="m-2">
                                            <i className="fas fa-plus" />
                                        </span>
                                        Detalhes
                                    </button>
                                </Link>
                            </div>
                            <div className="d-inline">
                                <button className="excluir-btn" onClick={() => { openModalExcluir(idProduto, "produtoAdmin"); }}>
                                    <span className="m-2">
                                        <i className="fas fa-trash" />
                                    </span>
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProdutoWrapper >
    );
}

const ProdutoWrapper = styled.div`
font-family: "Roboto Condensed";
margin-top: 6px;
padding: 2px;
.excluir-btn{
    text-transform: capitalized;
    margin: 2px 2px;
    padding: 0 0.8rem 0 0.8rem;
    background-color: var(--mainRed);
    color: var(--mainWhite);
    border:none;
    font-size: 1.0rem;
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
.protocol-order{
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
.card{
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--honeyDew);
    border-style:solid;
    transition:all 0.3s linear;
}
.detalhes-btn{
    text-transform: capitalized;
    margin: 2px 2px;
    padding: 0 0.8rem 0 0.8rem;
    background-color: #3D94F6;
    color: var(--mainWhite);
    border:none;
    font-size: 1.0rem;
    border-radius: 10px;
}
.detalhes-btn:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;