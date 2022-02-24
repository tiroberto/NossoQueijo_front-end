import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../../../Contexto";
import styled from "styled-components";
import Title from "../../../Title";
import { Link } from "react-router-dom";
import Usuario from "../../Usuario";

export default class DetalhesFichaProducao extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { idFichaProducao, usuario, data, volumePingo, volumeLeite, volumeCoalho, qntdSal, qntdProduzida, produto } = value.detalhesFichaProducao;
                    const { handleDeleteFichaProducao } = value;

                    return (
                        <div className="mt-5">
                            <div className="container">
                                <ButtonWrapper>
                                    <Link to="/admin-fichasproducao" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                        <button className="btn-voltar">
                                            <span className="m-2">
                                                <i className="fas fa-arrow-left" />
                                            </span>
                                            Voltar
                                        </button>
                                    </Link>
                                </ButtonWrapper>
                            </div>
                            <Title name="FICHA DE PRODUÇÃO " title={`#${idFichaProducao}`} />
                            <DetalhesFichaProducaoWrapper>
                                <div className="container">
                                    <div className="row">
                                        <div className="card">
                                            <div className="p-4 container">
                                                <div className="row">
                                                    <div className="col-6">
                                                        Data:
                                                    </div>
                                                    <div className="col-6 div-data">
                                                        <span>{data}</span>
                                                    </div>
                                                    <div className="col-6">
                                                        Usuario:
                                                    </div>
                                                    <div className="col-6 div-data">
                                                        <span>{usuario.nome}</span>
                                                    </div>
                                                    <div className="col-6">
                                                        Volume do pingo:
                                                    </div>
                                                    <div className="col-6 div-data">
                                                        <span>{volumePingo}l</span>
                                                    </div>

                                                    <div className="col-6">
                                                        Volume do leite:
                                                    </div>
                                                    <div className="col-6 div-data">
                                                        <span>{volumeLeite}l</span>
                                                    </div>
                                                    <div className="col-6">
                                                        Volume do coalho:
                                                    </div>
                                                    <div className="col-6 div-data">
                                                        <span>{volumeCoalho}l</span>
                                                    </div>
                                                    <div className="col-6">
                                                        Quantidade de sal:
                                                    </div>
                                                    <div className="col-6 div-data">
                                                        <span>{qntdSal}kg</span>
                                                    </div>
                                                    <div className="col-6">
                                                        Quantidade produzida:
                                                    </div>
                                                    <div className="col-6 div-data">
                                                        <span>{qntdProduzida}</span>
                                                    </div>
                                                    <div className="col-6">
                                                        Produto:
                                                    </div>
                                                    <div className="col-6 div-data">
                                                        <span>{produto.nome}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <ButtonWrapper>
                                                        <Link to="/edit-fichaproducao" style={{ textDecoration: "none" }}>
                                                            <button className="btn-editar">
                                                                <span className="m-2">
                                                                    <i className="fas fa-edit" />
                                                                </span>
                                                                Editar
                                                            </button>
                                                        </Link>
                                                        <button className="btn-excluir" onClick={() => { handleDeleteFichaProducao(idFichaProducao); }}>
                                                            <span className="m-2">
                                                                <i className="fas fa-trash" />
                                                            </span>
                                                            Excluir
                                                        </button>
                                                    </ButtonWrapper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DetalhesFichaProducaoWrapper>
                        </div>
                    );
                }
                }
            </ProdutoConsumer >
        );
    }
}

const ButtonWrapper = styled.div`
display: flex;
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
.btn-editar{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.2rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.8rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainGreen);
    color: var(--mainGreen);
}
.btn-editar:hover{
    background: var(--mainGreen);
    color: var(--mainWhite);
}
.btn-editar:focus{
    outline: none;
}
.btn-excluir{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.2rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.8rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: red;
    color: red;
}
.btn-excluir:hover{
    background: red;
    color: var(--mainWhite);
}
.btn-excluir:focus{
    outline: none;
}
`;

const DetalhesFichaProducaoWrapper = styled.div`
margin: 0 25rem;
padding: 50px 50px;
.div-data{
    font-family: "Roboto Condensed";
}
.card{
    border-color:transparent;
    transition:all 0.3s linear;
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
