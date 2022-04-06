import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../../../Contexto";
import styled from "styled-components";
import Title from "../../../Title";
import { Link } from "react-router-dom";
import BotaoVoltar from "../../../ButtonVoltar";

export default class EditarProduto extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { cadastroProdutoInputs, produtos, usuariosList, handleSubmitEditarEndereco, editarEnderecoInputs } = value;
                    const { idProduto, nome, preco, peso, imagem, qntdEstoque } = value.detalhesProdutoAdmin;

                    const send = (event) => {
                        event.preventDefault();
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
                            console.log(ProdutoSalvar);
                            value.handleSubmitCadastroProduto(ProdutoSalvar);
                        }
                        else
                            console.log("erro");
                    }

                    return (
                        <EditarProdutoWrapper className="container py-5 background-white">
                            <div className="ml-auto">
                                <div className="container">
                                    <Link to="/detail-produto-admin" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                        <BotaoVoltar />
                                    </Link>
                                </div>
                                <Title name="EDITAR " title={`PRODUTO #${idProduto}`} />
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <div className="card">
                                                <div className="p-4 container">
                                                    <div className="row pb-4 div-background">
                                                        <div className="col-4 border">
                                                            <h5 className="text-center div-title">Atual</h5>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    Nome:
                                                                </div>
                                                                <div className="col-6 div-data">
                                                                    <span>{nome}</span>
                                                                </div>
                                                                <div className="col-6">
                                                                    Preço:
                                                                </div>
                                                                <div className="col-6 div-data">
                                                                    <span>{preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</span>
                                                                </div>
                                                                <div className="col-6">
                                                                    Peso:
                                                                </div>
                                                                <div className="col-6 div-data">
                                                                    <span>{peso}kg</span>
                                                                </div>
                                                                <div className="col-6">
                                                                    Imagem:
                                                                </div>
                                                                <div className="col-6 div-data">
                                                                    <span>{imagem}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-8 border">
                                                            <form id="form-novo-endereco" onSubmit={send}>
                                                                <h5 className="text-center div-title">Novo</h5>
                                                                <div className="div-inputs-form">
                                                                    <div className="row div-row">
                                                                        <div className="col-2 div-campo">
                                                                            Nome:
                                                                        </div>
                                                                        <div className="col-10 div-input">
                                                                            <input type="text" onChange={() => { value.handleChangeCadastroProduto(); }} className="form-control" id="inputNome" name="inputNome" />
                                                                            <div className="text-danger" hidden={value.cadastroProdutoInputs[0].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[0].error}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row div-row">
                                                                        <div className="col-2 div-campo">
                                                                            Preço:
                                                                        </div>
                                                                        <div className="col-10 div-input">
                                                                            <input type="text" onChange={() => { value.mascaraNumeros("", "inputPreco"); value.handleChangeCadastroProduto(); }} className="form-control" id="inputPreco" name="inputPreco" />
                                                                            <div className="text-danger" hidden={value.cadastroProdutoInputs[1].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[1].error}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row div-row">
                                                                        <div className="col-2 div-campo">
                                                                            Peso:
                                                                        </div>
                                                                        <div className="col-10 div-input">
                                                                            <input type="text" onChange={() => { value.mascaraNumeros("##.##", "inputPeso"); value.handleChangeCadastroProduto(); }} className="form-control" id="inputPeso" name="inputPeso" />
                                                                            <div className="text-danger" hidden={value.cadastroProdutoInputs[2].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[2].error}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row div-row">
                                                                        <div className="col-2 div-campo">
                                                                            Quantidade:
                                                                        </div>
                                                                        <div className="col-10 div-input">
                                                                            <input type="text" onChange={() => { value.mascaraNumeros("", "inputQuantidade"); value.handleChangeCadastroProduto(); }} className="form-control" id="inputQuantidade" name="inputQuantidade" />
                                                                            <div className="text-danger" hidden={value.cadastroProdutoInputs[3].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[3].error}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row div-row">
                                                                        <div className="col-2 div-campo">
                                                                            Link imagem:
                                                                        </div>
                                                                        <div className="col-10 div-input">
                                                                            <input type="text" onChange={() => { value.handleChangeCadastroProduto(); }} className="form-control" id="inputImagem" name="inputImagem" />
                                                                            <div className="text-danger" hidden={value.cadastroProdutoInputs[4].errorNotVisible ? true : false}>{value.cadastroProdutoInputs[4].error}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <button className="btn-submit">
                                                                        Salvar
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </EditarProdutoWrapper>
                    );
                }
                }
            </ProdutoConsumer >
        );
    }
}

const EditarProdutoWrapper = styled.div`
.div-title{
    text-align: center;
    font-size: 1.2rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    margin-bottom: 1rem;
    background: var(--lightBlue2);
}
.div-background{
    background: var(--honeyDew);
}
.div-row{
    padding: 0.3rem 0 0.3rem 0;
}
.card{
    padding: 4px;
    border-style:solid;
    transition:all 0.3s linear;
}
.div-data{
    font-family: "Roboto Condensed";
    color: var(--lightBlue);
    text-align: left;
}
.div-input{
    font-family: "Roboto Condensed";
}
.div-campo{
    text-align: right;
}
input{
    width: 100%;
}
select{
    width: 100%;
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
.btn-submit {
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
.btn-submit:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;
