import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../../../Contexto";
import styled from "styled-components";
import Title from "../../../Title";
import { Link } from "react-router-dom";
import Usuario from "../../Usuario";
import BotaoVoltar from "../../../ButtonVoltar";

export default class DetalhesFichaProducao extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { idFichaProducao, usuario, data, volumePingo, volumeLeite, volumeCoalho, qntdSal, qntdProduzida, produto } = value.detalhesFichaProducao;
                    const { openModalExcluir } = value;

                    function dataFormatada(data) {
                        let dataTemp = new Date(data),
                            dia = dataTemp.getDate().toString().padStart(2, "0"),
                            mes = (dataTemp.getMonth() + 1).toString().padStart(2, "0"),
                            ano = dataTemp.getFullYear();
                        return `${dia}/${mes}/${ano}`;
                    }

                    return (
                        <div className="container py-5 background-white">
                            <div className="container">
                                <ButtonWrapper>
                                    <Link to="/admin-fichasproducao" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                        <BotaoVoltar />
                                    </Link>
                                </ButtonWrapper>
                            </div>
                            <Title name="FICHA DE PRODUÇÃO " title={`#${idFichaProducao}`} />
                            <DetalhesFichaProducaoWrapper>
                                <div className="container card">
                                    <div className="row">
                                        <div className="col-6 my-2 d-flex align-items-end flex-column">
                                            <span>Data:</span>
                                            <span>Usuario:</span>
                                            <span>Volume do pingo:</span>
                                            <span>Volume do leite:</span>
                                            <span>Volume do coalho:</span>
                                            <span>Quantidade de sal:</span>
                                            <span>Quantidade produzida:</span>
                                            <span>Produto:</span>
                                        </div>
                                        <div className="col-6 my-2 d-flex align-items-start flex-column div-data">
                                            <span>{dataFormatada(data)}</span>
                                            <span>{usuario.nome}</span>
                                            <span>{volumePingo}l</span>
                                            <span>{volumeLeite}l</span>
                                            <span>{volumeCoalho}l</span>
                                            <span>{qntdSal}kg</span>
                                            <span>{qntdProduzida}</span>
                                            <span>{produto.nome}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <ButtonWrapper>
                                            <div className="col-6 my-2 d-flex align-items-end flex-column">
                                                <Link to="/edit-fichaproducao" style={{ textDecoration: "none" }}>
                                                    <button className="btn-editar">
                                                        <span className="m-2">
                                                            <i className="fas fa-edit" />
                                                        </span>
                                                        Editar
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="col-6 my-2 d-flex align-items-start flex-column">
                                                <button className="btn-excluir" onClick={() => { openModalExcluir(idFichaProducao, "fichaProducao"); }}>
                                                    <span className="m-2">
                                                        <i className="fas fa-trash" />
                                                    </span>
                                                    Excluir
                                                </button>
                                            </div>
                                        </ButtonWrapper>
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
.btn-editar {
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
.btn-editar:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
 .btn-excluir {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: var(--mainRed);
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
.btn-excluir:hover {
    background: #BD0202;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;

const DetalhesFichaProducaoWrapper = styled.div`
margin: 0 5rem;
padding: 50px 50px;
.div-data{
    font-family: "Roboto Condensed";
}
.card{
    border-color:transparent;
    transition:all 0.3s linear;
}
`;
