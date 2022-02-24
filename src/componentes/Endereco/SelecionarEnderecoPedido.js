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
    width: 8rem;
    text-transform: capitalized;
    background: transparent;
    font-size: 1.4rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
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