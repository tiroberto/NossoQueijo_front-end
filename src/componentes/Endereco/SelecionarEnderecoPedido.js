import React, { Component } from "react";
import Title from "../Title";
import { ProdutoConsumer } from "../../Contexto";
import SelecionarEnderecoItem from "./SelecionarEnderecoItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class SelecionarEnderecoPedido extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container py-5 px-5 background-white">
                    <Title name="SELECIONAR " title="ENDEREÇO" />
                    <div className="row mb-3">
                        <ButtonWrapper>
                            <Link to="/new-endereco" style={{textDecoration: "none"}}>
                                <button className="btn-novo">
                                    <span className="m-2">
                                        <i className="fas fa-plus" />
                                    </span>
                                    Novo
                                </button>
                            </Link>
                        </ButtonWrapper>
                    </div>
                    <div className="row">
                        <ProdutoConsumer>
                            {value => {
                                return value.resultLogin.enderecos.map(endereco => {
                                    return <SelecionarEnderecoItem key={endereco.idEndereco} value={value} endereco={endereco} />
                                })
                            }}
                        </ProdutoConsumer>
                    </div>
                </div>
            </React.Fragment>
        );

    };
}

const ButtonWrapper = styled.div`
display: flex;
#inputCEP{
    font-family: "Roboto Condensed";
    width: 8rem;
}
.btn-novo{
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
.btn-novo:hover{
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;