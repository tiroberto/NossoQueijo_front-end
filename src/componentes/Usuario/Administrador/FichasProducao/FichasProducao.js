import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react/cjs/react.development";
import { ProdutoConsumer } from "../../../../Contexto";
import Title from "../../../Title";
import ListaFichaProducao from "./ListaFichaProducao";
import BotaoVoltar from "../../../ButtonVoltar";

export default class FichasProducao extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { fichasProducaoListadosFiltro, filtroFichaProducao, usuariosList, listarFichasProducaoFiltro } = value;

                    const usuariosAdmin = () => {
                        var usuarios = []
                        usuarios.push(<option disabled hidden>--Selecione--</option>);
                        for (var i = 0; i < usuariosList.length; i++)
                            if (usuariosList[i].tipoUsuario.idTipoUsuario == 1)
                                usuarios.push(usuariosList[i]);
                        return usuarios.map(usuario => {
                            return <option key={usuario.idUsuario} value={usuario.idUsuario}>{usuario.nome}</option>
                        });
                    }

                    const send = (event) => {
                        event.preventDefault();
                        var selectUsuario = event.target.elements.selectUsuario;
                        var periodoInicial = event.target.elements.PeriodoInicio;
                        var periodoFinal = event.target.elements.PeriodoFim;
                        var data = {};

                        if (filtroFichaProducao == "periodo") {
                            if (periodoFinal.value != "" || periodoFinal.value != typeof undefined || periodoFinal.value != null && 
                            periodoInicial.value != "" || periodoInicial.value != typeof undefined || periodoInicial.value != null ) {
                                data = { periodoInicio: periodoInicial.value, periodoFim: periodoFinal.value };
                                listarFichasProducaoFiltro(data);
                            }
                        }
                        else if (filtroFichaProducao == "usuario") {
                            if (selectUsuario.value != "" || selectUsuario.value != typeof undefined || selectUsuario.value != null ) {
                                data = { idUsuario: selectUsuario.value };
                                listarFichasProducaoFiltro(data);
                            }
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
                            <Title name="FICHAS DE " title="PRODUÇÃO" />
                            <div className="container px-5 py-5">
                                <FichaProducaoWrapper>
                                    <div className="card">
                                        <ButtonWrapper>
                                            <Link to="/new-fichaproducao" style={{ textDecoration: "none" }}>
                                                <button className="btn-novo">
                                                    <span className="m-2">
                                                        <i className="fas fa-plus" />
                                                    </span>
                                                    Novo
                                                </button>
                                            </Link>
                                        </ButtonWrapper>
                                        <div className="card">
                                            <p>Selecione tipo de filtro para os pedidos.</p>
                                            <div>
                                                <input onInput={() => { value.setFiltroListagemFichaProducao("rdUsuario"); }} id="rdUsuario" style={{ marginRight: "0.5rem " }} type="radio" />
                                                <label htmlFor="rdUsuario">Usuário</label>
                                            </div>
                                            <div>
                                                <input onInput={() => { value.setFiltroListagemFichaProducao("rdPeriodo"); }} id="rdPeriodo" style={{ marginRight: "0.5rem " }} type="radio" />
                                                <label htmlFor="rdPeriodo">Período</label>
                                            </div>
                                            <form onSubmit={send}>
                                                {(filtroFichaProducao == "usuario") ?
                                                    <div className="form-group my-3">
                                                        <label htmlFor="selectUsuario">Usuário</label>
                                                        <select className="form-control" defaultValue="" id="selectUsuario" name="selectUsuario">
                                                            {usuariosAdmin()}
                                                        </select>
                                                    </div>
                                                    : null
                                                }
                                                {(filtroFichaProducao == "periodo") ?
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
                                                    : null
                                                }
                                                <ButtonWrapper>
                                                    <button type="submit" className="btn-submit">
                                                        Confirmar
                                                    </button>
                                                </ButtonWrapper>
                                            </form>
                                        </div>
                                    </div>
                                    {(fichasProducaoListadosFiltro.length > 0) ?
                                        <ListaFichaProducao value={value} />
                                        : "Vazio"
                                    }
                                </FichaProducaoWrapper>
                            </div>
                        </div>
                    );
                }}
            </ProdutoConsumer>
        );
    }
}

const FichaProducaoWrapper = styled.div`
margin: auto auto;
font-family: "Roboto Condensed";
.card{
    padding: 1.5rem 1.5rem;
    border-style:solid;
    transition:all 0.3s linear;
}
`;

const ButtonWrapper = styled.div`
.btn-submit{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 1rem 0.5rem 0.5rem 0;
    background-color: #3D94F6;
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