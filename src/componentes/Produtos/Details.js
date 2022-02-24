import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../Contexto";
import { Link, RouteComponentProps } from "react-router-dom";
import { ButtonContainer } from "../Button";
import styled from "styled-components";

export default class Details extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    var precoFormatado = value.detalhesProduto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",");
                    return (
                        <DetailsWrapper className="container py-5 background-white">
                            <div className="container">
                                <Link to="/" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                    <button className="btn-voltar">
                                        <span className="m-2">
                                            <i className="fas fa-arrow-left" />
                                        </span>
                                        Voltar
                                    </button>
                                </Link>
                            </div>
                            <div className="row mt-5">
                                <div className="col-6 mx-auto text-center text-slanted">
                                    <img src={value.detalhesProduto.imagem} alt="produto" className="img-fluid" />
                                </div>
                                <div className="col-4 mx-auto text-slanted text-blue">
                                    <h1>{value.detalhesProduto.nome}</h1>
                                    <h5 className="text-title text-uppercase text-muted">
                                        Peso: <strong><span className="text-lowercase">
                                            {value.detalhesProduto.peso}kg
                                        </span></strong>
                                    </h5>
                                    <h3 className="text-title text-uppercase text-muted my-5">
                                        <strong>
                                            {precoFormatado}</strong>
                                    </h3>
                                    <div>
                                        <ButtonContainer carrinho disabled={value.detalhesProduto.adicionadoAoCarrinho ? true : false}
                                            onClick={() => {
                                                value.addToCarrinho(value.detalhesProduto.idProduto);
                                                value.openModal(value.detalhesProduto.idProduto);
                                            }}>
                                            {value.detalhesProduto.adicionadoAoCarrinho ? "No carrinho" : "Adicionar ao carrinho"}
                                        </ButtonContainer>
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
