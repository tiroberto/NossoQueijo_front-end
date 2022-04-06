import React from "react";
import styled from "styled-components";
import Pedido from "./Pedido";
import { CSVLink } from "react-csv";

export default function ListaPedidos({ value }) {
    const { pedidosListadosFiltro, dataCSV } = value;

    const headersCSV = [
        { label: "ID", key: "idPedido" },
        { label: "Usuario", key: "usuario" },
        { label: "Valor frete", key: "valorFrete" },
        { label: "Status", key: "status" },
        { label: "Forma de pagamento", key: "formaPagamento" }
    ];

    return (
        <ListaPedidosWrapper>
            <div className="card">
                <div className="div-title mt-2"><h5>Pedidos</h5></div>
                <div className="py-2 text-center">
                    <button className="btn-download">
                        <CSVLink data={dataCSV} headers={headersCSV} style={{ textDecoration: "none", color: "var(--mainWhite)" }}>
                            <span className="m-2">
                                <i className="fas fa-download"></i>
                            </span>
                            Download CSV
                        </CSVLink>
                    </button>
                </div>
                <div className="px-4 py-2 container">
                    <div className="row">
                        {pedidosListadosFiltro.map(pedido => {
                            return <Pedido key={pedido.idPedido} pedido={pedido} value={value} />
                        })}
                    </div>
                </div>
            </div>
        </ListaPedidosWrapper>
    );
}

const ListaPedidosWrapper = styled.div`
margin-top: 1.6rem;
.card{
    padding: 4px;
    border-style:solid;
    transition:all 0.3s linear;
}
h5{
    font-family:"Bebas Neue";
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
.btn-download {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #3D94F6;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
 } 
 .btn-download:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;