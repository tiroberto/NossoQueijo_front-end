import React from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import Produto from "./Produto";
import ProdutoColunas from "./ProdutoColunas";

export default function ListaProdutos({ value }) {
    const { produtos, dataCSV } = value;

    return (
        <ListaProdutosWrapper>
            <div className="mx-5 my-3 card">
                <div className="px-4 py-4 container">
                    <div className="row">
                        <ProdutoColunas />
                        {produtos.map(produto => {
                            return <Produto key={produto.idProduto} produto={produto} value={value} />
                        })}
                    </div>
                </div>
            </div>
        </ListaProdutosWrapper>
    );
}

const ListaProdutosWrapper = styled.div`
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