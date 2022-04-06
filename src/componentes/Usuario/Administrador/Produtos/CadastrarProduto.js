import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProdutoConsumer } from "../../../../Contexto";
import BotaoVoltar from "../../../ButtonVoltar";
import Title from "../../../Title";

export default class CadastroProduto extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { cadastroProdutoInputs, usuariosList, openModalMensagem, produtos } = value;

                    const send = (event) => {
                        event.preventDefault();
                        var inputNome = event.target.elements.inputNome;
                        var inputQuantidade = event.target.elements.inputQuantidade;
                        var inputPreco = event.target.elements.inputPreco;
                        var inputPeso = event.target.elements.inputPeso;
                        var inputImagem = event.target.elements.inputImagem;
                        
                        let resultVerificacao = false;

                        for (var i = 0; i < cadastroProdutoInputs.length; i++) {
                            if (cadastroProdutoInputs[i].resultVerificacao) {
                                console.log(cadastroProdutoInputs[i].resultVerificacao);
                                resultVerificacao = true;
                            }
                            else
                                resultVerificacao = false;
                        }

                        if (resultVerificacao) {
                            const ProdutoSalvar = {
                                idProduto: 0,
                                nome: inputNome.value,
                                qntdEstoque: inputQuantidade.value,
                                preco: inputPreco.value,
                                peso: inputPeso.value,
                                imagem: inputImagem.value
                            };
                            //console.log(ProdutoSalvar);
                            value.handleSubmitCadastroProduto(ProdutoSalvar);
                        }
                        else
                            openModalMensagem("Alguns campos não foram preenchidos!", "/new-produto");
                    }
                    return (
                        <>
                            <div className="container py-5 background-white">
                                <div className="col-6 ml-auto">
                                    <ButtonWrapper>
                                        <Link to="/admin-produtos" style={{ textDecoration: "none" }}>
                                            <BotaoVoltar />
                                        </Link>
                                    </ButtonWrapper>
                                </div>
                                <Title name="CADASTRO DE " title="PRODUTO" />
                                <div className="row">
                                    <div className="col-12">
                                        <CadastroProdutoWrapper className="card">
                                            <form onSubmit={send}>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputNome">Nome</label>
                                                    <input type="text" onChange={() => { value.handleChangeCadastroProduto(); }} className="form-control" id="inputNome" name="inputNome" />
                                                    <div className="text-danger" hidden={value.cadastroProdutoInputs[0].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[0].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputPreco">Preço</label>
                                                    <input type="text" onChange={() => { value.mascaraNumeros("", "inputPreco"); value.handleChangeCadastroProduto(); }} className="form-control" id="inputPreco" name="inputPreco" />
                                                    <div className="text-danger" hidden={value.cadastroProdutoInputs[1].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[1].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputPeso">Peso</label>
                                                    <input type="text" onChange={() => { value.mascaraNumeros("##.##", "inputPeso"); value.handleChangeCadastroProduto(); }} className="form-control" id="inputPeso" name="inputPeso" />
                                                    <div className="text-danger" hidden={value.cadastroProdutoInputs[2].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[2].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputQuantidade">Quantidade</label>
                                                    <input type="text" onChange={() => { value.mascaraNumeros("", "inputQuantidade"); value.handleChangeCadastroProduto(); }} className="form-control" id="inputQuantidade" name="inputQuantidade" />
                                                    <div className="text-danger" hidden={value.cadastroProdutoInputs[3].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[3].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputImagem">Link imagem</label>
                                                    <input type="text" onChange={() => { value.handleChangeCadastroProduto(); }} className="form-control" id="inputImagem" name="inputImagem" />
                                                    <div className="text-danger" hidden={value.cadastroProdutoInputs[4].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[4].error}</div>
                                                </div>
                                                <div className="mt-3">
                                                    <ButtonWrapper>
                                                        <button type="submit" className="btn-salvar">Salvar</button>
                                                    </ButtonWrapper>
                                                </div>
                                            </form>
                                        </CadastroProdutoWrapper>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }}
            </ProdutoConsumer>
        );
    }
}

const ButtonWrapper = styled.div`
.btn-salvar{
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
.btn-salvar:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;

const CadastroProdutoWrapper = styled.div`
margin: 3rem 20rem;
padding: 50px 50px;
input {
    font-family: "Roboto Condensed";
}
h3 {
    color: var(--mainBlue);
}
.btn-submit{
    text-transform: capitalized;
    fon-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    align: right;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainBlue);
    color: var(--mainBlue);
}
.btn-submit:hover{
    background: var(--mainBlue);
    color: var(--mainWhite);
}
.btn-submit:focus{
    outline: none;
}
`;