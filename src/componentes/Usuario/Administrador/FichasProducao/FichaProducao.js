import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FichaProducao(fichaProducao) {
    const { idFichaProducao, data, pedidoProdutos } = fichaProducao.fichaProducao;
    const { handleDetalheFichaProducao, openModalExcluir } = fichaProducao.value;

    function dataFormatada(data) {
        let dataTemp = new Date(data),
            dia = dataTemp.getDate().toString().padStart(2, "0"),
            mes = (dataTemp.getMonth() + 1).toString().padStart(2, "0"),
            ano = dataTemp.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <FichaProducaoWrapper>
            <div className="card">
                <div className="container">
                    <div className="row align-items-center  text-center">
                        <div className="col-4">
                            <div className="m-1 protocol-order">
                                <span><strong>Ficha de produção: #{idFichaProducao}</strong></span>
                            </div>
                        </div>
                        <div className="col-4">
                            <span>Data: {dataFormatada(data)}</span>
                        </div>
                        <div className="col-4 detail-button-align-center">
                            <div className="d-inline" onClick={() => { handleDetalheFichaProducao(idFichaProducao) }}>
                                <Link to="/details-fichaproducao">
                                    <button className="detalhes-btn">
                                        <span className="m-2">
                                            <i className="fas fa-plus" />
                                        </span>
                                        Detalhes
                                    </button>
                                </Link>
                            </div>
                            <div className="d-inline">
                                <button className="excluir-btn" onClick={() => { openModalExcluir(idFichaProducao, "fichaProducao"); }}>
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
        </FichaProducaoWrapper >
    );
}

const FichaProducaoWrapper = styled.div`
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
.detail-button-align-center{
    text-align: center;
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