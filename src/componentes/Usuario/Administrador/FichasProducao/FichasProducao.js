import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react/cjs/react.development";
import { ProdutoConsumer } from "../../../../Contexto";
import Title from "../../../Title";
import ListaFichaProducao from "./ListaFichaProducao";

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
                        var selectUsuario = document.querySelector("select[id=selectUsuario]");
                        var periodoInicio = document.querySelector("input[id=PeriodoInicio]");
                        var periodoFim = document.querySelector("input[id=PeriodoFim]");
                        var data = {};

                        if (filtroFichaProducao == "periodo") {
                            if (periodoFim.value && periodoInicio.value) {
                                data = { periodoInicio: PeriodoInicio.value, periodoFim: PeriodoFim.value };
                                listarFichasProducaoFiltro(data);
                            }
                        }
                        else if (filtroFichaProducao == "usuario") {
                            if (selectUsuario.value) {
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
                                        <button className="btn-voltar">
                                            <span className="m-2">
                                                <i className="fas fa-arrow-left" />
                                            </span>
                                            Voltar
                                        </button>
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
                                    {(fichasProducaoListadosFiltro.length > 0) ?
                                        <ListaFichaProducao value={value} />
                                        : null
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
.btn-novo{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.2rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.8rem 0.5rem 3rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainGreen);
    color: var(--mainGreen);
}
.btn-novo:hover{
    background: var(--mainGreen);
    color: var(--mainWhite);
}
.btn-novo:focus{
    outline: none;
}
`;