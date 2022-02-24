import React from "react";
import styled from "styled-components";
import FichaProducao from "./FichaProducao";
import { CSVLink } from "react-csv";

export default function ListaFichaProducao({ value }) {
    const { fichasProducaoListadosFiltro, dataFichaProducaoCSV } = value;

    const headersCSV = [
        { label: "ID", key: "idFichaProducao" },
        { label: "Data", key: "data" },
        { label: "Usuario", key: "usuario" },
        { label: "Volume pingo", key: "volumePingo" },
        { label: "Volume leite", key: "volumeLeite" },
        { label: "Volume coalho", key: "volumeCoalho" },
        { label: "Sal", key: "qntdSal" },
        { label: "Produzido", key: "qntdProduzida" },
        { label: "Produto", key: "produto" }
    ];

    return (
        <ListaFichaProducaoWrapper>
            <div className="card">
                <div className="div-title mt-2"><h5>Fichas de produção</h5></div>
                <div className="py-2 text-center">
                    <button className="btn-download">
                        <CSVLink data={dataFichaProducaoCSV} headers={headersCSV} style={{ textDecoration: "none", color: "var(--lightBlue)" }}>
                            <span className="m-2">
                                <i className="fas fa-download"></i>
                            </span>
                            Download CSV
                        </CSVLink>
                    </button>
                </div>
                <div className="px-4 py-2 container">
                    <div className="row">
                        {fichasProducaoListadosFiltro.map(fichaProducao => {
                            return <FichaProducao key={fichaProducao.idFichaProducao} fichaProducao={fichaProducao} value={value} />
                        })}
                    </div>
                </div>
            </div>
        </ListaFichaProducaoWrapper>
    );
}

const ListaFichaProducaoWrapper = styled.div`
margin-top: 1.6rem;
h5{
    font-family:"Bebas Neue";
}
.card{
    padding: 4px;
    border-style:solid;
    transition:all 0.3s linear;
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
.btn-download{
    width: 11.4rem;
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
    border-color: var(--lightBlue);
}
`;